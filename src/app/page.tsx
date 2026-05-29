'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import Ticker from '@/components/portfolio/Ticker';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import AIChat from '@/components/portfolio/AIChat';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const ParticleBackground = dynamic(() => import('@/components/portfolio/ParticleBackground'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0705] text-[#FFF8F0] overflow-x-hidden">
      {/* Background gradient overlay — warm amber glows */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 5%, rgba(217, 119, 6, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 75%, rgba(146, 64, 14, 0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)',
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Three.js particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="flex-1 relative z-10">
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <AIChat />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
