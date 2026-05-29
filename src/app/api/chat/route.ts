import { NextRequest, NextResponse } from 'next/server';

// Provider 1: Free LLM API (aggregated free-tier proxy, OpenAI-compatible) — PRIMARY
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
      max_tokens: 2048,
      temperature: 0.7,
    }),
  });

  if (!response.ok) throw new Error(`FreeLLMAPI error: ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// Streaming version of FreeLLMAPI
async function streamWithFreeLLMAPI(message: string, systemPrompt: string): Promise<ReadableStream> {
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
      max_tokens: 2048,
      temperature: 0.7,
      stream: true,
    }),
  });

  if (!response.ok) throw new Error(`FreeLLMAPI stream error: ${response.status}`);

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const reader = response.body!.getReader();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        let buffer = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith('data: ')) continue;
            const data = trimmed.slice(6);
            if (data === '[DONE]') continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(encoder.encode(content));
              }
            } catch {
              // Skip malformed JSON chunks
            }
          }
        }
      } catch (err) {
        console.error('Stream error:', err);
      } finally {
        controller.close();
      }
    },
  });

  return stream;
}

// Provider 2: Pollinations AI (completely free, no API key needed, anonymous) — FALLBACK
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
      max_tokens: 2048,
    }),
  });

  if (!response.ok) throw new Error(`Pollinations error: ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// Provider 3: z-ai-web-dev-sdk (free tier via z-ai) — FALLBACK
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

// Streaming endpoint
export async function POST(request: NextRequest) {
  try {
    const { message, system, stream } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = system || "You are a helpful AI assistant for Rakshith Kumar K.N's portfolio.";

    // If streaming requested, try freellmapi stream first
    if (stream) {
      try {
        const readableStream = await streamWithFreeLLMAPI(message, systemPrompt);
        return new Response(readableStream, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Transfer-Encoding': 'chunked',
          },
        });
      } catch (err) {
        console.warn('FreeLLMAPI stream failed, falling back to non-stream:', err instanceof Error ? err.message : err);
        // Fall through to non-streaming path
      }
    }

    // Non-streaming: Try providers in order: FreeLLMAPI (primary) → Pollinations → z-ai
    let reply = '';
    const providers = [
      { name: 'freellmapi', fn: () => chatWithFreeLLMAPI(message, systemPrompt) },
      { name: 'pollinations', fn: () => chatWithPollinations(message, systemPrompt) },
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
