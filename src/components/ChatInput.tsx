import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  ask: () => void;
  isLoading: boolean;
}

const ChatInput = ({ prompt, setPrompt, ask, isLoading }: ChatInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      ask();
    }
  };

  return (
    <div className="p-4 mt-auto bg-background border-t border-border/40">
      <form
        className="flex items-center gap-2 bg-gray-100 p-2 rounded-xl shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          ask();
        }}
      >
        <input
          className="flex-1 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Agent_P anything..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-primary text-primary-foreground disabled:bg-muted disabled:text-muted-foreground transition-colors duration-300"
          disabled={isLoading}
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;