import OllamaChat from '../components/OllamaChat'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ollama Chat</h1>
      <OllamaChat />
    </main>
  )
}

