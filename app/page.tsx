import OllamaChat from '../components/OllamaChat'

export default function Home() {
  return (
    <main className="container mx-auto p-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Ollama Chat</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <OllamaChat />
      </div>
    </main>
  )
}

