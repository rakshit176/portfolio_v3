'use client';

import { useState, useRef, useEffect } from 'react';

const RESUME = `Rakshith Kumar K.N — Senior AI/ML Engineer · Bengaluru
rakshitkumarkn@gmail.com | +91 9008796644
EXPERIENCE: Gruve AI (Oct 2025–Present): Cisco FMT v2.0 GraphRAG, J.P. Morgan NLP redaction, GSC AI search sub-300ms, Azure cost reduction 60%, TechGenie voice agent 40% faster. August AI (Aug 2024–Oct 2025): multi-agent healthcare, 91% accuracy, HIPAA infra 99.99% uptime. Snive/Krut AI (Jan–Aug 2024): SDXL 1–2s inference, $30K/month saved. Lincode Labs (Mar 2022–Jan 2024): OCR 92% accuracy, $2M annual savings.
SKILLS: GPT-4, Claude, Gemini, LLaMA, Mistral, Deepseek, RAG, GraphRAG, Fine-tuning, PEFT, LoRA, Prompt Engineering, Chain-of-Thought, Function Calling, MCP, LangChain, LangGraph, LlamaIndex, Hugging Face, Transformers, Google ADK, CrewAI, AutoGen, Semantic Kernel, Stable Diffusion, vLLM, Pinecone, Chroma, Weaviate, Qdrant, Neo4j, PyTorch, TensorFlow, Python, CUDA, TensorRT, Quantization, Pruning, AWS (ECS, Lambda, SageMaker, Bedrock, EKS), Azure (Container Apps, OpenAI, AI Foundry), GCP, Docker, Kubernetes, MLflow, CI/CD, Medical NLP, Clinical Decision Support, FHIR, HL7, HIPAA, FDA Compliance, Postgres, Clickhouse, Aurora, MongoDB, FastAPI, GraphQL, Redis, Elasticsearch, ETL, Realtime Processing`;

