'use client';

import Image from 'next/image';

const SKILL_GROUPS = [
  {
    title: 'LLMs & GenAI',
    chips: [
      { label: 'GPT-4 / Claude 3.5', hot: true },
      { label: 'LangGraph', hot: true },
      { label: 'GraphRAG', hot: true },
      { label: 'MCP Protocol', hot: true },
      { label: 'RAG', hot: false },
      { label: 'PEFT/LoRA', hot: false },
      { label: 'Knowledge Distillation', hot: false },
      { label: 'Fine-tuning', hot: false },
    ],
  },
  {
    title: 'Cloud & Infra',
    chips: [
      { label: 'AWS Bedrock', hot: true },
      { label: 'Azure AI Foundry', hot: true },
      { label: 'GCP Vertex AI', hot: true },
      { label: 'Terraform', hot: false },
      { label: 'Kubernetes', hot: false },
    ],
  },
  {
    title: 'ML / DL / Inference',
    chips: [
      { label: 'PyTorch', hot: true },
      { label: 'CUDA / TensorRT', hot: true },
      { label: 'vLLM / SGLang', hot: false },
      { label: 'SDXL', hot: false },
      { label: 'BERT / YOLO', hot: false },
      { label: 'ControlNet', hot: false },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#7C3AED] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#7C3AED] inline-block" />
        01 · About
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3 text-[#F1F5F9]">
        AI Engineer.<br />Infrastructure Thinker.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#7C3AED] to-transparent mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          {/* Profile image in About section */}
          <div className="relative mb-6 group">
            {/* Animated border glow — purple */}
            <div className="absolute -inset-[2px] rounded-[16px] bg-gradient-to-br from-[#7C3AED]/50 via-transparent to-[#06B6D4]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
            <div className="relative glass rounded-[14px] overflow-hidden border border-[rgba(124,58,237,0.1)]">
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Rakshith Kumar K.N — AI Engineer"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,14,26,0.6)] via-transparent to-transparent" />
                {/* Status badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 glass px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-green" />
                  <span className="text-[0.6rem] text-[#10B981] font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[0.9rem] text-[#94A3B8] leading-[1.85]">
            <p>
              I&apos;m <strong className="text-[#E2E8F0] font-medium">Rakshith Kumar K.N</strong> — a Senior AI/ML Engineer
              with <strong className="text-[#E2E8F0] font-medium">5+ years delivering $2.3M+ measurable business impact</strong> across
              enterprise security, healthcare, and fintech. MCP Foundation Development contributor building production MCP servers
              connecting LLM agents to live enterprise tools.
            </p>
            <p>
              Proven team leader who mentored <strong className="text-[#E2E8F0] font-medium">5+ junior engineers</strong>, led
              cross-functional squads of 4–8 engineers, and pioneered <strong className="text-[#E2E8F0] font-medium">LLM-supervised Knowledge Distillation</strong> —
              compressing 4+ hour firewall validation to 2–5 seconds. Multi-cloud architect across AWS, Azure, and GCP with
              $50K+/month in cloud savings.
            </p>
            <p>
              M.Sc. Big Data Analytics from St. Joseph&apos;s University, Bengaluru. B.C.A. from Seshadripuram College.
              Currently Senior AI/ML Engineer at Gruve AI building enterprise-grade systems for Fortune 500 clients including{' '}
              <strong className="text-[#E2E8F0] font-medium">Cisco and J.P. Morgan</strong>.
            </p>
            <p>
              Deep expertise in multi-agent orchestration, GraphRAG, LLMOps pipelines, and regulated-domain AI (HIPAA, SOC 2).{' '}
              <strong className="text-[#E2E8F0] font-medium">Zero PII leakage across 50K+ financial documents.</strong>
            </p>
          </div>

          {/* Education */}
          <div className="mt-8 mb-6">
            <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#94A3B8] mb-3">Education</div>
            <div className="space-y-3">
              <div className="glass rounded-[12px] p-4 border border-[rgba(124,58,237,0.1)]">
                <div className="text-[0.82rem] font-semibold text-[#E2E8F0]">M.Sc. Big Data Analytics</div>
                <div className="text-[0.72rem] text-[#94A3B8] mt-0.5">St. Joseph&apos;s University, Bengaluru · 2020–2022</div>
              </div>
              <div className="glass rounded-[12px] p-4 border border-[rgba(124,58,237,0.1)]">
                <div className="text-[0.82rem] font-semibold text-[#E2E8F0]">B.C.A. Computer Applications</div>
                <div className="text-[0.72rem] text-[#94A3B8] mt-0.5">Seshadripuram College, Bengaluru · 2016–2019</div>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mb-6">
            <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#94A3B8] mb-3">Awards & Recognition</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-[10px] border border-[rgba(124,58,237,0.1)] bg-[rgba(124,58,237,0.03)]">
                <span className="text-[#A78BFA] text-[0.85rem] mt-0.5">★</span>
                <div>
                  <div className="text-[0.78rem] font-semibold text-[#E2E8F0]">Winner — Gruve AI Hackathon</div>
                  <div className="text-[0.68rem] text-[#94A3B8]">IT Help Desk automation project</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-[10px] border border-[rgba(124,58,237,0.1)] bg-[rgba(124,58,237,0.03)]">
                <span className="text-[#A78BFA] text-[0.85rem] mt-0.5">★</span>
                <div>
                  <div className="text-[0.78rem] font-semibold text-[#E2E8F0]">Winner — August AI Hackathon</div>
                  <div className="text-[0.68rem] text-[#94A3B8]">AI Doctor Analyzer for clinical records</div>
                </div>
              </div>

              {/* IEEE Paper — PROMINENT highlighted card */}
              <div className="flex items-start gap-2.5 px-4 py-3.5 rounded-[10px] border-l-[3px] border-l-[#7C3AED] border border-[rgba(124,58,237,0.15)] bg-[rgba(124,58,237,0.06)]">
                <div>
                  <div className="text-[0.85rem] font-bold text-[#A78BFA]">Co-author — IEEE ACAI 2022</div>
                  <div className="text-[0.72rem] text-[#E2E8F0] mt-0.5">Water Quality Prediction using BPNN, SVR, and LSTM</div>
                  <div className="text-[0.65rem] text-[#64748B] mt-1">Published at IEEE International Conference on Advanced Computing and Artificial Intelligence</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-[10px] border border-[rgba(124,58,237,0.1)] bg-[rgba(124,58,237,0.03)]">
                <span className="text-[#A78BFA] text-[0.85rem] mt-0.5">★</span>
                <div>
                  <div className="text-[0.78rem] font-semibold text-[#E2E8F0]">MCP Foundation Development Contributor</div>
                  <div className="text-[0.68rem] text-[#94A3B8]">Open-source Model Context Protocol ecosystem</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill chips */}
          <div className="space-y-4">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#94A3B8] mb-2">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className={`px-2.5 py-1 border rounded text-[0.68rem] transition-all duration-200 cursor-default ${
                        chip.hot
                          ? 'border-[rgba(124,58,237,0.4)] text-[rgba(167,139,250,0.95)] bg-[rgba(124,58,237,0.08)]'
                          : 'border-[rgba(124,58,237,0.12)] text-[#94A3B8] hover:border-[rgba(124,58,237,0.35)] hover:text-[#E2E8F0]'
                      }`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Card — purple syntax */}
        <div className="glass rounded-2xl p-5 font-mono glow-purple">
          <div className="flex gap-[5px] mb-4">
            <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[0.75rem] text-[#94A3B8] leading-[1.7]">
            <div><span className="text-[#64748B]">{'//'} profile.json</span></div>
            <div>{'{'}</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;name&quot;</span>: <span className="text-[#E2E8F0]">&quot;Rakshith Kumar K.N&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;title&quot;</span>: <span className="text-[#E2E8F0]">&quot;Senior AI/ML Engineer&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;location&quot;</span>: <span className="text-[#E2E8F0]">&quot;Bengaluru, India&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;experience&quot;</span>: <span className="text-[#A78BFA]">5</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;education&quot;</span>: [<span className="text-[#E2E8F0]">&quot;MSc Big Data Analytics&quot;</span>, <span className="text-[#E2E8F0]">&quot;BCA&quot;</span>],</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;current&quot;</span>: <span className="text-[#E2E8F0]">&quot;Gruve AI&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;clients&quot;</span>: [<span className="text-[#E2E8F0]">&quot;Cisco&quot;</span>, <span className="text-[#E2E8F0]">&quot;J.P. Morgan&quot;</span>],</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;speciality&quot;</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E2E8F0]">&quot;Generative AI&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E2E8F0]">&quot;Multi-Agent Systems&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E2E8F0]">&quot;HIPAA Infra&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#E2E8F0]">&quot;Diffusion Inference&quot;</span></div>
            <div>&nbsp;&nbsp;],</div>
            <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">&quot;open_to_work&quot;</span>: <span className="text-[#A78BFA]">true</span></div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
