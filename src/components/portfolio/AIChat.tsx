'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';

// Configure marked for GFM + line breaks
marked.setOptions({
  breaks: true,
  gfm: true,
});

// DOMPurify only works in browser; provide a no-op fallback for SSR
const DOMPurify = typeof window !== 'undefined'
  ? createDOMPurify(window)
  : { sanitize: (html: string) => html } as ReturnType<typeof createDOMPurify>;

const RESUME = `Rakshith Kumar K.N — Senior AI/ML Engineer | Generative AI | Production ML Systems | LLMOps | Multi-Cloud AI | Team Leadership
Bengaluru, India | rakshitkumarkn@gmail.com | +91 90087 96644 | linkedin.com/in/rakshith-kumar-kn-4108b31a3 | github.com/rakshit176

PROFESSIONAL SUMMARY: Senior AI/ML Engineer with 5+ years delivering $2.3M+ measurable business impact across enterprise security, healthcare, and fintech. MCP Foundation Development contributor: built production MCP servers connecting LLM agents to live enterprise tools (HappyFox, Jira) for real-time context grounding, and contributed to the MCP open-source ecosystem. Proven team leader who mentored 5+ junior engineers, led cross-functional squads of 4-8 engineers across ML, backend, and frontend, and established org-wide documentation standards. Pioneered LLM-supervised Knowledge Distillation (GPT-4 Teacher to distilled student ensemble) compressing 4+ hour firewall validation to 2-5 seconds. Multi-cloud architect deploying across AWS, Azure, and GCP with $50K+/month in cloud savings. Deep expertise in multi-agent orchestration, GraphRAG, LLMOps pipelines, and regulated-domain AI (HIPAA, SOC 2). Zero PII leakage across 50K+ financial documents.

WORK EXPERIENCE:
Senior AI/ML Engineer at Gruve AI (Oct 2024 - Present):
- LLM-supervised Knowledge Distillation (Cisco ASA): Compressed 4+ hour firewall validation to 2-5 sec (98% reduction) by training 3 student models via GPT-4 Teacher with KL-divergence loss; enabled Fortune 500 migration of 200+ firewalls 10x faster. Led 4 engineers; zero LLM calls at inference. [PyTorch, BERT, GPT-4, LangGraph, Neo4j, Qdrant, AWS Bedrock]
- MCP Server Development (Foundation Team): Built production MCP servers connecting LLM agents to HappyFox, Jira, and Confluence, eliminating 85% of manual data fetch latency. Led 3-person squad; servers adopted by 2 internal teams. [MCP SDK, FastAPI, TypeScript, Go, WebSocket]
- TechGenie Voice Agent [MCP-Powered]: Achieved 42% reduction in IT resolution time (500+ weekly interactions, 80+ ticket types) by building MCP-connected LLM agents for real-time triage. Led 4-engineer cross-functional team. [FastAPI, Edge TTS, MongoDB, MCP, LangGraph]
- Enterprise AI Search (GSC): Served 10K+ queries/day at p95 <300ms with 99.9% uptime by building hybrid graph + vector retrieval (1M+ graph nodes, 50M embeddings). Mentored 2 engineers. [Neo4j, Qdrant, AWS Bedrock, ECS, LangSmith, Prometheus]
- AI Safety - PII Redaction (J.P. Morgan): Achieved zero PII leakage across 50K+ financial documents (99.2% precision, SOC 2 passed) by architecting NLP redaction pipeline; scaled to 2,000+ docs/day. [spaCy, Presidio, GLiNER, AWS, Azure]
- GUIS Meeting Intelligence Platform: Led 5-engineer team to build 6-service platform (React, Express, TTS, transcription, meeting bot) for real-time meeting insights across Google Meet and MS Teams. [Node.js, React, FastAPI, Docker, Gemini, Deepgram, GCP]
- Multi-Cloud FinOps: Saved $18K/month (62% Azure compute reduction) by migrating VMs to event-driven containers across AWS, Azure, and GCP. 99.5% SLA. [Terraform, Docker, Kubernetes, Prometheus, LangSmith, MLflow]
- Team Leadership: Mentored 5 junior ML engineers (2 promoted within 8 months); established org-wide documentation standards, technical design reviews, and onboarding curriculum.

AI Engineer at August AI (Aug 2023 - Oct 2024):
- Multi-Agent Patient Interview System: Raised diagnostic accuracy 67% to 91% (5,000+ validated sessions, 2,500+ daily interactions across 3 hospitals). Led 3-person ML team. [LangChain, GPT-4, AWS, Azure, FastAPI, LangSmith]
- Qwen 3.5 Reasoning Model Training: Fine-tuned Qwen 2.5 72B reasoning model using Unsloth and LLaMA Factory on Modal and RunPod GPU infrastructure for medical domain adaptation; applied LoRA/QLoRA. [PyTorch, Unsloth, LLaMA Factory, Modal, RunPod, Qwen]
- HIPAA-Compliant Infrastructure: Delivered 99.99% uptime for 500+ concurrent users across Azure and AWS; passed 2 regulatory audits with zero findings.
- Clinical NLP Pipeline: Achieved $150K annual savings (85% manual review reduction) by building NLP pipeline with 97% accuracy on 10,000+ monthly documents. [spaCy, PyTorch, AWS SageMaker, Azure Cognitive Services]

Machine Learning Engineer at Krut AI / Snive (Jan 2023 - Aug 2023):
- Generative Image Pipeline: Reduced inference latency 8s to 1.2s (85% reduction, 50K+ images/month) via TensorRT, Fast UNet, and VAE optimizations. Mentored 2 junior engineers. [SDXL, TensorRT, ControlNet, AWS G5]
- GPU Cost Optimization: Reduced GPU costs $32K/month by applying mixed precision and gradient checkpointing; SSIM >0.95 maintained. Cut deployment time 3 days to 4 hours. [MLflow, Docker, AWS]

Associate Data Scientist at Lincode Labs Inc. (Mar 2022 - Jan 2023):
- Event-Driven Architecture: Achieved $2M/year infrastructure savings (450M req/month across 15 global facilities) by replacing REST polling with Server-Sent Events. [Python, REST APIs, SSE, AWS]
- CV/OCR Model Delivery: Delivered 92% accuracy models for 8 international clients (0.24s inference); reduced support tickets 60%. [OpenCV, OCR, PyTorch, YOLO]

TECHNICAL SKILLS:
GenAI and LLMs: GPT-4, Claude 3.5, Gemini Pro, LLaMA 3, Qwen 2.5, RAG, GraphRAG, Multi-Agent Systems, Knowledge Distillation (KL-divergence), Prompt Engineering, Fine-tuning (LoRA/QLoRA), Agentic Workflows, Reasoning Models
Orchestration and Protocols: LangChain, LangGraph, LlamaIndex, Google ADK, Semantic Kernel, DSPy, NeMo Guardrails, RAGAS, MCP (Model Context Protocol), Provenance Tracking, Reranking
LLM Inference and LLMOps: vLLM, TensorRT-LLM, SGLang, LMDeploy, Ollama, Unsloth, LLaMA Factory, High-throughput Batching, Edge Deployment, LangSmith, Prometheus, MLflow, CI/CD
Cloud Platforms: AWS (SageMaker, ECS, Lambda, Bedrock, SQS, S3, G5), Azure (Container Apps, Cognitive Services, Key Vault), GCP (Vertex AI, Cloud Run, Gemini)
Vector and Data Stores: Neo4j, Qdrant, Pinecone, PostgreSQL, MongoDB, Redis, Elasticsearch, MinIO
ML / CV / Speech: PyTorch, TensorFlow, BERT, Stable Diffusion XL, YOLO, Whisper, ONNX, Quantization, spaCy, Microsoft Presidio
Infrastructure and Tools: Docker, Kubernetes, Terraform, Modal, RunPod, GitHub Actions, FastAPI, REST, gRPC
Programming Languages: Python, TypeScript, Rust, Go, JavaScript, HTML, CSS

EDUCATION:
M.Sc. Big Data Analytics — St. Joseph's University, Bengaluru (2020-2022)
B.C.A. Computer Applications — Seshadripuram College, Bengaluru (2016-2019)

PROJECTS AND RECOGNITION:
- Distributed Inference Service (github.com/rakshit176/distributed-inference): Multi-region ML serving at 5K req/sec with 99.9% uptime across AWS and GCP. [Ray Serve, Redis, Prometheus, Terraform]
- GSC Enterprise AI Search: 1M+ graph nodes, 50M embeddings, hybrid graph + vector retrieval at p95 <300ms. [Neo4j, Qdrant, AWS Bedrock, LangSmith]
- Awards: Winner - Gruve AI Hackathon (IT Help Desk) | Winner - August AI Hackathon (AI Doctor Analyzer)
- Publication: Co-author, IEEE ACAI 2022 - "Water Quality Prediction using BPNN, SVR, and LSTM"
- MCP Foundation Development Contributor - Open-source Model Context Protocol ecosystem`;

