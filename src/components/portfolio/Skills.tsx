'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface SkillNode {
  label: string;
  x: number;
  y: number;
  color: string;
  r: number;
  cat?: string;
  desc?: string;
  chips?: string[];
  children: string[];
}

const TREE: Record<string, SkillNode> = {
  root: { label: 'Rakshith', x: 0.5, y: 0.09, color: '#D97706', r: 26, children: ['genai', 'cloud', 'ml', 'data', 'frameworks'] },
  genai: { label: 'GenAI & LLMs', x: 0.17, y: 0.3, color: '#D97706', r: 21, cat: 'Large Language Models', desc: '5+ years building production GenAI — from LoRA fine-tuning to GraphRAG enterprise pipelines and HIPAA multi-agent systems.', chips: ['GPT-4', 'Claude', 'Gemini', 'LLaMA', 'Mistral', 'RAG', 'GraphRAG', 'PEFT/LoRA', 'Fine-tuning', 'MCP/A2A'], children: ['langchain', 'rag'] },
  cloud: { label: 'Cloud & MLOps', x: 0.36, y: 0.3, color: '#F59E0B', r: 21, cat: 'Cloud Infrastructure', desc: 'HIPAA-compliant 99.99% uptime infra on AWS and Azure — ECS, Lambda, SageMaker, Bedrock, Container Apps.', chips: ['AWS Bedrock', 'SageMaker', 'ECS/EKS', 'Lambda', 'Azure AI Foundry', 'Container Apps', 'Kubernetes', 'Docker', 'MLflow'], children: ['aws', 'azure'] },
  ml: { label: 'ML / DL', x: 0.62, y: 0.3, color: '#92400E', r: 21, cat: 'Machine Learning & Deep Learning', desc: 'SDXL inference optimised to 1–2s with TensorRT. Industrial OCR at 0.25s. Specialised in quantisation and GPU efficiency.', chips: ['PyTorch', 'TensorFlow', 'CUDA', 'TensorRT', 'vLLM', 'SDXL', 'ControlNet', 'OpenCV', 'Mixed Precision'], children: ['inference', 'cv'] },
  data: { label: 'Data & Vector', x: 0.8, y: 0.3, color: '#FEF3C7', r: 21, cat: 'Databases & Vector Search', desc: 'Hybrid retrieval combining Neo4j graph traversal with Qdrant dense vectors — sub-300ms cross-region retrieval on private AWS VPC.', chips: ['Neo4j', 'Qdrant', 'Pinecone', 'Elasticsearch', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS S3'], children: ['vector', 'graph'] },
  frameworks: { label: 'AI Frameworks', x: 0.5, y: 0.55, color: '#92400E', r: 18, cat: 'Orchestration Frameworks', desc: 'Production experience with all major agentic orchestration frameworks — LangGraph, Google ADK, AutoGen, CrewAI.', chips: ['LangChain', 'LangGraph', 'LlamaIndex', 'Google ADK', 'AutoGen', 'CrewAI', 'Semantic Kernel', 'Hugging Face', 'Ollama'], children: [] },
  langchain: { label: 'LangGraph', x: 0.07, y: 0.55, color: '#D97706', r: 15, cat: 'Agent Orchestration', desc: 'Multi-agent clinical interview systems and enterprise IT voice agents using LangGraph stateful flows.', chips: ['LangGraph', 'LangChain', 'Memory', 'Tool Calling'], children: [] },
  rag: { label: 'GraphRAG', x: 0.22, y: 0.6, color: '#D97706', r: 15, cat: 'Retrieval-Augmented Generation', desc: 'GSC AI search engine and Cisco FMT v2.0 using GraphRAG — entity-aware retrieval across knowledge graphs.', chips: ['GraphRAG', 'RAG', 'Neo4j', 'Qdrant', 'AWS Bedrock'], children: [] },
  aws: { label: 'AWS', x: 0.3, y: 0.6, color: '#F59E0B', r: 15, cat: 'Amazon Web Services', desc: 'ECS, EKS, Lambda, SageMaker, Bedrock cross-region inference, SQS — production infra for Fortune 500 clients.', chips: ['ECS', 'Lambda', 'SageMaker', 'Bedrock', 'EKS', 'SQS', 'S3'], children: [] },
  azure: { label: 'Azure', x: 0.43, y: 0.68, color: '#F59E0B', r: 15, cat: 'Microsoft Azure', desc: 'Azure Container Apps, Container Jobs, OpenAI Service, AI Foundry — 60% cost reduction vs always-on VMs.', chips: ['Container Apps', 'Container Jobs', 'OpenAI Service', 'AI Foundry'], children: [] },
  inference: { label: 'Inference Opt.', x: 0.62, y: 0.55, color: '#92400E', r: 15, cat: 'Inference Optimisation', desc: 'Reduced SDXL from 8–12s to 1–2s using Fast UNet, TensorRT INT8, Flash Attention 2 — $30K/month GPU savings.', chips: ['TensorRT', 'vLLM', 'Flash Attention', 'INT8', 'Mixed Precision'], children: [] },
  cv: { label: 'Vision', x: 0.76, y: 0.6, color: '#92400E', r: 15, cat: 'Computer Vision', desc: '92% OCR accuracy at 0.25s on NVIDIA Jetson edge hardware for 8 manufacturing clients.', chips: ['OpenCV', 'YOLOv8', 'CRAFT OCR', 'Segmentation', 'ONNX'], children: [] },
  vector: { label: 'Vector DB', x: 0.88, y: 0.55, color: '#FEF3C7', r: 15, cat: 'Vector Databases', desc: 'Hybrid search — dense vectors (Qdrant) + graph traversal (Neo4j) — sub-300ms retrieval in production.', chips: ['Qdrant', 'Pinecone', 'HNSW', 'ANN Search'], children: [] },
  graph: { label: 'Graph DB', x: 0.93, y: 0.38, color: '#FEF3C7', r: 15, cat: 'Graph Databases', desc: 'Neo4j knowledge graphs for Cisco ASA config validation (FMT v2.0) and GSC enterprise search.', chips: ['Neo4j', 'Cypher', 'Knowledge Graph', 'Entity Extraction'], children: [] },
};

const LEGEND_ITEMS = [
  { color: '#D97706', label: 'GenAI' },
  { color: '#F59E0B', label: 'Cloud' },
  { color: '#92400E', label: 'ML/DL' },
  { color: '#FEF3C7', label: 'Data' },
  { color: '#92400E', label: 'Frameworks' },
];

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPixelPos = useCallback((key: string, w: number, h: number) => ({
    x: TREE[key].x * w,
    y: TREE[key].y * h,
  }), []);

  const getNodeAt = useCallback((mx: number, my: number, w: number, h: number) => {
    for (const [key, node] of Object.entries(TREE)) {
      const { x, y } = getPixelPos(key, w, h);
      if (Math.hypot(mx - x, my - y) <= node.r + 6) return key;
    }
    return null;
  }, [getPixelPos]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = Math.max(400, W * 0.52);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.height = `${H}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, H);

    // Draw edges
    Object.entries(TREE).forEach(([key, node]) => {
      (node.children || []).forEach((child) => {
        const a = getPixelPos(key, W, H);
        const b = getPixelPos(child, W, H);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        const cmx = (a.x + b.x) / 2;
        const cmy = (a.y + b.y) / 2 - 16;
        ctx.quadraticCurveTo(cmx, cmy, b.x, b.y);
        ctx.strokeStyle = hovered === key || hovered === child ? 'rgba(217,119,6,0.5)' : 'rgba(217,119,6,0.13)';
        ctx.lineWidth = hovered === key || hovered === child ? 1.5 : 1;
        ctx.setLineDash([4, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    });

    // Draw nodes
    Object.entries(TREE).forEach(([key, node]) => {
      const { x, y } = getPixelPos(key, W, H);
      const isH = hovered === key;
      const isS = selected === key;
      const r = node.r + (isH ? 3 : 0) + (isS ? 4 : 0);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = isH || isS ? node.color + '28' : 'rgba(10,7,5,0.9)';
      ctx.fill();
      ctx.strokeStyle = isH || isS ? node.color : node.color + '55';
      ctx.lineWidth = isH || isS ? 2 : 1;
      ctx.stroke();

      if (isS) {
        ctx.beginPath();
        ctx.arc(x, y, r + 5, 0, Math.PI * 2);
        ctx.strokeStyle = node.color + '33';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.fillStyle = isH || isS ? '#FFF8F0' : 'rgba(255,248,240,0.65)';
      ctx.font = `${key === 'root' ? '600 13' : '500 9.5'}px 'Segoe UI', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const words = node.label.split(' ');
      if (words.length > 1 && key !== 'root') {
        ctx.fillText(words[0], x, y - 5.5);
        ctx.fillText(words.slice(1).join(' '), x, y + 5.5);
      } else {
        ctx.fillText(node.label, x, y);
      }
    });
  }, [hovered, selected, getPixelPos]);

  useEffect(() => {
    draw();
    const handleResize = () => draw();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [draw]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = canvas.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const W = containerRect.width;
    const H = Math.max(400, W * 0.52);
    const node = getNodeAt(e.clientX - rect.left, e.clientY - rect.top, W, H);
    setHovered(node);
    canvas.style.cursor = node ? 'pointer' : 'default';
  }, [getNodeAt]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const rect = canvas.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const W = containerRect.width;
    const H = Math.max(400, W * 0.52);
    const node = getNodeAt(e.clientX - rect.left, e.clientY - rect.top, W, H);
    if (!node || node === 'root') {
      setSelected(null);
      return;
    }
    setSelected(node);
  }, [getNodeAt]);

  const selectedNode = selected ? TREE[selected] : null;

  return (
    <section id="skills" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D97706] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#D97706] inline-block" />
        03 · Skills
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
        Skill Graph.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#D97706] to-transparent mb-4" />
      <p className="text-[#9C7E5A] text-[0.85rem] mb-6">Click nodes to explore skill details</p>

      <div
        ref={containerRef}
        className="relative border border-[rgba(217,119,6,0.12)] rounded-[20px] bg-[#120C08]/70 overflow-hidden"
        style={{ height: '520px' }}
      >
        {/* Fallback if canvas fails to load */}
        <noscript>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-[0.85rem] text-[#9C7E5A] mb-4">Interactive skill graph requires JavaScript.</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(TREE).filter(([k]) => k !== 'root').map(([key, node]) => (
                  <span key={key} className="px-2.5 py-1 border border-[rgba(217,119,6,0.25)] rounded text-[0.68rem] text-[rgba(245,158,11,0.9)] bg-[rgba(217,119,6,0.06)]">
                    {node.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </noscript>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          onMouseLeave={() => setHovered(null)}
        />

        {/* Legend */}
        <div className="absolute bottom-3.5 left-4 flex flex-wrap gap-2 pointer-events-none">
          {LEGEND_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1.5 text-[0.58rem] tracking-[0.08em] uppercase text-[#9C7E5A]/60"
            >
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Skill Detail Panel */}
      {selectedNode && selectedNode.desc && (
        <div className="mt-6 p-6 border border-[rgba(217,119,6,0.12)] rounded-2xl bg-[#120C08]/70 fade-in-up">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-[0.58rem] tracking-[0.2em] uppercase text-[#F59E0B] mb-1">
                {selectedNode.cat}
              </div>
              <div className="text-[1.1rem] font-bold">{selectedNode.label}</div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="bg-[rgba(217,119,6,0.06)] border border-[rgba(217,119,6,0.15)] rounded-lg text-[#9C7E5A] px-3 py-1 text-xs cursor-pointer hover:bg-[rgba(217,119,6,0.12)] hover:text-[#FFF8F0] transition-all"
            >
              close
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {(selectedNode.chips || []).map((chip) => (
              <span
                key={chip}
                className="px-2 py-0.5 border border-[rgba(217,119,6,0.25)] rounded text-[0.67rem] text-[rgba(245,158,11,0.9)] bg-[rgba(217,119,6,0.06)]"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="text-[0.82rem] text-[#9C7E5A] leading-[1.75]">
            {selectedNode.desc}
          </div>
        </div>
      )}
    </section>
  );
}
