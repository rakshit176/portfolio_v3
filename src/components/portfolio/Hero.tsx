'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left */}
          <div className="fade-in-up">
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#9C7E5A] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block pulse-indicator" />
              Open to Work · Bengaluru · 2026
            </div>

            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
              <span className="text-[#9C7E5A]/60">Hi, I am</span>
              <br />
              <span className="text-gradient-warm">{`{Rakshith Kumar}`}</span>
            </h1>

            <p className="text-[0.9rem] text-[#9C7E5A] leading-[1.8] max-w-[480px] mb-8">
              AI/ML Engineer specialising in{' '}
              <strong className="text-[#FEF3C7] font-medium">Generative AI, multi-agent systems</strong>, and
              large-scale cloud infrastructure.{' '}
              <strong className="text-[#FEF3C7] font-medium">5+ years</strong> shipping production AI — healthcare pipelines,
              GraphRAG enterprise search, sub-second diffusion inference.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 bg-gradient-to-r from-[#D97706] to-[#92400E] rounded-full text-[#FFF8F0] font-semibold text-[0.82rem] hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 border border-[#92400E]/40 rounded-full bg-transparent text-[#9C7E5A] text-[0.82rem] hover:border-[#D97706]/60 hover:text-[#FEF3C7] transition-all duration-200"
              >
                Ask My AI ↗
              </button>
            </div>
          </div>

          {/* Right — Profile Image + Code Card */}
          <div className="relative flex justify-start lg:justify-end items-center">
            {/* Glow blobs */}
            <div className="absolute -right-5 top-[5%] w-[280px] h-[280px] bg-radial-[ellipse] from-[rgba(217,119,6,0.25)] to-transparent rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute -left-8 bottom-[5%] w-[200px] h-[200px] bg-radial-[ellipse] from-[rgba(146,64,14,0.18)] to-transparent rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[360px]">
              {/* Profile Image */}
              <div className="relative mb-5 group">
                {/* Rotating border ring — amber gradient */}
                <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-[#D97706] via-[#92400E] to-[#D97706] opacity-60 blur-[2px] group-hover:opacity-80 transition-opacity duration-500" />
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
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0705] to-transparent" />
                    {/* Name overlay at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="font-mono text-[0.7rem] text-[#D97706] tracking-wider">SDE II – AI/ML</div>
                      <div className="text-[#FFF8F0] font-bold text-[0.95rem] mt-0.5">Rakshith Kumar K.N</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Card (compact) */}
              <div className="glass rounded-[16px] p-4 glow-amber">
                {/* Terminal dots */}
                <div className="flex gap-[5px] mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2 h-2 rounded-full bg-[#28C840]" />
                </div>

                <div className="font-mono text-[0.68rem] text-[#9C7E5A] leading-[1.65]">
                  <div><span className="text-[#92400E]"># rakshith.py</span></div>
                  <div><span className="text-[#D97706]">class</span> <span className="text-[#F59E0B]">RakshithKumar</span>:</div>
                  <div>&nbsp;&nbsp;role = <span className="text-[#FEF3C7]">&quot;SDE II – AI/ML&quot;</span></div>
                  <div>&nbsp;&nbsp;stack = [<span className="text-[#FEF3C7]">&quot;LangGraph&quot;</span>, <span className="text-[#FEF3C7]">&quot;GraphRAG&quot;</span>, <span className="text-[#FEF3C7]">&quot;AWS Bedrock&quot;</span>]</div>
                  <div>&nbsp;&nbsp;yoe = <span className="text-[#F59E0B]">5</span></div>
                  <div>&nbsp;&nbsp;<span className="text-[#D97706]">def</span> <span className="text-[#F59E0B]">ship</span>(self, idea):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#D97706]">return</span> <span className="text-[#FEF3C7]">&quot;production-ready AI&quot;</span></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { n: '5+', l: 'Years Exp.' },
                    { n: '$2M+', l: 'Cost Saved' },
                    { n: '2,500+', l: 'Daily AI Calls' },
                    { n: '99.99%', l: 'Uptime SLA' },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="bg-[rgba(217,119,6,0.06)] border border-[rgba(217,119,6,0.15)] rounded-[10px] py-2.5 px-3 text-center"
                    >
                      <div className="text-[1.15rem] font-extrabold text-gradient-amber">{s.n}</div>
                      <div className="text-[0.55rem] tracking-[0.1em] uppercase text-[#9C7E5A] mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
