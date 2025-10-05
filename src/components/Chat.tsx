import React, { useState, useRef, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Sparkles, Bot } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const Chat = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState('mistral'); // Add model state
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  async function ask() {
    if (!prompt.trim() || isLoading) return;

    const userMessage: Message = { text: prompt, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    const currentPrompt = prompt;
    setPrompt('');
    setIsLoading(true);

    try {
      const result = await invoke<string>('ask_ollama', { prompt: currentPrompt, model });
      const aiMessage: Message = { text: result, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (e) {
      const errorMessage: Message = {
        text: `Failed to get response: ${e}`,
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <ChatHeader model={model} setModel={setModel} isLoading={isLoading} />
      <main className="flex-1 overflow-y-auto p-4 space-y-4" ref={chatContainerRef}>
        {messages.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Sparkles size={40} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Welcome to Agent_P</h2>
            <p className="text-muted-foreground mt-2">
              Your intelligent AI assistant is ready to help. Ask me anything!
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))
        )}
        {isLoading && (
          <div className='flex items-start gap-3'>
            <div className='p-2 rounded-full bg-primary/10'>
              <Bot size={20} className="text-primary" />
            </div>
            <div className='max-w-[80%] md:max-w-[70%] p-3 px-4 rounded-2xl bg-gray-100 rounded-bl-none'>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
      </main>
      <ChatInput prompt={prompt} setPrompt={setPrompt} ask={ask} isLoading={isLoading} />
    </div>
  );
};

export default Chat;