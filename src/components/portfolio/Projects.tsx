'use client';

import { useState } from 'react';

interface Project {
  id: string;
  cat: string;
  title: string;
  desc: string;
  kpis: string[];
  tags: string[];
  overview: string;
  details: string[];
  metrics: string[];
  stack: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'gsc', cat: 'GraphRAG · Enterprise Search', title: 'GSC — AI-Powered Search Engine',
    desc: 'End-to-end backend + data ingestion for enterprise doc search, research paper discovery, and chat-with-documents on private AWS VPC.',
    kpis: ['<300ms retrieval', 'Cross-region'], tags: ['Neo4j', 'Qdrant', 'AWS Bedrock', 'ECS'],
    overview: 'Full backend and data ingestion pipeline for enterprise document search, research paper discovery, deep semantic search, and chat-with-documents on a private AWS VPC.',
    details: ['Hybrid retrieval: Neo4j graph traversal (entity relationships) + Qdrant dense vector search in a single pass.', 'AWS Bedrock cross-region inference avoiding throttling — consistent sub-300ms retrieval.', 'Async SQS + Lambda ingestion pipeline — continuous processing without downtime.', 'Multi-hop GraphRAG for complex research queries traversing entity clusters.'],
    metrics: ['<300ms retrieval', 'Cross-region inference', 'Private AWS VPC'], stack: ['Neo4j', 'Qdrant', 'AWS Bedrock', 'ECS', 'Lambda', 'SQS', 'FastAPI'],
  },
  {
    id: 'doctor', cat: 'Healthcare AI · Multi-Agent', title: 'AI Doctor Analyzer',
    desc: 'Analyzes complex medical records, auto-parses biomarkers, generates clinical summaries. August AI Hackathon winner.',
    kpis: ['91% accuracy', 'HIPAA'], tags: ['LangGraph', 'GPT-4', 'AWS'],
    overview: 'Multi-agent clinical tool that analyzes medical records, parses biomarkers, and generates clinical summaries. Won August AI hackathon and deployed at 3 healthcare facilities.',
    details: ['Coordinator agent routes to specialist sub-agents (vitals, labs, medications, summary) — each with memory and tools.', '75% improved context retention via sliding window + structured state injection.', '97% accuracy across 10,000+ clinical documents/month.', 'HIPAA-compliant E2E encryption + RBAC — 99.99% uptime for 500+ concurrent users.'],
    metrics: ['91% accuracy', '5,000+ sessions', 'HIPAA', '$150K savings'], stack: ['LangGraph', 'GPT-4', 'AWS', 'Azure', 'FastAPI', 'MongoDB'],
  },
  {
    id: 'techgenie', cat: 'Voice Agent · IT Support', title: 'Gruve TechGenie',
    desc: 'Voice-powered IT triage agent using FastAPI + Edge TTS + MongoDB memory. 40% faster resolution across 3 enterprise clients.',
    kpis: ['↓40% resolution'], tags: ['FastAPI', 'Edge TTS', 'LangChain'],
    overview: 'Voice-powered IT support agent automating first-line triage across enterprise clients. Gruve AI hackathon project expanded to 3 live deployments.',
    details: ['STT → LangChain agent → FastAPI → Edge TTS pipeline — sub-2s round-trip.', 'MongoDB conversation memory with entity extraction across sessions.', 'Multi-agent triage: classifies issue type, routes to specialist, escalates when confidence low.', 'Auto-closes resolved tickets with full conversation transcripts.'],
    metrics: ['↓40% resolution time', '3 enterprise clients'], stack: ['FastAPI', 'Edge TTS', 'MongoDB', 'LangChain', 'WebSocket'],
  },
  {
    id: 'sdxl', cat: 'Diffusion · Inference Opt.', title: 'Fast SDXL Pipeline',
    desc: 'Fast UNet + VAE for SDXL + ControlNet — sub-2s e-commerce image generation. $30K/month GPU savings.',
    kpis: ['1–2s inference', '↓80% cost'], tags: ['SDXL', 'CUDA', 'TensorRT'],
    overview: 'Production-optimised SDXL + ControlNet pipeline for an e-commerce platform generating 50,000+ product images monthly.',
    details: ['Flash Attention 2 + xFormers in UNet — ~40% compute reduction per step.', 'Tiled VAE decoding + half-precision — eliminated OOM, 3x faster decode.', 'Fused ControlNet conditioning with UNet diffusion step — no separate overhead.', 'Gradient checkpointing + BF16 — 60% memory reduction, larger batch sizes on G4.'],
    metrics: ['1–2s (from 8–12s)', '↓80% cost', '50K+ images/mo', '$30K/mo saved'], stack: ['SDXL', 'ControlNet', 'CUDA', 'TensorRT', 'PyTorch', 'AWS G4/G5'],
  },
  {
    id: 'jpmorgan', cat: 'NLP · Compliance', title: 'J.P. Morgan Redaction Service',
    desc: 'Enterprise PII redaction API (spaCy + Presidio + GLiNER) for financial documents. Zero PII leakage at scale.',
    kpis: ['Zero PII leakage'], tags: ['spaCy', 'Presidio', 'GLiNER'],
    overview: 'Enterprise PII detection and redaction API for J.P. Morgan financial document processing at scale.',
    details: ['Three-layer: spaCy NER (speed) → Presidio (compliance) → GLiNER (zero-shot edge cases).', 'Custom Presidio recognisers for financial entities: account numbers, ISIN, routing, SWIFT.', 'Async FastAPI with connection pooling for burst traffic during regulatory deadlines.', 'Full redaction audit log with confidence scores and entity types for compliance auditing.'],
    metrics: ['Zero PII leakage', 'Thousands of docs/day'], stack: ['spaCy', 'Presidio', 'GLiNER', 'FastAPI', 'Docker'],
  },
  {
    id: 'ocr', cat: 'Computer Vision · Manufacturing', title: 'Industrial OCR & Detection',
    desc: 'OCR + segmentation + detection for 8 manufacturing clients. SSE-powered real-time inference. $2M annual savings.',
    kpis: ['92% accuracy', '$2M/yr'], tags: ['PyTorch', 'TensorRT', 'SSE'],
    overview: 'CV system for OCR, segmentation, and detection across 8 international manufacturing clients in automotive and electronics.',
    details: ['CRAFT + TPS-ResNet-BiLSTM-CTC OCR fine-tuned for degraded, embossed, and laser-marked surfaces.', 'YOLOv8 per-client defect detection — TensorRT INT8 for 0.25s on edge hardware.', 'SSE replaced REST polling — 90% fewer API calls, real-time inference delivery.', 'NVIDIA Jetson edge nodes + AWS aggregation for cross-facility analytics.'],
    metrics: ['92% OCR accuracy', '0.25s inference', '$2M/yr savings'], stack: ['PyTorch', 'OpenCV', 'TensorRT', 'SSE', 'ONNX'],
  },
  {
    id: 'cisco', cat: 'GraphRAG · Network Security', title: 'Cisco FMT v2.0',
    desc: 'Pre-migration validation engine for Cisco ASA configs using GraphRAG. Compresses validation from hours to 2–5 seconds.',
    kpis: ['2–5s validation'], tags: ['GraphRAG', 'Neo4j', 'FastAPI'],
    overview: 'Pre-migration validation engine for Cisco ASA firewall configs. GraphRAG + lightweight LLMs compress validation from hours to seconds.',
    details: ['ASA configs parsed into Neo4j — nodes for ACLs, interfaces, NAT rules; edges for dependencies.', 'Natural language queries decomposed into Cypher via LLM for graph traversal.', 'Validation compressed from hours to 2–5s — eliminates sequential rule-by-rule inspection.', 'Zero configuration errors reported post-deployment across enterprise clients.'],
    metrics: ['2–5s validation', '98% reduction'], stack: ['GraphRAG', 'Neo4j', 'FastAPI', 'PyTorch', 'BERT', 'GPT-4'],
  },
  {
    id: 'water', cat: 'Research · IEEE Publication', title: 'Water Quality Prediction',
    desc: 'Predicted WQI for Ulsoor Lake using BPNN, SVR, and LSTM with WAWQI method. Published at IEEE ACAI 2022.',
    kpis: ['IEEE ACAI 2022'], tags: ['BPNN', 'LSTM', 'SVR'],
    overview: 'Published research predicting WQI for Ulsoor Lake, Bengaluru using BPNN, SVR, and LSTM with the WAWQI method.',
    details: ['Multi-parameter dataset (pH, turbidity, DO, BOD, nitrates) over 3 years.', 'LSTM achieved best temporal accuracy due to seasonal periodicity.', 'WAWQI method aggregates predictions into a single composite safety index.', 'One of the first WQI prediction studies for urban lakes in Bengaluru.'],
    metrics: ['IEEE Published', 'ACAI 2022'], stack: ['BPNN', 'LSTM', 'SVR', 'Python', 'Scikit-learn'],
  },
  {
    id: 'gesture', cat: 'Computer Vision · HCI', title: 'Hand Gesture Recognition',
    desc: 'Touchless interaction system using 3D CNN + LSTM for real-time gesture-based digital control at 30fps on CPU.',
    kpis: ['Real-time 30fps'], tags: ['3D CNN', 'LSTM', 'OpenCV'],
    overview: 'Touchless interaction system using 3D CNN + LSTM for real-time gesture-based digital control.',
    details: ['C3D architecture extracts spatio-temporal features — captures motion dynamics 2D CNNs miss.', 'LSTM maps feature trajectories to gesture labels handling speed variations and occlusions.', 'MediaPipe skeleton pre-filter — reduces CNN inference load by skipping empty frames.', 'TorchScript export achieves 30fps on CPU-only hardware.'],
    metrics: ['Real-time 30fps', 'Touchless UX'], stack: ['3D CNN', 'LSTM', 'OpenCV', 'PyTorch', 'MediaPipe'],
  },
  {
    id: 'distributed', cat: 'Infrastructure · ML Serving', title: 'Distributed Inference Service',
    desc: 'Multi-region ML serving at 5K req/sec with 99.9% uptime across AWS and GCP. Open-source project.',
    kpis: ['5K req/sec', '99.9% uptime'], tags: ['Ray Serve', 'Redis', 'Terraform'],
    overview: 'Open-source distributed inference service for multi-region ML serving with high throughput and reliability across AWS and GCP.',
    details: ['Ray Serve for distributed model serving with autoscaling across regions.', 'Redis-based request routing and load balancing with health checks.', 'Terraform IaC for reproducible multi-cloud deployments.', 'Prometheus monitoring with custom SLI/SLO dashboards.'],
    metrics: ['5K req/sec', '99.9% uptime', 'Multi-region'], stack: ['Ray Serve', 'Redis', 'Prometheus', 'Terraform', 'AWS', 'GCP'],
  },
  {
    id: 'guis', cat: 'Product · Meeting Intelligence', title: 'GUIS Meeting Intelligence Platform',
    desc: '6-service platform for real-time meeting insights across Google Meet and MS Teams. Led 5-engineer team.',
    kpis: ['6 microservices', '5-engineer team'], tags: ['React', 'FastAPI', 'Gemini'],
    overview: 'Full-stack meeting intelligence platform providing real-time insights, transcription, and AI summaries for Google Meet and MS Teams.',
    details: ['6-service microservice architecture: React frontend, Express API, TTS service, transcription engine, meeting bot, and AI summarizer.', 'Gemini-powered meeting summarization with action item extraction.', 'Deepgram integration for real-time speech-to-text with speaker diarization.', 'Google Meet and MS Teams bot integration for automated meeting capture.'],
    metrics: ['6 microservices', '5-engineer team', 'Real-time'], stack: ['Node.js', 'React', 'FastAPI', 'Docker', 'Gemini', 'Deepgram', 'GCP'],
  },
  {
    id: 'mcp', cat: 'Open Source · MCP Protocol', title: 'MCP Server Development',
    desc: 'Production MCP servers connecting LLM agents to HappyFox, Jira, and Confluence. 85% latency reduction. Foundation Team contributor.',
    kpis: ['85% latency cut', 'Foundation Team'], tags: ['MCP SDK', 'TypeScript', 'Go'],
    overview: 'MCP Foundation Development contributor — built production MCP servers connecting LLM agents to enterprise tools (HappyFox, Jira, Confluence).',
    details: ['Production MCP servers for HappyFox, Jira, and Confluence — eliminating 85% of manual data fetch latency.', '3-person squad; servers adopted by 2 internal teams across the organization.', 'MCP SDK integration with TypeScript and Go for cross-language compatibility.', 'WebSocket-based real-time context grounding for LLM agent workflows.'],
    metrics: ['85% latency reduction', '2 team adoptions', 'Foundation Team'], stack: ['MCP SDK', 'FastAPI', 'TypeScript', 'Go', 'WebSocket'],
  },
];

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[500] bg-[rgba(10,7,5,0.88)] backdrop-blur-[14px] flex items-center justify-center p-8"
      onClick={onClose}
    >
      <div
        className="bg-[#0A0705] border border-[rgba(217,119,6,0.15)] rounded-[20px] max-w-[680px] w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-7 pb-5 border-b border-[rgba(217,119,6,0.1)] flex justify-between items-start gap-4">
          <div>
            <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#D97706] mb-1.5">{project.cat}</div>
            <div className="text-[1.4rem] font-extrabold tracking-[-0.02em]">{project.title}</div>
          </div>
          <button
            onClick={onClose}
            className="bg-[rgba(217,119,6,0.06)] border border-[rgba(217,119,6,0.12)] text-[#C4A265] w-[30px] h-[30px] rounded-full cursor-pointer text-sm flex items-center justify-center hover:bg-[rgba(217,119,6,0.15)] hover:text-[#FFF8F0] transition-all shrink-0"
          >
            x
          </button>
        </div>
        <div className="p-6 pt-5">
          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#C4A265] mb-1.5">Overview</div>
          <p className="text-[0.85rem] text-[#C4A265] leading-[1.8] mb-5">{project.overview}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.metrics.map((m) => (
              <span key={m} className="px-3 py-1.5 bg-[rgba(217,119,6,0.08)] border border-[rgba(217,119,6,0.22)] rounded-md text-[0.72rem] text-[rgba(245,158,11,0.9)]">
                {m}
              </span>
            ))}
          </div>

          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#C4A265] mb-1.5">Technical Deep Dive</div>
          <ul className="space-y-1.5 mb-5">
            {project.details.map((d, i) => (
              <li key={i} className="text-[0.83rem] text-[#C4A265] pl-5 relative leading-[1.7]">
                <span className="absolute left-0 text-[#D97706] text-[0.52rem] top-[0.35rem]">&#9670;</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#C4A265] mb-1.5">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-[0.67rem] px-2.5 py-1 border border-[rgba(217,119,6,0.12)] rounded text-[#C4A265]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
        <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D97706] mb-2 flex items-center gap-2">
          <span className="w-[18px] h-[1px] bg-[#D97706] inline-block" />
          04 · Projects
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
          What I&apos;ve Built.
        </h2>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#D97706] to-transparent mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(217,119,6,0.1)] border border-[rgba(217,119,6,0.1)] rounded-[20px] overflow-hidden">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#120C08] p-7 cursor-pointer transition-colors duration-250 hover:bg-[#1C1209] relative group overflow-hidden"
              onClick={() => setActiveProject(proj)}
            >
              {/* Hover glow — amber radial */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(217,119,6,0.1),transparent_65%)]" />

              <span className="absolute top-5 right-5 text-xs text-[#C4A265] opacity-0 group-hover:opacity-60 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200">
                ↗
              </span>

              <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#D97706] mb-2.5">{proj.cat}</div>
              <div className="text-[0.95rem] font-bold mb-2 leading-[1.3]">{proj.title}</div>
              <div className="text-[0.76rem] text-[#C4A265] leading-[1.7] mb-3">{proj.desc}</div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {proj.kpis.map((kpi) => (
                  <span key={kpi} className="text-[0.62rem] px-2 py-0.5 bg-[rgba(217,119,6,0.08)] border border-[rgba(217,119,6,0.22)] rounded text-[rgba(245,158,11,0.9)]">
                    {kpi}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-[rgba(217,119,6,0.1)]">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[0.58rem] text-[#C4A265] px-1.5 py-0.5 border border-[rgba(217,119,6,0.1)] rounded-[2px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
