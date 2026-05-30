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

/* ── Aligned with resume "PROJECTS AND RECOGNITION" + work experience highlights ── */
const PROJECTS: Project[] = [
  {
    id: 'gsc', cat: 'GraphRAG · Enterprise Search', title: 'GSC — AI-Powered Search Engine',
    desc: '1M+ graph nodes, 50M embeddings, hybrid graph + vector retrieval at p95 <300ms with 99.9% uptime.',
    kpis: ['<300ms retrieval', '1M+ nodes', '99.9% uptime'], tags: ['Neo4j', 'Qdrant', 'AWS Bedrock', 'ECS'],
    overview: 'Full backend and data ingestion pipeline for enterprise document search, research paper discovery, deep semantic search, and chat-with-documents on a private AWS VPC. 1M+ graph nodes, 50M embeddings served at 10K+ queries/day.',
    details: ['Hybrid retrieval: Neo4j graph traversal (entity relationships) + Qdrant dense vector search in a single pass.', 'AWS Bedrock cross-region inference avoiding throttling — consistent sub-300ms retrieval.', 'Async SQS + Lambda ingestion pipeline — continuous processing without downtime.', 'Multi-hop GraphRAG for complex research queries traversing entity clusters.', 'Monitored via LangSmith + Prometheus with custom SLI/SLO dashboards.'],
    metrics: ['<300ms retrieval', '10K+ queries/day', '1M+ graph nodes', '99.9% uptime'], stack: ['Neo4j', 'Qdrant', 'AWS Bedrock', 'ECS', 'Lambda', 'SQS', 'LangSmith', 'Prometheus'],
  },
  {
    id: 'idp-scania', cat: 'Agent Harness · Supply Chain', title: 'IDP Supply Chain Agent (Scania)',
    desc: '5-stage confidence-gated agent harness for shipping document intelligence; 73% HITL reduction with zero critical-field errors.',
    kpis: ['73% HITL ↓', 'p95 <300ms', 'Zero critical errors'], tags: ['AWS Bedrock', 'Claude', 'Elasticsearch'],
    overview: '5-stage confidence-gated agent harness (Classifier, Extraction, Auto-Accept, Router, SQL Agent) for shipping document intelligence. Hybrid NL-to-SQL + semantic search with custom LLM-as-judge evaluation layer.',
    details: ['5-stage pipeline: Classifier → Extraction → Auto-Accept → Router → SQL Agent with confidence gating at each stage.', 'Hybrid NL-to-SQL + semantic search across shipping documents via Claude on AWS Bedrock.', 'MinerU VLM extraction fallback for complex document formats; indexed in Elasticsearch.', 'Custom confidence-gated eval framework — per-field precision thresholds act as automated LLM-as-judge layer.', 'Low-confidence extractions routed to HITL queue; reduced human review workload by 73%.'],
    metrics: ['p95 <300ms', '73% HITL reduction', 'Zero critical-field errors'], stack: ['AWS Bedrock', 'Claude', 'FastAPI', 'Elasticsearch', 'MinerU VLM', 'PyMuPDF', 'SQLAlchemy 2', 'Docker'],
  },
  {
    id: 'doctor', cat: 'Healthcare AI · Multi-Agent', title: 'AI Doctor Analyzer',
    desc: 'Multi-agent patient interview system raising diagnostic accuracy 67% → 91%. August AI Hackathon winner. 2,500+ daily interactions across 3 hospitals.',
    kpis: ['91% accuracy', '2,500+ daily', '3 hospitals'], tags: ['LangGraph', 'GPT-4', 'DSPy'],
    overview: 'Multi-agent clinical tool that analyzes medical records, parses biomarkers, and generates clinical summaries. Won August AI hackathon and deployed at 3 healthcare facilities with 2,500+ daily interactions.',
    details: ['Coordinator agent routes to specialist sub-agents (vitals, labs, medications, summary) — each with memory and tools.', 'Context-aware multi-agent prompt pipeline with eval-driven DSPy optimization loop.', 'RAGAS evaluation harness measuring faithfulness, relevance, and context precision across 5,000+ sessions.', 'HIPAA-compliant E2E encryption + RBAC — 99.99% uptime for 500+ concurrent users.'],
    metrics: ['67% → 91% accuracy', '5,000+ sessions', '2,500+ daily', 'HIPAA'], stack: ['LangGraph', 'GPT-4', 'AWS', 'Azure', 'FastAPI', 'RAGAS', 'DSPy', 'LangSmith'],
  },
  {
    id: 'rlhf', cat: 'Alignment · RLHF', title: 'RLHF & Alignment Pipeline (Qwen 72B)',
    desc: 'Full alignment pipeline for Qwen 2.5 72B medical LLM — LoRA instruction tuning + DPO on clinician-preference pairs with trained reward model.',
    kpis: ['72B params', 'DPO / RLHF', 'Reward Model'], tags: ['PyTorch', 'Unsloth', 'LLaMA Factory'],
    overview: 'End-to-end alignment engineering for a 72B-parameter medical LLM. Fine-tuned via LoRA/QLoRA for instruction following, then applied DPO on clinician-preference pairs to align outputs with diagnostic reasoning. Trained reward model on domain-specific human preference data scoring safety, accuracy, and clinical relevance.',
    details: ['LoRA/QLoRA instruction fine-tuning of Qwen 2.5 72B via Unsloth + LLaMA Factory.', 'DPO (Direct Preference Optimization) on clinician-preference pairs for alignment with diagnostic reasoning.', 'Trained custom reward model on domain-specific human preference data — scoring safety, accuracy, clinical relevance.', 'Deployed on Modal + RunPod GPU infrastructure for distributed training.'],
    metrics: ['72B parameters', 'DPO aligned', 'Custom reward model'], stack: ['PyTorch', 'Unsloth', 'LLaMA Factory', 'Qwen 2.5', 'Modal', 'RunPod'],
  },
  {
    id: 'techgenie', cat: 'Voice Agent · IT Support', title: 'Gruve TechGenie',
    desc: 'MCP-powered voice IT triage with NeMo Guardrails for safe output control; DSPy optimization reducing hallucination by 34%. 500+ weekly interactions.',
    kpis: ['↓42% resolution', '↓34% hallucination'], tags: ['NeMo Guardrails', 'DSPy', 'MCP'],
    overview: 'Voice-powered IT support agent automating first-line triage across enterprise clients. MCP-connected LLM agents with NeMo Guardrails for safe output control and DSPy optimization reducing hallucination by 34%. Gruve AI hackathon project expanded to live deployments.',
    details: ['STT → LangGraph agent → FastAPI → Edge TTS pipeline — sub-2s round-trip.', 'NeMo Guardrails for output safety — blocks harmful, off-topic, or PII-leaking responses.', 'DSPy prompt optimization reduced hallucination rate by 34% via automated prompt tuning.', 'MongoDB conversation memory with entity extraction across sessions.', 'MCP integration for real-time tool calling across IT systems.'],
    metrics: ['↓42% resolution time', '↓34% hallucination', '500+ weekly'], stack: ['FastAPI', 'Edge TTS', 'MongoDB', 'MCP', 'LangGraph', 'NeMo Guardrails', 'DSPy'],
  },
  {
    id: 'sdxl', cat: 'Diffusion · Inference Opt.', title: 'Fast SDXL Pipeline',
    desc: 'Fast UNet + VAE for SDXL + ControlNet — 8s → 1.2s inference. $32K/month GPU savings. Automated MLOps deployment pipeline.',
    kpis: ['1.2s inference', '↓85% latency', '$32K/mo saved'], tags: ['SDXL', 'TensorRT', 'GitHub Actions'],
    overview: 'Production-optimised SDXL + ControlNet pipeline for an e-commerce platform generating 50,000+ product images monthly. Includes automated MLOps pipeline with MLflow + GitHub Actions cutting deployment from 3 days to 4 hours.',
    details: ['Flash Attention 2 + xFormers in UNet — ~40% compute reduction per step.', 'Tiled VAE decoding + half-precision — eliminated OOM, 3x faster decode.', 'Fused ControlNet conditioning with UNet diffusion step — no separate overhead.', 'Gradient checkpointing + BF16 — 60% memory reduction, larger batch sizes on G5.', 'MLOps pipeline: MLflow model versioning + GitHub Actions + ONNX runtime optimization; deploy from 3 days → 4 hours.'],
    metrics: ['8s → 1.2s (85%↓)', '$32K/mo saved', '50K+ images/mo', '3 days → 4hr deploy'], stack: ['SDXL', 'ControlNet', 'TensorRT', 'PyTorch', 'MLflow', 'GitHub Actions', 'ONNX', 'AWS G5'],
  },
  {
    id: 'jpmorgan', cat: 'NLP · Compliance', title: 'J.P. Morgan Redaction Service',
    desc: 'Enterprise PII redaction (spaCy + Presidio + GLiNER) for 50K+ financial documents. Zero PII leakage. 2,000+ docs/day. SOC 2 passed.',
    kpis: ['Zero PII leakage', '50K+ docs', 'SOC 2'], tags: ['spaCy', 'Presidio', 'GLiNER'],
    overview: 'Enterprise PII detection and redaction pipeline for J.P. Morgan financial document processing at scale. Zero PII leakage across 50K+ documents, scaled to 2,000+ docs/day.',
    details: ['Three-layer: spaCy NER (speed) → Presidio (compliance) → GLiNER (zero-shot edge cases).', 'Custom Presidio recognisers for financial entities: account numbers, ISIN, routing, SWIFT.', 'Async FastAPI with connection pooling for burst traffic during regulatory deadlines.', 'Full redaction audit log with confidence scores and entity types for compliance auditing.', 'Deployed on AWS + Azure with SOC 2 certification.'],
    metrics: ['Zero PII leakage', '50K+ documents', '2,000+ docs/day', '99.2% precision'], stack: ['spaCy', 'Presidio', 'GLiNER', 'FastAPI', 'Docker', 'AWS', 'Azure'],
  },
  {
    id: 'cisco', cat: 'Knowledge Distillation · Security', title: 'Cisco Firewall Validation (FMT v2.0)',
    desc: 'GPT-4-supervised eval + distillation pipeline — custom eval framework with KL-divergence loss and confidence-threshold gating. 4+ hours → 2–5 sec.',
    kpis: ['2–5s validation', '98% reduction', '200+ firewalls'], tags: ['GPT-4', 'PyTorch', 'BERT'],
    overview: 'GPT-4-supervised evaluation and distillation pipeline for Cisco ASA firewall config validation. Designed custom eval framework using GPT-4 as judge to score student outputs via KL-divergence loss with confidence-threshold gating. Trained 3 student models achieving zero LLM calls at inference.',
    details: ['Custom eval framework: GPT-4 as judge scoring student outputs via KL-divergence loss.', 'Confidence-threshold gating with per-field precision targets — automated quality gate.', 'Trained 3 student models (BERT-based) — zero LLM calls at inference, 98% reduction.', 'Enabled Fortune 500 migration of 200+ firewalls 10x faster.', 'ASA configs parsed into Neo4j — graph traversal for dependency validation.'],
    metrics: ['4+ hours → 2–5 sec', '98% reduction', '200+ firewalls', 'Zero LLM at inference'], stack: ['PyTorch', 'BERT', 'GPT-4', 'LangGraph', 'Neo4j', 'Qdrant', 'AWS Bedrock'],
  },
  {
    id: 'ocr', cat: 'Computer Vision · Manufacturing', title: 'Industrial OCR & Detection',
    desc: 'OCR + detection for 8 manufacturing clients. Prometheus monitoring at 450M req/month. 60% support ticket reduction. TensorFlow + ONNX.',
    kpis: ['92% accuracy', '$2M/yr', '60% ticket ↓'], tags: ['PyTorch', 'TensorFlow', 'ONNX'],
    overview: 'CV system for OCR, segmentation, and detection across 8 international manufacturing clients. Monitored across 15 global facilities via Prometheus + SSE streaming at 450M req/month. Trained 20+ client engineers reducing support tickets 60%.',
    details: ['CRAFT + TPS-ResNet-BiLSTM-CTC OCR fine-tuned for degraded, embossed, and laser-marked surfaces.', 'YOLOv8 per-client defect detection — TensorRT INT8 for 0.24s on edge hardware.', 'SSE replaced REST polling — 90% fewer API calls, real-time inference delivery.', 'Prometheus monitoring at 450M req/month across 15 global facilities.', 'Trained 20+ client engineers — reduced support tickets by 60%.'],
    metrics: ['92% OCR accuracy', '0.24s inference', '$2M/yr savings', '60% ticket ↓'], stack: ['PyTorch', 'TensorFlow', 'OpenCV', 'TensorRT', 'ONNX', 'Prometheus', 'SSE'],
  },
  {
    id: 'distributed', cat: 'Infrastructure · ML Serving', title: 'Distributed Inference Service',
    desc: 'Multi-region ML serving at 5K req/sec with 99.9% uptime across AWS and GCP. Open-source.',
    kpis: ['5K req/sec', '99.9% uptime'], tags: ['Ray Serve', 'Redis', 'Terraform'],
    overview: 'Open-source distributed inference service for multi-region ML serving with high throughput and reliability across AWS and GCP.',
    details: ['Ray Serve for distributed model serving with autoscaling across regions.', 'Redis-based request routing and load balancing with health checks.', 'Terraform IaC for reproducible multi-cloud deployments.', 'Prometheus monitoring with custom SLI/SLO dashboards.'],
    metrics: ['5K req/sec', '99.9% uptime', 'Multi-region'], stack: ['Ray Serve', 'Redis', 'Prometheus', 'Terraform', 'AWS', 'GCP'],
  },
  {
    id: 'guis', cat: 'Product · Meeting Intelligence', title: 'GUIS Meeting Intelligence Platform',
    desc: '6-service platform for real-time meeting insights across Google Meet & MS Teams. 45% reduction in follow-up time across 200+ weekly meetings.',
    kpis: ['45% follow-up ↓', '6 microservices', '200+ weekly'], tags: ['React', 'FastAPI', 'Gemini', 'Deepgram'],
    overview: 'Full-stack meeting intelligence platform providing real-time insights, transcription, and AI summaries for Google Meet and MS Teams. Reduced cross-team meeting follow-up time by 45%.',
    details: ['6-service microservice architecture: React frontend, Express API, TTS service, transcription engine, meeting bot, and AI summarizer.', 'Gemini-powered meeting summarization with action item extraction.', 'Deepgram integration for real-time speech-to-text with speaker diarization.', 'Google Meet and MS Teams bot integration for automated meeting capture.'],
    metrics: ['45% follow-up ↓', '200+ weekly meetings', '6 microservices'], stack: ['Node.js', 'React', 'FastAPI', 'Docker', 'Gemini', 'Deepgram', 'GCP', 'Whisper'],
  },
  {
    id: 'mcp', cat: 'Open Source · MCP Protocol', title: 'MCP Server Development',
    desc: 'Production MCP servers connecting LLM agents to HappyFox, Jira, Confluence. 85% latency reduction. DSPy-optimized. Foundation Team contributor.',
    kpis: ['85% latency cut', 'Foundation Team'], tags: ['MCP SDK', 'TypeScript', 'Go', 'DSPy'],
    overview: 'MCP Foundation Development contributor — built production MCP servers connecting LLM agents to enterprise tools (HappyFox, Jira, Confluence). Applied DSPy for prompt optimization.',
    details: ['Production MCP servers for HappyFox, Jira, and Confluence — eliminating 85% of manual data fetch latency.', '3-person squad; servers adopted by multiple internal teams across the organization.', 'MCP SDK integration with TypeScript and Go for cross-language compatibility.', 'WebSocket-based real-time context grounding for LLM agent workflows.', 'DSPy prompt optimization for improved tool-calling accuracy.'],
    metrics: ['85% latency reduction', 'Foundation Team', 'DSPy optimized'], stack: ['MCP SDK', 'FastAPI', 'TypeScript', 'Go', 'WebSocket', 'DSPy'],
  },
];

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[500] bg-[rgba(10,6,3,0.88)] backdrop-blur-[14px] flex items-center justify-center p-8"
      onClick={onClose}
    >
      <div
        className="bg-[#0A0603] border border-[rgba(245,168,50,0.15)] rounded-[20px] max-w-[680px] w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-7 pb-5 border-b border-[rgba(245,168,50,0.1)] flex justify-between items-start gap-4">
          <div>
            <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#F5A832] mb-1.5">{project.cat}</div>
            <div className="text-[1.4rem] font-extrabold tracking-[-0.02em] text-[#FFF3E2]">{project.title}</div>
          </div>
          <button
            onClick={onClose}
            className="bg-[rgba(245,168,50,0.06)] border border-[rgba(245,168,50,0.12)] text-[#C8A882] w-[30px] h-[30px] rounded-full cursor-pointer text-sm flex items-center justify-center hover:bg-[rgba(245,168,50,0.15)] hover:text-[#FFF3E2] transition-all shrink-0"
          >
            x
          </button>
        </div>
        <div className="p-6 pt-5">
          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#C8A882] mb-1.5">Overview</div>
          <p className="text-[0.85rem] text-[#C8A882] leading-[1.8] mb-5">{project.overview}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.metrics.map((m) => (
              <span key={m} className="px-3 py-1.5 bg-[rgba(245,168,50,0.08)] border border-[rgba(245,168,50,0.22)] rounded-md text-[0.72rem] text-[rgba(245,168,50,0.9)]">
                {m}
              </span>
            ))}
          </div>

          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#C8A882] mb-1.5">Technical Deep Dive</div>
          <ul className="space-y-1.5 mb-5">
            {project.details.map((d, i) => (
              <li key={i} className="text-[0.83rem] text-[#C8A882] pl-5 relative leading-[1.7]">
                <span className="absolute left-0 text-[#F5A832] text-[0.52rem] top-[0.35rem]">&#9670;</span>
                {d}
              </li>
            ))}
          </ul>

          <div className="text-[0.6rem] tracking-[0.18em] uppercase text-[#C8A882] mb-1.5">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="text-[0.67rem] px-2.5 py-1 border border-[rgba(59,158,240,0.15)] rounded text-[#3B9EF0]">
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
        <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#F5A832] mb-2 flex items-center gap-2">
          <span className="w-[18px] h-[1px] bg-[#F5A832] inline-block" />
          04 · Projects
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3 text-[#FFF3E2]">
          What I&apos;ve Built.
        </h2>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#F5A832] to-transparent mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(245,168,50,0.1)] border border-[rgba(245,168,50,0.1)] rounded-[20px] overflow-hidden">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#1A0F05] p-7 cursor-pointer transition-colors duration-250 hover:bg-[#2A1A0A] relative group overflow-hidden"
              onClick={() => setActiveProject(proj)}
            >
              {/* Hover glow — amber radial */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at-var(--mx,50%)_var(--my,50%),rgba(245,168,50,0.1),transparent_65%)]" />

              <span className="absolute top-5 right-5 text-xs text-[#C8A882] opacity-0 group-hover:opacity-60 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200">
                ↗
              </span>

              <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#F5A832] mb-2.5">{proj.cat}</div>
              <div className="text-[0.95rem] font-bold mb-2 leading-[1.3] text-[#FFF3E2]">{proj.title}</div>
              <div className="text-[0.76rem] text-[#C8A882] leading-[1.7] mb-3">{proj.desc}</div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {proj.kpis.map((kpi) => (
                  <span key={kpi} className="text-[0.62rem] px-2 py-0.5 bg-[rgba(245,168,50,0.08)] border border-[rgba(245,168,50,0.22)] rounded text-[rgba(245,168,50,0.9)]">
                    {kpi}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1 pt-3 border-t border-[rgba(245,168,50,0.1)]">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-[0.58rem] text-[#8B7355] px-1.5 py-0.5 border border-[rgba(59,158,240,0.12)] rounded-[2px]">
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
