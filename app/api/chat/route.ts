import { NextResponse } from 'next/server'

const OLLAMA_HOST = process.env.NEXT_PUBLIC_OLLAMA_HOST || 'http://localhost:11434'


export async function POST(req: Request) {
  try {
    // Parse the request body
    const { message, model = 'llama2', stream = false } = await req.json();

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input: "message" is required and must be a string.' },
        { status: 400 }
      );
    }

    // Prepare API call
    const response = await fetch(`${OLLAMA_HOST}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, prompt: message, stream }),
      // Add a timeout to avoid hanging requests
      signal: AbortSignal.timeout(10000), // 10 seconds timeout
    });

    // Check API response
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Ollama API error: ${response.status} - ${errorText}`);
    }

    // Parse the API response
    const data = await response.json();
    return NextResponse.json({ response: data.response });
  } catch (error: any) {
    console.error('Error calling Ollama API:', error);

    // Handle specific errors more gracefully
    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request to Ollama API timed out.' },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Failed to get response from Ollama.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch(`${OLLAMA_HOST}/api/tags`)
    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`)
    }
    const data = await response.json()
    return NextResponse.json({ 
      status: 'running', 
      models: data.models.map((model: any) => ({
        name: model.name,
        modified_at: model.modified_at,
        size: model.size
      }))
    })
  } catch (error) {
    console.error('Error checking Ollama status:', error)
    return NextResponse.json({ status: 'not running' }, { status: 500 })
  }
}

