
# 🤖 Agent_P: Your Desktop AI Assistant

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Contributions: welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen.svg)

**Agent_P** is a powerful, locally-run AI assistant built for your desktop. It leverages the speed of Rust and the flexibility of a React frontend, all wrapped in a modern Tauri shell. By running models locally via Ollama, Agent_P ensures your data stays private and your assistant is always available.

---

## 🚀 Overview

The goal of Agent_P is to provide a powerful, extensible, and private AI companion to help with a variety of tasks directly from your desktop. It's designed to be modular, allowing for the future integration of new tools, memory systems, and interaction methods.

### ✨ Features
- **Private & Local:** All AI processing happens on your machine. No data is sent to the cloud.
- **Modern UI:** A clean and intuitive interface built with React and TypeScript.
- **High Performance:** A Rust-based backend via Tauri ensures a small footprint and snappy performance.
- **Extensible:** Designed with future enhancements in mind.

### 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Backend:** Rust
- **Framework:** Tauri
- **Local LLM Provider:** Ollama

---

## 📋 Prerequisites

Before you can run Agent_P, you must have the following software installed on your system.

1.  **Git:** To clone the repository.
    - [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2.  **Node.js:** Required for the frontend. `v20.x` or higher is recommended.
    - [Download Node.js](https://nodejs.org/)
3.  **Rust:** The backend is written in Rust.
    - Install via `rustup`: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
4.  **Tauri Prerequisites:** You need to install several system dependencies for Tauri development.
    - [Tauri Prerequisites Guide](https://tauri.app/v1/guides/getting-started/prerequisites) (Follow the instructions for your specific OS).
5.  **Ollama:** To run the local large language model.
    - [Download Ollama](https://ollama.com/)

---

## ⚙️ Getting Started

Follow these steps to get your local development environment up and running.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/RougeVader/Agent_P_v1.0.git
    cd Agent_P
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Download the LLM:**
    Agent_P is configured to work well with `phi3`. Pull it using Ollama:
    ```bash
    ollama pull phi3
    ```
    *(Ensure the Ollama application is running before executing this command.)*

4.  **Run the Application:**
    This command will launch the Tauri application in development mode.
    ```bash
    npm run tauri dev
    ```

---

## 🛣️ Future Phases

This project is just getting started. Here is a glimpse of the planned roadmap:

-   **Phase 1: Core Chat Functionality**
    -   [x] Basic UI for chat interaction.
    -   [ ] Connect UI to the Ollama backend service.
    -   [ ] Stream responses from the model for real-time feedback.

-   **Phase 2: Agentic Capabilities & Tools**
    -   [ ] Implement a tool-use framework for the agent.
    -   [ ] Add a file system tool (e.g., read/write files).
    -   [ ] Add a web search tool.

-   **Phase 3: Long-Term Memory**
    -   [ ] Integrate a local vector database (e.g., LanceDB) for memory.
    -   [ ] Implement retrieval-augmented generation (RAG) to provide context from past conversations.

-   **Phase 4: Advanced Interaction**
    -   [ ] Add voice-to-text and text-to-speech for hands-free interaction.
    -   [ ] Explore proactive assistance based on user context.

---

## 🙌 Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.