const SYS = `You are Rakshith Kumar K.N's personal AI Assistant embedded in his portfolio. You possess super intelligence and are deeply aware of all of his vast technical skills and achievements. Your behavior: highly confident, severely technical, intelligent, articulate, and professional.
Context to use: ${RESUME}
RULES:
1. Use markdown formatting when discussing code or tools.
2. Be highly conversational but precise, as a Senior AI Staff Engineer would speak.
3. Directly infer implied needs in recruiter questions and match them to his ML/Cloud skills.
4. When a user explicitly wants to contact or hire him → give a welcoming remark and append EXACTLY <EMAIL_FORM> to the end of your message. Triggers: "contact", "hire", "reach", "job", "opportunity", "recruiter", "email".
His email: rakshitkumarkn@gmail.com`;

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const QA_ITEMS = [
  'How did Rakshith optimise LLM inference cost?',
  'Tell me about the GraphRAG project',
  'Healthcare AI experience?',
  'I want to contact Rakshith about a job',
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hey! I'm Rakshith's AI. Ask me about his projects, stack, or experience — or say **\"contact Rakshith\"** to send him a message directly.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const chatLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages, loading, showForm]);

  const sendMessage = async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, system: SYS }),
      });
      const data = await response.json();
      let reply = data.reply || 'Connection issue. Email rakshitkumarkn@gmail.com directly.';

      if (reply.includes('<EMAIL_FORM>')) {
        reply = reply.replace('<EMAIL_FORM>', '').trim();
        if (reply) setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
        setShowForm(true);
      } else {
        setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Network error. Email rakshitkumarkn@gmail.com directly.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const submitForm = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      const warning: Message = { role: "bot", text: "Please fill name, email, and message." };
      setMessages((prev) => [...prev, warning]);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      const warning: Message = { role: "bot", text: "Enter a valid email." };
      setMessages((prev) => [...prev, warning]);
      return;
    }
    setSending(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `From: ${formData.name} (${formData.email})\n${formData.message}`,
          system: "Confirm warmly in 2 sentences that message was sent to rakshitkumarkn@gmail.com and he replies within 24 hours.",
        }),
      });
      const data = await response.json();
      const reply = data.reply || `Thanks ${formData.name}! Message sent — reply within 24h.`;
      setShowForm(false);
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      setTimeout(() => {
        window.open(
          `mailto:rakshitkumarkn@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio inquiry from ' + formData.name)}&body=${encodeURIComponent('From: ' + formData.name + ' (' + formData.email + ')\n\n' + formData.message)}`
        );
      }, 600);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Error. Email directly: rakshitkumarkn@gmail.com' }]);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="chat-section" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D97706] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#D97706] inline-block" />
        05 · AI Interface
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
        Ask Me Anything.
      </h2>
      <p className="text-[#9C7E5A] text-[0.85rem] mb-0">
        Powered by AI · Trained on Rakshith&apos;s resume · Can send him an email directly.
      </p>

      <div className="max-w-[720px] mx-auto mt-10 border border-[rgba(217,119,6,0.12)] rounded-[20px] overflow-hidden bg-[#120C08]/70">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[rgba(217,119,6,0.1)] flex items-center gap-3">
          <div className="w-[7px] h-[7px] rounded-full bg-[#F59E0B] pulse-indicator" />
          <div>
            <div className="text-[0.78rem] font-semibold text-[#FEF3C7]">RAKSHITH.AI</div>
            <div className="text-[0.62rem] text-[#9C7E5A]">AI-powered · Context-aware</div>
          </div>
        </div>

        {/* Quick questions */}
        <div className="flex gap-2 px-5 py-3 border-b border-[rgba(217,119,6,0.1)] flex-wrap">
          {QA_ITEMS.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="px-3 py-1.5 border border-[rgba(217,119,6,0.12)] rounded-full text-[0.63rem] text-[#9C7E5A] cursor-pointer bg-transparent hover:border-[rgba(217,119,6,0.5)] hover:text-[#F59E0B] transition-all"
            >
              {q.includes('Cost') ? 'Cost optimisation →' : q.includes('GraphRAG') ? 'GraphRAG →' : q.includes('Healthcare') ? 'Healthcare AI →' : 'Contact →'}
            </button>
          ))}
        </div>

        {/* Chat log */}
        <div
          ref={chatLogRef}
          className="h-[380px] overflow-y-auto p-5 flex flex-col gap-3 scrollbar-thin"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(217,119,6,0.15) transparent' }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`max-w-[86%] ${msg.role === 'user' ? 'self-end' : 'self-start'}`}>
              <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1">
                {msg.role === 'user' ? 'You' : 'Assistant'}
              </div>
              <div
                className={`px-4 py-3 rounded-xl text-[0.8rem] leading-[1.65] ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-[rgba(217,119,6,0.25)] to-[rgba(217,119,6,0.08)] border border-[rgba(217,119,6,0.2)]'
                    : 'bg-[rgba(18,12,8,0.6)] border border-[rgba(217,119,6,0.08)] text-[#FEF3C7]/85'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="self-start max-w-[86%]">
              <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1">Assistant</div>
              <div className="flex gap-1 px-4 py-3 bg-[rgba(18,12,8,0.6)] border border-[rgba(217,119,6,0.08)] rounded-xl w-fit">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D97706] typing-dot" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#D97706] typing-dot" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#D97706] typing-dot" />
              </div>
            </div>
          )}

          {showForm && (
            <div className="self-start max-w-[86%]">
              <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1">Assistant</div>
              <div className="bg-[rgba(217,119,6,0.04)] border border-[rgba(217,119,6,0.18)] rounded-[14px] p-5 flex flex-col gap-3">
                <div className="text-[0.8rem] text-[#FEF3C7]/65">Fill in your details and I&apos;ll send Rakshith a message ↓</div>
                <div>
                  <label className="text-[0.58rem] tracking-[0.14em] uppercase text-[#F59E0B]">Your Name</label>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full mt-1 bg-[rgba(10,7,5,0.6)] border border-[rgba(217,119,6,0.12)] rounded-lg px-3 py-2 text-[0.8rem] text-[#FFF8F0] outline-none focus:border-[rgba(217,119,6,0.5)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[0.58rem] tracking-[0.14em] uppercase text-[#F59E0B]">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full mt-1 bg-[rgba(10,7,5,0.6)] border border-[rgba(217,119,6,0.12)] rounded-lg px-3 py-2 text-[0.8rem] text-[#FFF8F0] outline-none focus:border-[rgba(217,119,6,0.5)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[0.58rem] tracking-[0.14em] uppercase text-[#F59E0B]">Subject</label>
                  <input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Staff AI Engineer at ..."
                    className="w-full mt-1 bg-[rgba(10,7,5,0.6)] border border-[rgba(217,119,6,0.12)] rounded-lg px-3 py-2 text-[0.8rem] text-[#FFF8F0] outline-none focus:border-[rgba(217,119,6,0.5)] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[0.58rem] tracking-[0.14em] uppercase text-[#F59E0B]">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Rakshith..."
                    rows={3}
                    className="w-full mt-1 bg-[rgba(10,7,5,0.6)] border border-[rgba(217,119,6,0.12)] rounded-lg px-3 py-2 text-[0.8rem] text-[#FFF8F0] outline-none resize-y min-h-[72px] focus:border-[rgba(217,119,6,0.5)] transition-colors"
                  />
                </div>
                <button
                  onClick={submitForm}
                  disabled={sending}
                  className="self-start px-4 py-2 bg-gradient-to-r from-[#D97706] to-[#92400E] rounded-full text-[#FFF8F0] text-[0.72rem] font-semibold hover:opacity-85 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sending ? 'Sending...' : 'Send to Rakshith ↑'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex border-t border-[rgba(217,119,6,0.1)]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about projects, stack, or say 'contact Rakshith'..."
            className="flex-1 bg-transparent border-none px-5 py-4 text-[#FFF8F0] text-[0.82rem] outline-none placeholder:text-[#9C7E5A]"
          />
          <button
            onClick={() => sendMessage()}
            className="px-5 bg-transparent border-none border-l border-[rgba(217,119,6,0.1)] text-[#D97706] cursor-pointer text-lg hover:bg-[rgba(217,119,6,0.08)] transition-colors"
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
}
