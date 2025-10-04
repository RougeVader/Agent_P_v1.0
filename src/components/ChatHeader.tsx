import React from 'react';
import { Bot, Settings } from 'lucide-react';

const ChatHeader = () => {
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
      <button className="p-2 rounded-full hover:bg-accent">
        <Settings size={20} className="text-muted-foreground" />
      </button>
    </header>
  );
};

export default ChatHeader;