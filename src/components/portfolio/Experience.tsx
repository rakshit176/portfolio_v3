'use client';

const EXPERIENCES = [
  {
    date: 'Oct 2025 – Present',
    company: 'Gruve AI',
    badge: 'Current',
    role: 'SDE II – AI/ML',
    items: [
      'Engineered <strong class="text-white/75">Cisco FMT v2.0</strong> using GraphRAG — compressed ASA config validation to a 2–5s cycle, eliminating legacy firewall migration bottlenecks.',
      'Built <strong class="text-white/75">J.P. Morgan NLP Redaction Service</strong> (spaCy + Presidio + GLiNER) processing thousands of financial documents daily with zero PII leakage.',
      'Architected <strong class="text-white/75">GSC AI Search Engine</strong> (Neo4j + Qdrant + AWS Bedrock) on private AWS VPC — sub-300ms cross-region retrieval.',
      'Migrated WebSocket services to Azure Container Apps — cut compute costs <strong class="text-white/75">60%+</strong> vs always-on VMs.',
      'Built <strong class="text-white/75">Gruve TechGenie</strong> IT voice agent — 40% reduction in ticket resolution time across 3 enterprise clients.',
    ],
  },
  {
    date: 'Aug 2024 – Oct 2025',
    company: 'August AI',
    badge: null,
    role: 'AI Engineer',
    items: [
      'Architected multi-agent patient interview + clinical summarisation — 45% clinician burden reduction, 2,500+ daily interactions across 3 healthcare facilities.',
      'Achieved <strong class="text-white/75">91% diagnostic accuracy</strong> across 5,000+ sessions, $150K annual savings.',
      'Deployed HIPAA-compliant AWS + Azure infra — 99.99% uptime for 500+ concurrent users through all enterprise regulatory audits.',
    ],
  },
  {
    date: 'Jan 2024 – Aug 2024',
    company: 'Snive / Krut AI',
    badge: null,
    role: 'Machine Learning Engineer',
    items: [
      'Fast UNet + VAE optimisations for SDXL + ControlNet — <strong class="text-white/75">1–2s inference</strong>, 80% cost reduction, 50K+ images/month.',
      'Gradient checkpointing + mixed-precision — 60% GPU memory reduction, <strong class="text-white/75">$30K/month</strong> AWS savings.',
    ],
  },
  {
    date: 'Mar 2022 – Jan 2024',
    company: 'Lincode Labs',
    badge: null,
    role: 'Associate Data Scientist',
    items: [
      'OCR, segmentation & detection for 8 manufacturing clients — <strong class="text-white/75">92% accuracy</strong> at 0.25s inference.',
      'SSE replacement of polling — 90% API cost cut, <strong class="text-white/75">$2M annual savings</strong> across 15+ global facilities.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#00d4ff] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#00d4ff] inline-block" />
        02 · Experience
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
        Where I&apos;ve Shipped.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#00d4ff] to-transparent mb-10" />

      <div>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.company}
            className={`grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-12 py-9 ${
              i < EXPERIENCES.length - 1 ? 'border-b border-white/[0.08]' : ''
            }`}
          >
            <div>
              <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[#a0a0a0] mb-1.5">
                {exp.date}
              </div>
              <div className="text-[0.78rem] font-semibold text-white/50">{exp.company}</div>
              {exp.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[0.58rem] tracking-[0.1em] uppercase bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.25)] text-[rgba(0,212,255,0.85)]">
                  {exp.badge}
                </span>
              )}
            </div>
            <div>
              <div className="text-[1.1rem] font-bold mb-3">{exp.role}</div>
              <ul className="space-y-1.5">
                {exp.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-[0.83rem] text-[#a0a0a0] leading-[1.75] pl-5 relative list-none"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="absolute left-0 text-[#00d4ff] text-[0.68rem] top-[0.18rem]">→</span>${item}`,
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
