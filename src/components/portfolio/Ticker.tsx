'use client';

const ITEMS = [
  'GraphRAG', 'AWS Bedrock', 'LangGraph', 'HIPAA Infra', 'Stable Diffusion XL',
  'vLLM', 'Neo4j', 'PEFT / LoRA', 'Kubernetes', 'Azure AI Foundry', 'TensorRT', 'MCP / A2A Agents',
];

export default function Ticker() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-[rgba(217,119,6,0.1)] py-3 bg-[rgba(10,7,5,0.6)] mt-4">
      <div className="flex gap-12 w-max animate-ticker">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-[0.62rem] tracking-[0.18em] uppercase text-[#C4A265] whitespace-nowrap"
          >
            {item} <span className="text-[#D97706] opacity-50">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
