'use client';

const CONTACT_LINKS = [
  { icon: '\u2709', name: 'rakshitkumarkn@gmail.com', sub: 'Email \u00B7 Preferred', href: 'mailto:rakshitkumarkn@gmail.com' },
  { icon: 'in', name: 'linkedin.com/in/rakshith-kumar-kn', sub: 'LinkedIn', href: 'https://www.linkedin.com/in/rakshith-kumar-kn-4108b31a3/' },
  { icon: '\u2325', name: 'github.com/rakshit176', sub: 'GitHub', href: 'https://github.com/rakshit176' },
  { icon: '\u260E', name: '+91 9008796644', sub: 'Phone \u00B7 India', href: 'tel:+919008796644' },
];

const EXTRAS = [
  { label: 'Resume / CV', href: '/Rakshith_Kumar_KN_Senior_AI_ML_Engineer_Resume.pdf' },
  { label: 'IEEE Publication', href: 'https://ieeexplore.ieee.org/' },
  { label: 'GitHub Projects', href: 'https://github.com/rakshit176?tab=repositories' },
  { label: 'LinkedIn Articles', href: 'https://www.linkedin.com/in/rakshith-kumar-kn-4108b31a3/details/recent-activity/articles/' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#F5A832] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#F5A832] inline-block" />
        06 \u00B7 Contact
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3 text-[#FFF3E2]">
        Let&apos;s Build Together.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#F5A832] to-transparent mb-6" />

      {/* Download Resume — prominent button */}
      <a
        href="/Rakshith_Kumar_KN_Senior_AI_ML_Engineer_Resume.pdf"
        download
        className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#F5A832] to-[#D4891A] rounded-full text-[#0A0603] font-bold text-[0.92rem] hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200 shadow-lg shadow-[rgba(245,168,50,0.25)] mb-10"
      >
        <span className="text-lg">↓</span> Download Resume
      </a>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-8 items-start pt-10 border-t border-[rgba(245,168,50,0.1)]">
        <div>
          <p className="text-[0.85rem] text-[#C8A882] leading-[1.85]">
            Currently <strong className="text-[#FFF3E2] font-medium">open to Staff / Senior AI Engineer roles</strong> at
            FAANG, AI Labs, and high-growth startups. Excited about GenAI infrastructure, agentic systems, healthcare AI,
            and enterprise RAG.
          </p>
          <p className="text-[0.85rem] text-[#C8A882] leading-[1.85] mt-4">
            Based in <strong className="text-[#FFF3E2] font-medium">Bengaluru, India</strong>. Open to remote, hybrid, or
            relocation. Response: <strong className="text-[#FFF3E2] font-medium">under 24 hours</strong>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3.5 px-4 py-3 border border-[rgba(245,168,50,0.1)] rounded-[10px] no-underline text-[#FFF3E2] transition-all duration-200 bg-[#1A0F05]/60 hover:border-[rgba(245,168,50,0.4)] hover:bg-[rgba(245,168,50,0.06)] hover:translate-x-[3px]"
            >
              <div className="w-7 h-7 rounded-md bg-[rgba(245,168,50,0.06)] border border-[rgba(245,168,50,0.1)] flex items-center justify-center text-[0.8rem] shrink-0 text-[#F5A832]">
                {link.icon}
              </div>
              <div>
                <div className="font-semibold text-[0.78rem]">{link.name}</div>
                <div className="text-[0.63rem] text-[#C8A882]">{link.sub}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#C8A882] mb-1">More</div>
          {EXTRAS.map((item) => {
            const isLocal = item.href.startsWith('/');
            return (
            <a
              key={item.label}
              href={item.href}
              download={isLocal || undefined}
              target={isLocal ? undefined : '_blank'}
              rel={isLocal ? undefined : 'noopener noreferrer'}
              className="text-[0.8rem] text-[#C8A882] cursor-pointer hover:text-[#F5A832] transition-colors no-underline flex items-center gap-1.5"
            >
              {item.label} <span className="text-[0.6rem] opacity-50">{isLocal ? '↓' : '↗'}</span>
            </a>
            );
          })}
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-16 pt-8 border-t border-[rgba(245,168,50,0.1)] grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <div className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em] text-[#FFF3E2]">
            Let&apos;s start something<br />
            <span className="text-gradient-warm">great together.</span>
          </div>
          <button
            onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-5 px-7 py-3 bg-gradient-to-r from-[#F5A832] to-[#D4891A] rounded-full text-[#0A0603] font-semibold text-[0.82rem] hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
          >
            Get in touch &rarr;
          </button>
        </div>
        <svg width="300" height="80" viewBox="0 0 300 80" fill="none" className="opacity-50">
          <path d="M5 50 C50 10, 90 70, 140 40 C190 10, 220 65, 270 35 C280 28, 290 22, 295 26" stroke="#F5A832" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M5 62 C55 28, 95 80, 145 55 C195 28, 230 72, 275 52" stroke="#00C8DC" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M5 38 C40 55, 80 15, 130 30 C180 45, 210 10, 260 20" stroke="#3B9EF0" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
