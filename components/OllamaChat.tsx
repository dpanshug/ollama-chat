'use client'

import { useChat } from '../hooks/useChat'
import OllamaStatus from './OllamaStatus'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'

export default function OllamaChat() {
  const { messages, isLoading, error, sendMessage, selectModel } = useChat()

  return (
    <div className="space-y-4">
      <OllamaStatus onModelSelect={selectModel} />
      <div className="h-[60vh] overflow-y-auto border rounded-md p-4">
        <ChatMessages messages={messages} />
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  )
}

