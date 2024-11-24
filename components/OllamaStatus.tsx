'use client'

import { useEffect, useState } from 'react'

export default function OllamaStatus() {
  const [status, setStatus] = useState<'running' | 'not running' | 'checking'>('checking')

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('/api/chat')
        const data = await response.json()
        setStatus(data.status)
      } catch (error) {
        console.error('Error checking Ollama status:', error)
        setStatus('not running')
      }
    }

    checkStatus()
    const interval = setInterval(checkStatus, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`p-2 rounded-md text-white font-semibold ${
      status === 'running' ? 'bg-green-500' :
      status === 'not running' ? 'bg-red-500' :
      'bg-yellow-500'
    }`}>
      Ollama Status: {status}
    </div>
  )
}

