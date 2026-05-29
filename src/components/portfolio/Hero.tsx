'use client';

import Image from 'next/image';

const SKILL_CHIPS = [
  'LangGraph', 'GraphRAG', 'AWS Bedrock', 'MCP', 'PyTorch', 'HIPAA', 'Neo4j', 'TensorRT',
];

const STATS = [
  { n: '5+', l: 'Years Exp.' },
  { n: '$2M+', l: 'Cost Saved' },
  { n: '10K+', l: 'Daily AI Queries' },
  { n: '99.99%', l: 'Uptime SLA' },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left */}
          <div className="fade-in-up">
            {/* Open to Work pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] pulse-green" />
              <span className="text-[0.7rem] font-semibold text-[#10B981] tracking-wide">Open to Work</span>
              <span className="text-[0.6rem] text-[#64748B]">·</span>
              <span className="text-[0.6rem] text-[#64748B]">Bengaluru · 2026</span>
            </div>

            {/* Name — large gradient */}
            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-3">
              <span className="text-gradient-warm">Rakshith Kumar K.N</span>
            </h1>

            {/* 1-line descriptor */}
            <p className="text-[0.9rem] text-[#94A3B8] leading-[1.7] max-w-[520px] mb-5">
              Senior AI/ML Engineer · 5+ yrs · <strong className="text-[#E2E8F0] font-medium">GenAI, GraphRAG &amp; Multi-Agent Systems</strong>
            </p>

            {/* Skill tags row */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {SKILL_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 border border-[rgba(124,58,237,0.25)] rounded text-[0.68rem] text-[#A78BFA] bg-[rgba(124,58,237,0.06)] transition-all duration-200 hover:border-[rgba(124,58,237,0.5)] hover:text-[#E2E8F0]"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* 2 CTA buttons */}
            <div className="flex gap-3 flex-wrap mb-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] rounded-full text-[#F8FAFC] font-semibold text-[0.82rem] hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
              >
                View Projects
              </button>
              <a
                href="mailto:rakshitkumarkn@gmail.com?subject=Request%20for%20Resume"
                className="px-7 py-3 border border-[rgba(124,58,237,0.3)] rounded-full bg-transparent text-[#94A3B8] text-[0.82rem] hover:border-[rgba(124,58,237,0.6)] hover:text-[#E2E8F0] transition-all duration-200 inline-flex items-center gap-1.5"
              >
                Download Resume <span className="text-[0.7rem]">↓</span>
              </a>
            </div>

            {/* Stats row — compact horizontal strip */}
            <div className="flex gap-3 flex-wrap">
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="bg-[rgba(124,58,237,0.06)] border border-[rgba(124,58,237,0.15)] rounded-[10px] py-2.5 px-4 text-center"
                >
                  <div className="text-[1.1rem] font-extrabold text-gradient-amber">{s.n}</div>
                  <div className="text-[0.55rem] tracking-[0.1em] uppercase text-[#64748B] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Image + Code Card */}
          <div className="relative flex justify-start lg:justify-end items-center">
            {/* Glow blobs */}
            <div className="absolute -right-5 top-[5%] w-[280px] h-[280px] bg-radial-[ellipse] from-[rgba(124,58,237,0.25)] to-transparent rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute -left-8 bottom-[5%] w-[200px] h-[200px] bg-radial-[ellipse] from-[rgba(6,182,212,0.15)] to-transparent rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[360px]">
              {/* Profile Image */}
              <div className="relative mb-5 group">
                {/* Rotating border ring — purple gradient */}
                <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED] opacity-60 blur-[2px] group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative glass rounded-[20px] overflow-hidden">
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt="Rakshith Kumar K.N — AI Engineer"
                      fill
                      priority
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
                    {/* Name overlay at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="font-mono text-[0.7rem] text-[#A78BFA] tracking-wider">Senior AI/ML Engineer</div>
                      <div className="text-[#F8FAFC] font-bold text-[0.95rem] mt-0.5">Rakshith Kumar K.N</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Card (compact) — purple syntax */}
              <div className="glass rounded-[16px] p-4 glow-purple">
                {/* Terminal dots */}
                <div className="flex gap-[5px] mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                </div>

                <div className="font-mono text-[0.68rem] text-[#94A3B8] leading-[1.65]">
                  <div><span className="text-[#64748B]"># rakshith.py</span></div>
                  <div><span className="text-[#7C3AED]">class</span> <span className="text-[#A78BFA]">RakshithKumar</span>:</div>
                  <div>&nbsp;&nbsp;role = <span className="text-[#E2E8F0]">&quot;Senior AI/ML Engineer&quot;</span></div>
                  <div>&nbsp;&nbsp;stack = [<span className="text-[#E2E8F0]">&quot;LangGraph&quot;</span>, <span className="text-[#E2E8F0]">&quot;GraphRAG&quot;</span>, <span className="text-[#E2E8F0]">&quot;AWS Bedrock&quot;</span>]</div>
                  <div>&nbsp;&nbsp;yoe = <span className="text-[#A78BFA]">5</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#7C3AED]">def</span> <span className="text-[#A78BFA]">ship</span>(self, idea):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7C3AED]">return</span> <span className="text-[#E2E8F0]">&quot;production-ready AI&quot;</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
