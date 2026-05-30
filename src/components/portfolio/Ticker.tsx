'use client';

const ITEMS = [
  'GraphRAG', 'AWS Bedrock', 'LangGraph', 'HIPAA Infra', 'RLHF / DPO',
  'vLLM', 'Neo4j', 'PEFT / LoRA', 'Kubernetes', 'Azure AI Foundry', 'TensorRT', 'MCP / A2A Agents',
  'DeepEval / Ragas', 'Promptfoo', 'DSPy', 'Langfuse', 'TensorFlow', 'OpenAI Agents SDK',
  'NeMo Guardrails', 'Alignment Engineering', 'CI/CD', 'GitHub Actions',
];

export default function Ticker() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-[rgba(245,168,50,0.1)] py-3 bg-[rgba(10,6,3,0.6)] mt-4">
      <div className="flex gap-12 w-max animate-ticker">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-[0.62rem] tracking-[0.18em] uppercase text-[#C8A882] whitespace-nowrap"
          >
            {item} <span className="text-[#F5A832] opacity-50">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
