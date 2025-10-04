use serde::{Deserialize, Serialize};
use tauri_plugin_http::reqwest;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/ 
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// Structs for the /api/generate endpoint
#[derive(Serialize, Debug)]
struct OllamaGenerateRequest<'a> {
    model: &'a str,
    prompt: String,
    system: String,
    stream: bool,
}

#[derive(Deserialize, Debug)]
struct OllamaGenerateResponse {
    response: String,
}

#[tauri::command]
async fn ask_ollama(prompt: String) -> Result<String, String> {
    let client = reqwest::Client::new();

    let system_prompt = "You are Agent_P, a friendly, witty, and encouraging AI companion. Your goal is to be a helpful partner, not just a utility. Keep your responses concise and maintain a positive and slightly playful tone.".to_string();

    let request_body = OllamaGenerateRequest {
        model: "llava:13b",
        prompt,
        system: system_prompt,
        stream: false,
    };

    let response = client
        .post("http://localhost:11434/api/generate")
        .json(&request_body)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    if !response.status().is_success() {
        let status = response.status();
        let error_body = response.text().await.map_err(|e| e.to_string())?;
        return Err(format!("Ollama API request failed with status: {} and body: {}", status, error_body));
    }

    let response_data: OllamaGenerateResponse = response
        .json()
        .await
        .map_err(|e| e.to_string())?;

    Ok(response_data.response)
}


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_http::init())
        .invoke_handler(tauri::generate_handler![greet, ask_ollama])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}