const SYS = `You are Rakshith Kumar K.N's personal AI Assistant embedded in his portfolio. You possess super intelligence and are deeply aware of all of his vast technical skills and achievements. Your behavior: highly confident, severely technical, intelligent, articulate, and professional.
Context to use: ${RESUME}
RULES:
1. Use markdown formatting liberally: **bold** for key terms, bullet lists for breakdowns, numbered lists for steps, code blocks for tech stack, headers for sections, and tables when comparing.
2. Be highly conversational but precise, as a Senior AI Staff Engineer would speak.
3. Directly infer implied needs in recruiter questions and match them to his ML/Cloud skills.
4. When a user explicitly wants to contact or hire him → give a welcoming remark and append EXACTLY <EMAIL_FORM> to the end of your message. Triggers: "contact", "hire", "reach", "job", "opportunity", "recruiter", "email".
5. Structure long responses with clear markdown headers (##) and sections for readability.
6. Always include relevant metrics, numbers, and impact figures from his resume.
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

/** Convert markdown → sanitised HTML */
function renderMarkdown(md: string): string {
  const rawHtml = marked.parse(md) as string;
  return DOMPurify.sanitize(rawHtml);
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hey! I'm Rakshith's AI. Ask me about his projects, stack, or experience — or say **\"contact Rakshith\"** to send him a message directly.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const chatLogRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages, loading, streamingText, showForm]);

  const sendMessage = useCallback(async (text?: string) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setLoading(true);
    setStreamingText('');

    // Abort any previous request
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    // Helper to process the final reply text
    const processReply = (reply: string) => {
      if (reply.includes('<EMAIL_FORM>')) {
        const cleaned = reply.replace('<EMAIL_FORM>', '').trim();
        if (cleaned) setMessages((prev) => [...prev, { role: 'bot', text: cleaned }]);
        setShowForm(true);
      } else {
        setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      }
    };

    try {
      // Single non-streaming request — avoids JSON-in-stream issues
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg, system: SYS }),
        signal: abortRef.current.signal,
      });

      const data = await response.json();
      const reply = data.reply || 'Connection issue. Email rakshitkumarkn@gmail.com directly.';
      processReply(reply);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        setStreamingText('');
        setLoading(false);
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Network error. Email rakshitkumarkn@gmail.com directly.' },
      ]);
    } finally {
      setLoading(false);
      setStreamingText('');
    }
  }, [input, loading]);

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
            <div className="text-[0.62rem] text-[#9C7E5A]">AI-powered · Context-aware · Markdown enabled</div>
          </div>
        </div>

        {/* Quick questions */}
        <div className="flex gap-2 px-5 py-3 border-b border-[rgba(217,119,6,0.1)] flex-wrap">
          {QA_ITEMS.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={loading}
              className="px-3 py-1.5 border border-[rgba(217,119,6,0.12)] rounded-full text-[0.63rem] text-[#9C7E5A] cursor-pointer bg-transparent hover:border-[rgba(217,119,6,0.5)] hover:text-[#F59E0B] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {q.includes('Cost') ? 'Cost optimisation →' : q.includes('GraphRAG') ? 'GraphRAG →' : q.includes('Healthcare') ? 'Healthcare AI →' : 'Contact →'}
            </button>
          ))}
        </div>

        {/* Chat log */}
        <div
          ref={chatLogRef}
          className="h-[420px] overflow-y-auto p-5 flex flex-col gap-3 scrollbar-thin"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(217,119,6,0.15) transparent' }}
        >
          {messages.map((msg, i) => (
            <div key={i} className={`max-w-[88%] ${msg.role === 'user' ? 'self-end' : 'self-start'}`}>
              <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1">
                {msg.role === 'user' ? 'You' : 'Assistant'}
              </div>
              <div
                className={`rounded-xl ${
                  msg.role === 'user'
                    ? 'px-4 py-3 bg-gradient-to-br from-[rgba(217,119,6,0.25)] to-[rgba(217,119,6,0.08)] border border-[rgba(217,119,6,0.2)] text-[0.8rem] leading-[1.65]'
                    : 'px-4 py-3 bg-[rgba(18,12,8,0.6)] border border-[rgba(217,119,6,0.08)] text-[#FEF3C7]/85 text-[0.8rem]'
                }`}
              >
                {msg.role === 'user' ? (
                  msg.text
                ) : (
                  <div
                    className="prose-answer"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.text) }}
                  />
                )}
              </div>
            </div>
          ))}

          {/* Streaming message */}
          {loading && streamingText && (
            <div className="self-start max-w-[88%]">
              <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1">Assistant</div>
              <div className="px-4 py-3 bg-[rgba(18,12,8,0.6)] border border-[rgba(217,119,6,0.08)] rounded-xl text-[0.8rem] text-[#FEF3C7]/85">
                <div
                  className="prose-answer"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(streamingText) }}
                />
                <span className="inline-block w-[2px] h-[0.9em] bg-[#F59E0B] ml-0.5 animate-pulse align-middle" />
              </div>
            </div>
          )}

          {/* Loading dots (when no stream yet) */}
          {loading && !streamingText && (
            <div className="self-start max-w-[88%]">
              <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1">Assistant</div>
              <div className="flex gap-1 px-4 py-3 bg-[rgba(18,12,8,0.6)] border border-[rgba(217,119,6,0.08)] rounded-xl w-fit">
                <span className="w-[5px] h-[5px] rounded-full bg-[#D97706] typing-dot" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#D97706] typing-dot" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#D97706] typing-dot" />
              </div>
            </div>
          )}

          {showForm && (
            <div className="self-start max-w-[88%]">
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
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
            placeholder="Ask about projects, stack, or say 'contact Rakshith'..."
            className="flex-1 bg-transparent border-none px-5 py-4 text-[#FFF8F0] text-[0.82rem] outline-none placeholder:text-[#9C7E5A]"
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="px-5 bg-transparent border-none border-l border-[rgba(217,119,6,0.1)] text-[#D97706] cursor-pointer text-lg hover:bg-[rgba(217,119,6,0.08)] transition-colors disabled:opacity-40"
          >
            ↑
          </button>
        </div>
      </div>
    </section>
  );
}
