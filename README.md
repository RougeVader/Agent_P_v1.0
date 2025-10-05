# 🤖 Agent_P: Your Desktop AI Assistant

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Contributions: welcome](https://img.shields.io/badge/Contributions-welcome-brightgreen.svg)

**Agent_P** is a powerful, locally-run AI assistant built for your desktop. It leverages the speed of Rust and the flexibility of a React frontend, all wrapped in a modern Tauri shell. By running models locally via Ollama, Agent_P ensures your data stays private and your assistant is always available.

---

## 🚀 Overview

The goal of Agent_P is to provide a powerful, extensible, and private AI companion to help with a variety of tasks directly from your desktop. It's designed to be modular, allowing for the future integration of new tools, memory systems, and interaction methods.

### ✨ Features
- **Private & Local:** All AI processing happens on your machine. No data is sent to the cloud.
- **Modern UI:** A clean and intuitive chat interface built with React and TypeScript.
- **Local LLM Support:** Connects to your local Ollama instance to use any of your installed models.
- **Model Selection:** Easily switch between different AI models from within the application.
- **Real-time Interaction:** Get instant feedback with a loading indicator while the AI is thinking.
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
    - Go to the official Rust website: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
    - Download and run `rustup-init.exe`.
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
    cd Agent_P_v1.0
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Download an LLM:**
    Agent_P can work with any model from Ollama. We recommend `phi3` for a good balance of performance and capability.
    ```bash
    ollama pull phi3
    ```
    *(Ensure the Ollama application is running before executing this command.)*

4.  **Run the Application:**

    You have two ways to run the application:

    **Option 1: Manual Start**

    This command will launch the Tauri application in development mode.
    ```bash
    npm run tauri dev
    ```

    **Option 2: Using the Batch File**

    After completing all the download and setup steps, you can simply run the `start_agent.bat` file. This will start the application for you.

---

## 🛣️ Expanded Future Phases

-   **Phase 2: Agentic Capabilities & Tools**
    -   [ ] **Advanced Tool-Use Framework:** Implement a robust framework for the agent to use multiple tools in combination to solve complex problems.
    -   [ ] **File System Tools:** Allow the agent to read, write, and manage files and directories.
    -   [ ] **Web Search & Browsing:** Grant the ability to search the web and browse websites to gather information.
    -   [ ] **Code Execution:** Add a secure, sandboxed environment for the agent to write and execute code (e.g., Python, JavaScript) to perform complex tasks.
    -   [ ] **System Integration:** Enable interaction with the OS to manage calendars, send notifications, and control other applications (with user permission).

-   **Phase 3: Long-Term Memory & Learning**
    -   [ ] **Hybrid Memory System:** Integrate a local vector database (e.g., LanceDB) for conversational memory and a structured knowledge graph for storing facts, entities, and user preferences.
    -   [ ] **Retrieval-Augmented Generation (RAG):** Use the memory system to provide deep context from past conversations and learned facts.
    -   [ ] **Self-Correction & Learning:** Implement a mechanism for the agent to reflect on its actions, learn from mistakes, and improve its tool usage and responses over time.
    -   [ ] **Personalized Memory:** Allow the user to explicitly teach the agent facts and preferences that are stored in a dedicated, high-priority memory store.

-   **Phase 4: Advanced Interaction & Proactivity**
    -   [ ] **Multi-modal Interaction:** Add voice-to-text and text-to-speech for hands-free operation.
    -   [ ] **GUI Interaction:** Enable the agent to "see" the user's screen and interact with graphical user interfaces to automate tasks.
    -   [ ] **Proactive Assistance:** Allow the agent to anticipate user needs and proactively offer suggestions or even perform tasks in the background (with permission).
    -   [ ] **Customizable Personas:** Let the user choose from different agent personas (e.g., formal, friendly, humorous) to tailor the interaction style.

-   **Phase 5: Security Hardening & Trust**
    -   [ ] **Granular Permissions System:** Implement a settings panel for users to individually enable or disable high-risk capabilities, ensuring everything is disabled by default.
    -   [ ] **Per-Action Confirmation:** Enforce a mandatory confirmation prompt for all sensitive actions, where the agent explains what it is about to do and waits for explicit user approval.
    -   [ ] **Secure Code Sandboxing:** Develop and integrate a tightly controlled sandbox for the code execution tool, with no default access to the user's file system or network.
    -   [ ] **Comprehensive Audit Logging:** Create a transparent, user-friendly logging system that provides a clear and permanent record of all agent actions.
    -   [ ] **Community Security Audits:** Actively encourage and facilitate community-led security reviews of the open-source code to identify and resolve vulnerabilities.

---

## 🙌 Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.
