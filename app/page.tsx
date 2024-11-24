import OllamaChat from '../components/OllamaChat';

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Ollama Chat
      </h1>
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <OllamaChat />
      </div>
    </main>
  );
}
