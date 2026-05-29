import { NextRequest, NextResponse } from 'next/server';

// Free LLM via z-ai-web-dev-sdk (no API key needed - free tier)
async function chatWithZAI(message: string, systemPrompt: string): Promise<string> {
  const ZAI = (await import('z-ai-web-dev-sdk')).default;
  const zai = await ZAI.create();

  const completion = await zai.chat.completions.create({
    messages: [
      { role: 'assistant', content: systemPrompt },
      { role: 'user', content: message },
    ],
    thinking: { type: 'disabled' },
  });

  return completion.choices[0]?.message?.content || '';
}

// Fallback: Free Gemini API
async function chatWithGemini(message: string, systemPrompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDwX5NAuimLA-SoBwtPXuCWDlyP8uq37lw';

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { maxOutputTokens: 1000 },
      }),
    }
  );

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// Fallback: freeLLMAPI (OpenAI-compatible proxy with aggregated free-tier keys)
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
      max_tokens: 1000,
    }),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

export async function POST(request: NextRequest) {
  try {
    const { message, system } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = system || "You are a helpful AI assistant for Rakshith Kumar K.N's portfolio.";
    let reply = '';

    // Try providers in order: z-ai (free) → Gemini (free) → freeLLMAPI (free aggregated)
    const providers = [
      { name: 'z-ai', fn: () => chatWithZAI(message, systemPrompt) },
      { name: 'gemini', fn: () => chatWithGemini(message, systemPrompt) },
      { name: 'freellmapi', fn: () => chatWithFreeLLMAPI(message, systemPrompt) },
    ];

    for (const provider of providers) {
      try {
        reply = await provider.fn();
        if (reply && reply.trim().length > 0) {
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
