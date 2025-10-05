import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { Bot, Settings } from 'lucide-react';

interface ChatHeaderProps {
  model: string;
  setModel: (model: string) => void;
  isLoading: boolean;
}

const ChatHeader = ({ model, setModel, isLoading }: ChatHeaderProps) => {
  const [models, setModels] = useState<string[]>([]);

  useEffect(() => {
    async function fetchModels() {
      try {
        const result = await invoke<string>('get_models');
        const lines = result.trim().split('\n');
        if (lines.length > 1) {
          const modelNames = lines.slice(1).map(line => line.split(/\s+/)[0]);
          setModels(modelNames);
          if (modelNames.length > 0 && !modelNames.includes(model)) {
            setModel(modelNames[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch models:", error);
      }
    }
    fetchModels();
  }, []);

  return (
    <header className="flex items-center justify-between p-4 border-b border-border/40">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-full">
          <Bot size={24} className="text-primary" />
        </div>
        <div>
          <h1 className="font-bold text-foreground">Agent_P</h1>
          <p className="text-xs text-muted-foreground">Your AI Assistant</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <select
          className="bg-transparent focus:outline-none text-foreground"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={isLoading}
        >
          {models.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <button className="p-2 rounded-full hover:bg-accent">
          <Settings size={20} className="text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;