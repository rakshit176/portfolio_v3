'use client';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative z-10">
      <div className="max-w-[1160px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left */}
          <div className="fade-in-up">
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#a0a0a0] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34d399] inline-block pulse-indicator" />
              Open to Work · Bengaluru · 2026
            </div>

            <h1 className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
              <span className="text-white/20">Hi, I am</span>
              <br />
              <span className="text-gradient-mixed">{`{Rakshith Kumar}`}</span>
            </h1>

            <p className="text-[0.9rem] text-[#a0a0a0] leading-[1.8] max-w-[480px] mb-8">
              AI/ML Engineer specialising in{' '}
              <strong className="text-white/75 font-medium">Generative AI, multi-agent systems</strong>, and
              large-scale cloud infrastructure.{' '}
              <strong className="text-white/75 font-medium">5+ years</strong> shipping production AI — healthcare pipelines,
              GraphRAG enterprise search, sub-second diffusion inference.
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 bg-gradient-to-r from-[#00d4ff] to-[#0090b0] rounded-full text-white font-semibold text-[0.82rem] hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3 border border-white/10 rounded-full bg-transparent text-white/60 text-[0.82rem] hover:border-[#00d4ff]/40 hover:text-white transition-all duration-200"
              >
                Ask My AI ↗
              </button>
            </div>
          </div>

          {/* Right — Code Card */}
          <div className="relative flex justify-start lg:justify-end items-center">
            {/* Glow blob */}
            <div className="absolute -right-5 top-[10%] w-[280px] h-[280px] bg-radial-[ellipse] from-[rgba(0,212,255,0.25)] to-transparent rounded-full blur-[40px] pointer-events-none" />

            <div className="glass rounded-[20px] p-6 w-full max-w-[360px] relative z-10 glow-blue">
              {/* Terminal dots */}
              <div className="flex gap-[5px] mb-4">
                <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <div className="w-2 h-2 rounded-full bg-[#28C840]" />
              </div>

              <div className="font-mono text-[0.72rem] text-[#a0a0a0] leading-[1.7]">
                <div><span className="text-[#475569]"># rakshith.py — production AI engineer</span></div>
                <div><span className="text-[#00d4ff]">class</span> <span className="text-[#ff9500]">RakshithKumar</span>:</div>
                <div>&nbsp;&nbsp;role = <span className="text-[#34d399]">&quot;SDE II – AI/ML&quot;</span></div>
                <div>&nbsp;&nbsp;stack = [<span className="text-[#34d399]">&quot;LangGraph&quot;</span>, <span className="text-[#34d399]">&quot;GraphRAG&quot;</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;AWS Bedrock&quot;</span>, <span className="text-[#34d399]">&quot;PyTorch&quot;</span>]</div>
                <div>&nbsp;&nbsp;yoe = <span className="text-[#f472b6]">5</span></div>
                <div>&nbsp;&nbsp;uptime = <span className="text-[#34d399]">&quot;99.99%&quot;</span></div>
                <div>&nbsp;&nbsp;<span className="text-[#00d4ff]">def</span> <span className="text-[#ff9500]">ship</span>(self, idea):</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00d4ff]">return</span> <span className="text-[#34d399]">&quot;production-ready AI&quot;</span></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mt-5">
                {[
                  { n: '5+', l: 'Years Exp.' },
                  { n: '$2M+', l: 'Cost Saved' },
                  { n: '2,500+', l: 'Daily AI Calls' },
                  { n: '99.99%', l: 'Uptime SLA' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-[rgba(0,212,255,0.04)] border border-[rgba(0,212,255,0.12)] rounded-[10px] py-3 px-3 text-center"
                  >
                    <div className="text-[1.3rem] font-extrabold text-gradient-blue">{s.n}</div>
                    <div className="text-[0.58rem] tracking-[0.1em] uppercase text-[#a0a0a0] mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
