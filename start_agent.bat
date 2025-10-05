@echo off
echo Checking for local Ollama models...
ollama list > Agent_P\model_list.txt
start "Ollama Server" cmd /k "ollama serve"
cd Agent_P
start "Agent_P" cmd /k "npm run tauri dev"