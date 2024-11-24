import { Message } from '../hooks/useChat'

interface ChatMessagesProps {
  messages: Message[]
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg ${
            message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'
          }`}
        >
          <p>{message.content}</p>
          <small className="text-gray-500">{message.role}</small>
        </div>
      ))}
    </div>
  )
}

