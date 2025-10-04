import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function ask() {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResponse("");
    try {
      const result = await invoke<string>("ask_ollama", { prompt });
      setResponse(result);
    } catch (e) {
      setResponse(`Failed to get response: ${e}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>Agent_P</h1>
      <p>Your friendly AI Companion</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          ask();
        }}
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.currentTarget.value)}
          placeholder="Ask me anything..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Thinking..." : "Ask"}
        </button>
      </form>

      {response && (
        <div className="response-container">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}

export default App;
