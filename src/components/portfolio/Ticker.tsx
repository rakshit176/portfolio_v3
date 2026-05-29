'use client';

const ITEMS = [
  'GraphRAG', 'AWS Bedrock', 'LangGraph', 'HIPAA Infra', 'Stable Diffusion XL',
  'vLLM', 'Neo4j', 'PEFT / LoRA', 'Kubernetes', 'Azure AI Foundry', 'TensorRT', 'MCP / A2A Agents',
];

export default function Ticker() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-white/[0.08] py-3 bg-[rgba(15,15,15,0.5)] mt-4">
      <div className="flex gap-12 w-max animate-ticker">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-[0.62rem] tracking-[0.18em] uppercase text-[#a0a0a0] whitespace-nowrap"
          >
            {item} <span className="text-[#00d4ff] opacity-50">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
