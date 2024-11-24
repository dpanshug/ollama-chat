'use client'

import { useEffect, useState } from 'react'

interface Model {
  name: string
  modified_at: string
  size: number
}

interface OllamaStatusProps {
  onModelSelect: (model: string) => void
}

export default function OllamaStatus({ onModelSelect }: OllamaStatusProps) {
  const [status, setStatus] = useState<'running' | 'not running' | 'checking'>('checking')
  const [models, setModels] = useState<Model[]>([])

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/chat')
        const data = await response.json()
        setStatus(data.status)
        if (data.models) {
          setModels(data.models)
          if (data.models.length > 0) {
            console.log(' models:', data.models)
            onModelSelect(data.models[0].name)
          }
        }
      } catch (error) {
        console.error('Error checking Ollama status:', error)
        setStatus('not running')
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [onModelSelect])

  return (
    <div className="space-y-2">
      <div className={`p-2 rounded-md text-white font-semibold ${
        status === 'running' ? 'bg-green-500' :
        status === 'not running' ? 'bg-red-500' :
        'bg-yellow-500'
      }`}>
        Ollama Status: {status}
      </div>
      {status === 'running' && models.length > 0 && (
        <select 
          className="w-full p-2 border rounded-md"
          onChange={(e) => onModelSelect(e.target.value)}
        >
          {models.map((model) => (
            <option key={model.name} value={model.name}>{model.name}</option>
          ))}
        </select>
      )}
    </div>
  )
}

