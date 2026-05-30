'use client';

interface ChipData {
  label: string;
  type: 'metric' | 'client' | 'tech' | 'leadership';
}

interface ExperienceItem {
  summary: string;
  chips: ChipData[];
}

interface Experience {
  date: string;
  company: string;
  badge: string | null;
  role: string;
  items: ExperienceItem[];
}

const CHIP_STYLES = {
  metric: 'bg-[rgba(16,185,129,0.12)] text-[#10B981] border-[rgba(16,185,129,0.25)]',
  client: 'bg-[rgba(0,200,220,0.12)] text-[#00C8DC] border-[rgba(0,200,220,0.25)]',
  tech: 'bg-[rgba(59,158,240,0.12)] text-[#3B9EF0] border-[rgba(59,158,240,0.25)]',
  leadership: 'bg-[rgba(245,168,50,0.12)] text-[#F5A832] border-[rgba(245,168,50,0.25)]',
};

const EXPERIENCES: Experience[] = [
  {
    date: 'Oct 2025 – Present',
    company: 'Gruve AI',
    badge: 'Current',
    role: 'Senior AI/ML Engineer',
    items: [
      {
        summary: 'LLM-supervised Knowledge Distillation — compressed 4+ hour firewall validation to 2–5 sec',
        chips: [
          { label: '98% reduction', type: 'metric' },
          { label: 'Cisco ASA', type: 'client' },
          { label: 'GPT-4', type: 'tech' },
          { label: 'Led 4 engineers', type: 'leadership' },
        ],
      },
      {
        summary: 'MCP Server Development — production servers connecting LLM agents to enterprise tools',
        chips: [
          { label: '85% latency cut', type: 'metric' },
          { label: 'MCP SDK', type: 'tech' },
          { label: 'Led 3-person squad', type: 'leadership' },
        ],
      },
      {
        summary: 'TechGenie Voice Agent — MCP-powered IT triage with real-time resolution',
        chips: [
          { label: '42% faster resolution', type: 'metric' },
          { label: '500+ weekly', type: 'metric' },
          { label: 'MCP', type: 'tech' },
          { label: 'Led 4-engineer team', type: 'leadership' },
        ],
      },
      {
        summary: 'Enterprise AI Search (GSC) — hybrid graph + vector retrieval at scale',
        chips: [
          { label: '10K+ queries/day', type: 'metric' },
          { label: 'p95 <300ms', type: 'metric' },
          { label: 'GraphRAG', type: 'tech' },
          { label: 'Neo4j', type: 'tech' },
        ],
      },
      {
        summary: 'AI Safety PII Redaction — built custom eval harness with 99.2% precision; red-teamed pipeline against adversarial PII injection patterns',
        chips: [
          { label: 'Zero PII leakage', type: 'metric' },
          { label: 'J.P. Morgan', type: 'client' },
          { label: '99.2% precision', type: 'metric' },
          { label: 'Red-teamed', type: 'tech' },
          { label: 'Eval harness', type: 'tech' },
          { label: 'SOC 2 passed', type: 'metric' },
        ],
      },
      {
        summary: 'GUIS Meeting Intelligence Platform — real-time insights across Google Meet & MS Teams',
        chips: [
          { label: '6 microservices', type: 'metric' },
          { label: 'Gemini', type: 'tech' },
          { label: 'Led 5 engineers', type: 'leadership' },
        ],
      },
      {
        summary: 'Multi-Cloud FinOps — migrated VMs to event-driven containers across AWS, Azure, GCP',
        chips: [
          { label: '$18K/month saved', type: 'metric' },
          { label: '62% compute reduction', type: 'metric' },
          { label: 'Terraform', type: 'tech' },
        ],
      },
      {
        summary: 'Team Leadership & Mentoring — mentored junior ML engineers and established org standards',
        chips: [
          { label: 'Mentored 5 engineers', type: 'leadership' },
          { label: '2 promoted in 8 mo', type: 'metric' },
        ],
      },
    ],
  },
  {
    date: 'Aug 2023 – Oct 2024',
    company: 'August AI',
    badge: null,
    role: 'AI Engineer',
    items: [
      {
        summary: 'Multi-Agent Patient Interview System — raised diagnostic accuracy via context-aware prompt pipeline',
        chips: [
          { label: '67% → 91% accuracy', type: 'metric' },
          { label: '5,000+ sessions', type: 'metric' },
          { label: 'LangGraph', type: 'tech' },
          { label: 'Led 3-person ML team', type: 'leadership' },
        ],
      },
      {
        summary: 'Qwen 3.5 Reasoning Model — fine-tuned 72B model for medical domain adaptation',
        chips: [
          { label: 'Qwen 2.5 72B', type: 'tech' },
          { label: 'LoRA/QLoRA', type: 'tech' },
          { label: 'Unsloth', type: 'tech' },
        ],
      },
      {
        summary: 'HIPAA-Compliant Infrastructure — delivered 99.99% uptime across Azure and AWS',
        chips: [
          { label: '99.99% uptime', type: 'metric' },
          { label: 'HIPAA', type: 'metric' },
          { label: '2 audits passed', type: 'metric' },
        ],
      },
      {
        summary: 'Clinical NLP Pipeline — automated document review with high accuracy',
        chips: [
          { label: '$150K annual savings', type: 'metric' },
          { label: '97% accuracy', type: 'metric' },
          { label: 'Trained 2 analysts', type: 'leadership' },
        ],
      },
    ],
  },
  {
    date: 'Jan 2023 – Aug 2023',
    company: 'Krut AI (Snive)',
    badge: null,
    role: 'Machine Learning Engineer',
    items: [
      {
        summary: 'Generative Image Pipeline — optimised SDXL inference for e-commerce at scale',
        chips: [
          { label: '8s → 1.2s (85%↓)', type: 'metric' },
          { label: '50K+ images/mo', type: 'metric' },
          { label: 'TensorRT', type: 'tech' },
          { label: 'Mentored 2 engineers', type: 'leadership' },
        ],
      },
      {
        summary: 'GPU Cost Optimization — reduced inference costs while maintaining quality',
        chips: [
          { label: '$32K/month saved', type: 'metric' },
          { label: 'SSIM >0.95', type: 'metric' },
          { label: 'Mixed Precision', type: 'tech' },
        ],
      },
    ],
  },
  {
    date: 'Mar 2022 – Jan 2023',
    company: 'Lincode Labs Inc.',
    badge: null,
    role: 'Associate Data Scientist',
    items: [
      {
        summary: 'Event-Driven Architecture — replaced REST polling with SSE for real-time inference',
        chips: [
          { label: '$2M/year savings', type: 'metric' },
          { label: '450M req/month', type: 'metric' },
          { label: '15 global facilities', type: 'metric' },
          { label: 'SSE', type: 'tech' },
        ],
      },
      {
        summary: 'CV/OCR Model Delivery — deployed edge models for manufacturing clients worldwide',
        chips: [
          { label: '92% accuracy', type: 'metric' },
          { label: '0.24s inference', type: 'metric' },
          { label: '8 clients', type: 'client' },
          { label: 'Trained 20+ engineers', type: 'leadership' },
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#F5A832] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#F5A832] inline-block" />
        02 · Experience
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3 text-[#FFF3E2]">
        Where I&apos;ve Shipped.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#F5A832] to-transparent mb-10" />

      {/* Chip legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex items-center gap-1.5 text-[0.6rem] tracking-wide">
          <span className="px-2 py-0.5 rounded border bg-[rgba(16,185,129,0.12)] text-[#10B981] border-[rgba(16,185,129,0.25)]">Metrics</span>
        </div>
        <div className="flex items-center gap-1.5 text-[0.6rem] tracking-wide">
          <span className="px-2 py-0.5 rounded border bg-[rgba(0,200,220,0.12)] text-[#00C8DC] border-[rgba(0,200,220,0.25)]">Clients</span>
        </div>
        <div className="flex items-center gap-1.5 text-[0.6rem] tracking-wide">
          <span className="px-2 py-0.5 rounded border bg-[rgba(59,158,240,0.12)] text-[#3B9EF0] border-[rgba(59,158,240,0.25)]">Tech</span>
        </div>
        <div className="flex items-center gap-1.5 text-[0.6rem] tracking-wide">
          <span className="px-2 py-0.5 rounded border bg-[rgba(245,168,50,0.12)] text-[#F5A832] border-[rgba(245,168,50,0.25)]">Leadership</span>
        </div>
      </div>

      <div>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.company}
            className={`grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-12 py-9 ${
              i < EXPERIENCES.length - 1 ? 'border-b border-[rgba(245,168,50,0.1)]' : ''
            }`}
          >
            <div>
              <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[#8B7355] mb-1.5">
                {exp.date}
              </div>
              <div className="text-[0.78rem] font-semibold text-[#C8A882]">{exp.company}</div>
              {exp.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[0.58rem] tracking-[0.1em] uppercase bg-[rgba(245,168,50,0.1)] border border-[rgba(245,168,50,0.3)] text-[rgba(245,168,50,0.9)]">
                  {exp.badge}
                </span>
              )}
            </div>
            <div>
              <div className="text-[1.1rem] font-bold mb-4 text-[#FFF3E2]">{exp.role}</div>
              <div className="space-y-3">
                {exp.items.map((item, j) => (
                  <div key={j} className="group">
                    {/* 1-line summary */}
                    <div className="text-[0.83rem] text-[#C8A882] leading-[1.6] mb-1.5">
                      <span className="text-[#F5A832] text-[0.7rem] mr-1.5">→</span>
                      {item.summary}
                    </div>
                    {/* Chips below */}
                    <div className="flex flex-wrap gap-1.5 pl-5">
                      {item.chips.map((chip) => (
                        <span
                          key={chip.label}
                          className={`px-2 py-0.5 rounded text-[0.62rem] font-medium border ${CHIP_STYLES[chip.type]}`}
                        >
                          {chip.label}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
