'use client';

import Image from 'next/image';

const SKILL_GROUPS = [
  {
    title: 'LLMs & GenAI',
    chips: [
      { label: 'GPT-4 / Claude', hot: true },
      { label: 'LangGraph', hot: true },
      { label: 'GraphRAG', hot: true },
      { label: 'RAG', hot: false },
      { label: 'PEFT/LoRA', hot: false },
      { label: 'Fine-tuning', hot: false },
      { label: 'MCP/A2A', hot: false },
    ],
  },
  {
    title: 'Cloud & Infra',
    chips: [
      { label: 'AWS Bedrock', hot: true },
      { label: 'Azure AI Foundry', hot: true },
      { label: 'ECS/EKS', hot: false },
      { label: 'Kubernetes', hot: false },
      { label: 'SageMaker', hot: false },
    ],
  },
  {
    title: 'ML / DL / Inference',
    chips: [
      { label: 'PyTorch', hot: true },
      { label: 'CUDA', hot: true },
      { label: 'TensorRT', hot: false },
      { label: 'vLLM', hot: false },
      { label: 'SDXL', hot: false },
      { label: 'ControlNet', hot: false },
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#00d4ff] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#00d4ff] inline-block" />
        01 · About
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
        AI Engineer.<br />Infrastructure Thinker.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#00d4ff] to-transparent mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          {/* Profile image in About section */}
          <div className="relative mb-6 group">
            {/* Animated border glow */}
            <div className="absolute -inset-[2px] rounded-[16px] bg-gradient-to-br from-[#00d4ff]/50 via-transparent to-[#ff9500]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />
            <div className="relative glass rounded-[14px] overflow-hidden border border-white/[0.06]">
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Rakshith Kumar K.N — AI Engineer"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.6)] via-transparent to-transparent" />
                {/* Status badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 glass px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] pulse-indicator" />
                  <span className="text-[0.6rem] text-[#34d399] font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[0.9rem] text-[#a0a0a0] leading-[1.85]">
            <p>
              I&apos;m <strong className="text-white/80 font-medium">Rakshith Kumar K.N</strong> — an AI/ML Engineer
              specialising in <strong className="text-white/80 font-medium">Generative AI, multi-agent orchestration</strong>,
              and large-scale distributed cloud infrastructure on AWS &amp; Azure.
            </p>
            <p>
              5+ years shipping production AI — from{' '}
              <strong className="text-white/80 font-medium">sub-second diffusion model inference</strong> and
              HIPAA-compliant healthcare pipelines to GraphRAG-powered enterprise search and hybrid vector retrieval engines.
            </p>
            <p>
              MSc in Big Data Analytics from St. Joseph&apos;s University, Bengaluru. Currently SDE II – AI/ML at Gruve AI
              building enterprise-grade systems for Fortune 500 clients including{' '}
              <strong className="text-white/80 font-medium">Cisco and J.P. Morgan</strong>.
            </p>
            <p>
              I care about the full stack — from CUDA kernels to multi-agent flow design.{' '}
              <strong className="text-white/80 font-medium">Not just prototypes — shipped systems.</strong>
            </p>
          </div>

          {/* Skill chips */}
          <div className="mt-8 space-y-4">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <div className="text-[0.58rem] tracking-[0.18em] uppercase text-[#a0a0a0] mb-2">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className={`px-2.5 py-1 border rounded text-[0.68rem] transition-all duration-200 cursor-default ${
                        chip.hot
                          ? 'border-[rgba(0,212,255,0.35)] text-[rgba(0,212,255,0.9)] bg-[rgba(0,212,255,0.06)]'
                          : 'border-white/[0.08] text-white/50 hover:border-[rgba(0,212,255,0.3)] hover:text-white/80'
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

        {/* Code Card */}
        <div className="glass rounded-2xl p-5 font-mono">
          <div className="flex gap-[5px] mb-4">
            <div className="w-[7px] h-[7px] rounded-full bg-[#FF5F57]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#FFBD2E]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[0.75rem] text-[#a0a0a0] leading-[1.7]">
            <div><span className="text-[#475569]">{'//'} profile.json</span></div>
            <div>{'{'}</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;name&quot;</span>: <span className="text-[#34d399]">&quot;Rakshith Kumar K.N&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;title&quot;</span>: <span className="text-[#34d399]">&quot;SDE II – AI/ML&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;location&quot;</span>: <span className="text-[#34d399]">&quot;Bengaluru, India&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;experience&quot;</span>: <span className="text-[#f472b6]">5</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;education&quot;</span>: <span className="text-[#34d399]">&quot;MSc Big Data Analytics&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;current&quot;</span>: <span className="text-[#34d399]">&quot;Gruve AI&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;clients&quot;</span>: [<span className="text-[#34d399]">&quot;Cisco&quot;</span>, <span className="text-[#34d399]">&quot;J.P. Morgan&quot;</span>],</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;speciality&quot;</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;Generative AI&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;Multi-Agent Systems&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;HIPAA Infra&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;Diffusion Inference&quot;</span></div>
            <div>&nbsp;&nbsp;],</div>
            <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">&quot;open_to_work&quot;</span>: <span className="text-[#f472b6]">true</span></div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
