import { NextRequest, NextResponse } from 'next/server';

// Provider 1: Pollinations AI (completely free, no API key needed, anonymous)
async function chatWithPollinations(message: string, systemPrompt: string): Promise<string> {
  const response = await fetch('https://text.pollinations.ai/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      max_tokens: 1500,
    }),
  });

  if (!response.ok) throw new Error(`Pollinations error: ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// Provider 2: Free LLM API (aggregated free-tier proxy, OpenAI-compatible)
async function chatWithFreeLLMAPI(message: string, systemPrompt: string): Promise<string> {
  const FREE_LLMAPI_URL = process.env.FREE_LLMAPI_URL || 'http://localhost:3001';
  const FREE_LLMAPI_KEY = process.env.FREE_LLMAPI_KEY || 'freellmapi-ee5eec5de4672b9ab4feb9667bcf0b54f94835c183febef6';

  const response = await fetch(`${FREE_LLMAPI_URL}/v1/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${FREE_LLMAPI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'auto',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      max_tokens: 1500,
    }),
  });

  if (!response.ok) throw new Error(`FreeLLMAPI error: ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// Provider 3: z-ai-web-dev-sdk (free tier via z-ai)
async function chatWithZAI(message: string, systemPrompt: string): Promise<string> {
  const ZAI = (await import('z-ai-web-dev-sdk')).default;
  const zai = await ZAI.create();

  const completion = await zai.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
    thinking: { type: 'disabled' },
  });

  return completion.choices[0]?.message?.content || '';
}

export async function POST(request: NextRequest) {
  try {
    const { message, system } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = system || "You are a helpful AI assistant for Rakshith Kumar K.N's portfolio.";
    let reply = '';

    // Try providers in order: Pollinations (free, no key) → FreeLLMAPI (aggregated free) → z-ai (free tier)
    const providers = [
      { name: 'pollinations', fn: () => chatWithPollinations(message, systemPrompt) },
      { name: 'freellmapi', fn: () => chatWithFreeLLMAPI(message, systemPrompt) },
      { name: 'z-ai', fn: () => chatWithZAI(message, systemPrompt) },
    ];

    for (const provider of providers) {
      try {
        reply = await provider.fn();
        if (reply && reply.trim().length > 0) {
          console.log(`Chat served by: ${provider.name}`);
          break;
        }
      } catch (err) {
        console.warn(`Provider ${provider.name} failed:`, err instanceof Error ? err.message : err);
        continue;
      }
    }

    if (!reply || reply.trim().length === 0) {
      reply = 'Connection issue. Email rakshitkumarkn@gmail.com directly.';
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { reply: 'Network error. Email rakshitkumarkn@gmail.com directly.' },
      { status: 500 }
    );
  }
}
