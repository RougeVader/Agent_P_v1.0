import React from 'react';
import { clsx } from 'clsx';
import { Bot, User } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === 'user';

  return (
    <div className={clsx('flex items-start gap-3', { 'self-end flex-row-reverse': isUser } )}>
      <div className={clsx('p-2 rounded-full', isUser ? 'bg-blue-100' : 'bg-primary/10')}>
        {isUser ? (
          <User size={20} className="text-blue-600" />
        ) : (
          <Bot size={20} className="text-primary" />
        )}
      </div>
      <div
        className={clsx(
          'max-w-[80%] md:max-w-[70%] p-3 px-4 rounded-2xl',
          isUser ? 'bg-blue-100 rounded-br-none' : 'bg-gray-100 rounded-bl-none'
        )}
      >
        <p className="text-foreground text-sm md:text-base whitespace-pre-wrap">
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;