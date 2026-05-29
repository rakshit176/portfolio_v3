'use client';

const EXPERIENCES = [
  {
    date: 'Oct 2024 – Present',
    company: 'Gruve AI',
    badge: 'Current',
    role: 'Senior AI/ML Engineer',
    items: [
      'LLM-supervised <strong class="text-[#FEF3C7]">Knowledge Distillation (Cisco ASA)</strong>: Compressed 4+ hour firewall validation to 2–5 sec (98% reduction) by training 3 student models via GPT-4 Teacher with KL-divergence loss; enabled Fortune 500 migration of 200+ firewalls 10x faster. Led 4 engineers; zero LLM calls at inference.',
      'MCP Server Development (Foundation Team): Built production <strong class="text-[#FEF3C7]">MCP servers</strong> connecting LLM agents to HappyFox, Jira, and Confluence, eliminating 85% of manual data fetch latency. Led 3-person squad; servers adopted by 2 internal teams.',
      'TechGenie Voice Agent [MCP-Powered]: Achieved <strong class="text-[#FEF3C7]">42% reduction</strong> in IT resolution time (500+ weekly interactions, 80+ ticket types) by building MCP-connected LLM agents for real-time triage. Led 4-engineer cross-functional team.',
      'Enterprise AI Search (GSC): Served <strong class="text-[#FEF3C7]">10K+ queries/day</strong> at p95 &lt;300ms with 99.9% uptime — hybrid graph + vector retrieval (1M+ graph nodes, 50M embeddings). Mentored 2 engineers.',
      'AI Safety – PII Redaction (J.P. Morgan): Achieved <strong class="text-[#FEF3C7]">zero PII leakage</strong> across 50K+ financial documents (99.2% precision, SOC 2 passed) by architecting NLP redaction pipeline; scaled to 2,000+ docs/day.',
      'GUIS Meeting Intelligence Platform: Led 5-engineer team to build 6-service platform (React, Express, TTS, transcription, meeting bot) for real-time meeting insights across Google Meet and MS Teams.',
      'Multi-Cloud FinOps: Saved <strong class="text-[#FEF3C7]">$18K/month</strong> (62% Azure compute reduction) by migrating VMs to event-driven containers across AWS, Azure, and GCP. 99.5% SLA.',
      'Team Leadership & Mentoring: Mentored <strong class="text-[#FEF3C7]">5 junior ML engineers</strong> (2 promoted within 8 months); established org-wide documentation standards, technical design reviews, and onboarding curriculum.',
    ],
  },
  {
    date: 'Aug 2023 – Oct 2024',
    company: 'August AI',
    badge: null,
    role: 'AI Engineer',
    items: [
      'Multi-Agent Patient Interview System: Raised diagnostic accuracy <strong class="text-[#FEF3C7]">67% to 91%</strong> (5,000+ validated sessions, 2,500+ daily interactions across 3 hospitals) by building context-aware multi-agent prompt pipeline. Led 3-person ML team.',
      'Qwen 3.5 Reasoning Model Training: Fine-tuned <strong class="text-[#FEF3C7]">Qwen 2.5 72B</strong> reasoning model using Unsloth and LLaMA Factory on Modal and RunPod GPU infrastructure for medical domain adaptation; applied LoRA/QLoRA for parameter-efficient training.',
      'HIPAA-Compliant Infrastructure: Delivered <strong class="text-[#FEF3C7]">99.99% uptime</strong> for 500+ concurrent users across Azure and AWS; passed 2 regulatory audits with zero findings.',
      'Clinical NLP Pipeline: Achieved <strong class="text-[#FEF3C7]">$150K annual savings</strong> (85% manual review reduction) by building NLP pipeline with 97% accuracy on 10,000+ monthly documents. Trained 2 clinical data analysts.',
    ],
  },
  {
    date: 'Jan 2023 – Aug 2023',
    company: 'Krut AI (Snive)',
    badge: null,
    role: 'Machine Learning Engineer',
    items: [
      'Generative Image Pipeline: Reduced inference latency <strong class="text-[#FEF3C7]">8s to 1.2s</strong> (85% reduction, 50K+ images/month) via TensorRT, Fast UNet, and VAE optimizations on AWS G5 instances. Mentored 2 junior engineers.',
      'GPU Cost Optimization: Reduced GPU costs <strong class="text-[#FEF3C7]">$32K/month</strong> by applying mixed precision and gradient checkpointing; SSIM &gt;0.95 maintained. Cut deployment time 3 days to 4 hours.',
    ],
  },
  {
    date: 'Mar 2022 – Jan 2023',
    company: 'Lincode Labs Inc.',
    badge: null,
    role: 'Associate Data Scientist',
    items: [
      'Event-Driven Architecture: Achieved <strong class="text-[#FEF3C7]">$2M/year</strong> infrastructure savings (450M req/month across 15 global facilities) by replacing REST polling with Server-Sent Events on AWS.',
      'CV/OCR Model Delivery: Delivered <strong class="text-[#FEF3C7]">92% accuracy</strong> models for 8 international clients (0.24s inference); reduced support tickets 60% by training 20+ client engineers via workshops.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D97706] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#D97706] inline-block" />
        02 · Experience
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
        Where I&apos;ve Shipped.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#D97706] to-transparent mb-10" />

      <div>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.company}
            className={`grid grid-cols-1 md:grid-cols-[170px_1fr] gap-6 md:gap-12 py-9 ${
              i < EXPERIENCES.length - 1 ? 'border-b border-[rgba(217,119,6,0.1)]' : ''
            }`}
          >
            <div>
              <div className="text-[0.62rem] tracking-[0.1em] uppercase text-[#9C7E5A] mb-1.5">
                {exp.date}
              </div>
              <div className="text-[0.78rem] font-semibold text-[#9C7E5A]">{exp.company}</div>
              {exp.badge && (
                <span className="inline-block mt-2 px-2 py-0.5 rounded text-[0.58rem] tracking-[0.1em] uppercase bg-[rgba(217,119,6,0.1)] border border-[rgba(217,119,6,0.3)] text-[rgba(245,158,11,0.9)]">
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
                    className="text-[0.83rem] text-[#9C7E5A] leading-[1.75] pl-5 relative list-none"
                    dangerouslySetInnerHTML={{
                      __html: `<span class="absolute left-0 text-[#D97706] text-[0.68rem] top-[0.18rem]">→</span>${item}`,
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
