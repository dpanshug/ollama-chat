import { useState, useCallback } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string>('llama2');

  const sendMessage = useCallback(
    async (content: string) => {
      setIsLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { role: 'user', content }]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: content, model: selectedModel }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.response },
        ]);
      } catch (error) {
        console.error('Error sending message:', error);
        setError('Failed to send message. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [selectedModel],
  );

  const selectModel = useCallback((model: string) => {
    setSelectedModel(model);
  }, []);

  return { messages, isLoading, error, sendMessage, selectModel };
}
