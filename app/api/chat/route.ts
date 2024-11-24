import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(req: Request) {
  const { message } = await req.json()

  try {
    const { stdout } = await execAsync(`ollama run llama2 "${message}"`)
    return NextResponse.json({ response: stdout.trim() })
  } catch (error) {
    console.error('Error running Ollama:', error)
    return NextResponse.json({ error: 'Failed to get response from Ollama' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await execAsync('ollama list')
    return NextResponse.json({ status: 'running' })
  } catch (error) {
    console.error('Error checking Ollama status:', error)
    return NextResponse.json({ status: 'not running' }, { status: 500 })
  }
}

