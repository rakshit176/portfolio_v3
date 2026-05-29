'use client';

const CONTACT_LINKS = [
  { icon: '✉', name: 'rakshitkumarkn@gmail.com', sub: 'Email · Preferred', href: 'mailto:rakshitkumarkn@gmail.com' },
  { icon: 'in', name: 'linkedin.com/in/rakshith-kumar-kn', sub: 'LinkedIn', href: 'https://www.linkedin.com/in/rakshith-kumar-kn-4108b31a3/' },
  { icon: '⌥', name: 'github.com/rakshith-kumar-kn', sub: 'GitHub', href: 'https://github.com/rakshith176' },
  { icon: '☎', name: '+91 9008796644', sub: 'Phone · India', href: 'tel:+919008796644' },
];

const EXTRAS = ['Resume / CV', 'IEEE Publication', 'GitHub Projects', 'LinkedIn Articles'];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 max-w-[1160px] mx-auto px-6 md:px-12">
      <div className="text-[0.62rem] tracking-[0.3em] uppercase text-[#D97706] mb-2 flex items-center gap-2">
        <span className="w-[18px] h-[1px] bg-[#D97706] inline-block" />
        06 · Contact
      </div>
      <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-3">
        Let&apos;s Build Together.
      </h2>
      <div className="w-[1px] h-9 bg-gradient-to-b from-[#D97706] to-transparent mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-8 items-start pt-10 border-t border-[rgba(217,119,6,0.1)]">
        <div>
          <p className="text-[0.85rem] text-[#9C7E5A] leading-[1.85]">
            Currently <strong className="text-[#FEF3C7] font-medium">open to Staff / Senior AI Engineer roles</strong> at
            FAANG, AI Labs, and high-growth startups. Excited about GenAI infrastructure, agentic systems, healthcare AI,
            and enterprise RAG.
          </p>
          <p className="text-[0.85rem] text-[#9C7E5A] leading-[1.85] mt-4">
            Based in <strong className="text-[#FEF3C7] font-medium">Bengaluru, India</strong>. Open to remote, hybrid, or
            relocation. Response: <strong className="text-[#FEF3C7] font-medium">under 24 hours</strong>.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3.5 px-4 py-3 border border-[rgba(217,119,6,0.1)] rounded-[10px] no-underline text-[#FFF8F0] transition-all duration-200 bg-[#120C08]/60 hover:border-[rgba(217,119,6,0.4)] hover:bg-[rgba(217,119,6,0.06)] hover:translate-x-[3px]"
            >
              <div className="w-7 h-7 rounded-md bg-[rgba(217,119,6,0.06)] border border-[rgba(217,119,6,0.1)] flex items-center justify-center text-[0.8rem] shrink-0 text-[#D97706]">
                {link.icon}
              </div>
              <div>
                <div className="font-semibold text-[0.78rem]">{link.name}</div>
                <div className="text-[0.63rem] text-[#9C7E5A]">{link.sub}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#9C7E5A] mb-1">More</div>
          {EXTRAS.map((item) => (
            <div
              key={item}
              className="text-[0.8rem] text-[#9C7E5A] cursor-pointer hover:text-[#FEF3C7] transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mt-16 pt-8 border-t border-[rgba(217,119,6,0.1)] grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <div className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold tracking-[-0.02em]">
            Let&apos;s start something<br />
            <span className="text-gradient-warm">great together.</span>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-5 px-7 py-3 bg-gradient-to-r from-[#D97706] to-[#92400E] rounded-full text-[#FFF8F0] font-semibold text-[0.82rem] hover:-translate-y-0.5 hover:opacity-90 transition-all duration-200"
          >
            Get in touch →
          </button>
        </div>
        <svg width="300" height="80" viewBox="0 0 300 80" fill="none" className="opacity-50">
          <path d="M5 50 C50 10, 90 70, 140 40 C190 10, 220 65, 270 35 C280 28, 290 22, 295 26" stroke="#D97706" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M5 62 C55 28, 95 80, 145 55 C195 28, 230 72, 275 52" stroke="#92400E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M5 38 C40 55, 80 15, 130 30 C180 45, 210 10, 260 20" stroke="#F59E0B" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
