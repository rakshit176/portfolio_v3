'use client';

interface SkillItem {
  label: string;
  pct: number;
}

interface SkillGroup {
  title: string;
  accent: string;
  skills: SkillItem[];
}

/* ── Aligned with resume "TECHNICAL SKILLS" section ── */
const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'GenAI & LLMs',
    accent: '#F5A832',
    skills: [
      { label: 'Prompt Engineering', pct: 93 },
      { label: 'GPT-4 / Claude 3.5 / Gemini Pro', pct: 95 },
      { label: 'LangGraph', pct: 92 },
      { label: 'GraphRAG / RAG', pct: 92 },
      { label: 'Multi-Agent Systems', pct: 90 },
      { label: 'MCP Protocol', pct: 88 },
      { label: 'RLHF / DPO / PPO', pct: 85 },
      { label: 'Alignment Engineering', pct: 84 },
      { label: 'LLM-as-Judge / Confidence-Gated Eval', pct: 82 },
      { label: 'PEFT / LoRA / QLoRA', pct: 85 },
      { label: 'Knowledge Distillation', pct: 87 },
      { label: 'Guardrails / Structured Outputs', pct: 80 },
      { label: 'LLM Red-Teaming (Promptfoo)', pct: 78 },
      { label: 'Fine-tuning', pct: 84 },
    ],
  },
  {
    title: 'Cloud & MLOps',
    accent: '#00C8DC',
    skills: [
      { label: 'AWS (Bedrock, SageMaker, ECS, Lambda)', pct: 90 },
      { label: 'Azure (Container Apps, Cognitive Svcs)', pct: 85 },
      { label: 'GCP (Vertex AI, Cloud Run, Gemini)', pct: 82 },
      { label: 'Terraform / IaC', pct: 80 },
      { label: 'Kubernetes / Docker', pct: 83 },
      { label: 'MLflow / LangSmith', pct: 86 },
      { label: 'Langfuse', pct: 82 },
      { label: 'Arize Phoenix', pct: 78 },
      { label: 'LLM Evaluation (DeepEval / Ragas)', pct: 80 },
      { label: 'CI/CD (GitHub Actions)', pct: 82 },
      { label: 'Prometheus / Monitoring', pct: 80 },
    ],
  },
  {
    title: 'ML / Deep Learning',
    accent: '#3B9EF0',
    skills: [
      { label: 'PyTorch', pct: 88 },
      { label: 'TensorFlow', pct: 80 },
      { label: 'CUDA / TensorRT', pct: 82 },
      { label: 'vLLM / TensorRT-LLM / SGLang', pct: 80 },
      { label: 'SDXL / Diffusion', pct: 78 },
      { label: 'BERT / YOLO', pct: 85 },
      { label: 'Whisper / Speech', pct: 78 },
      { label: 'ONNX / Quantization', pct: 82 },
    ],
  },
  {
    title: 'Data & Vector',
    accent: '#10B981',
    skills: [
      { label: 'Neo4j', pct: 85 },
      { label: 'Qdrant', pct: 83 },
      { label: 'Pinecone', pct: 78 },
      { label: 'PostgreSQL / MongoDB', pct: 82 },
      { label: 'Elasticsearch', pct: 80 },
      { label: 'Redis', pct: 81 },
      { label: 'MinIO', pct: 75 },
    ],
  },
  {
    title: 'AI Frameworks',
    accent: '#D4891A',
    skills: [
      { label: 'LangChain', pct: 90 },
      { label: 'LlamaIndex', pct: 82 },
      { label: 'DSPy', pct: 80 },
      { label: 'OpenAI Agents SDK', pct: 82 },
      { label: 'Google ADK', pct: 78 },
      { label: 'NeMo Guardrails', pct: 78 },
      { label: 'AutoGen / CrewAI', pct: 80 },
      { label: 'Semantic Kernel', pct: 75 },
      { label: 'Hugging Face', pct: 86 },
      { label: 'Unsloth / LLaMA Factory', pct: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#F5A832] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#F5A832] inline-block" />
        03 · Skills
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3 text-[#FFF3E2]">
        Skill Levels.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#F5A832] to-transparent mb-4" />
      <p className="text-[#C8A882] text-[0.85rem] mb-8">Recruiter-scannable proficiency — at a glance</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="glass rounded-[16px] p-6 border border-[rgba(245,168,50,0.1)]"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: group.accent }}
              />
              <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#FFF3E2]">
                {group.title}
              </div>
            </div>

            <div className="space-y-3.5">
              {group.skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[0.78rem] text-[#C8A882]">{skill.label}</span>
                    <span className="text-[0.68rem] font-mono text-[#8B7355]">{skill.pct}%</span>
                  </div>
                  <div className="w-full h-[6px] bg-[rgba(245,168,50,0.08)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${skill.pct}%`,
                        background: `linear-gradient(90deg, ${group.accent}, #F5A832)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
