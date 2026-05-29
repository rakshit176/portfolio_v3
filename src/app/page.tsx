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
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e0e0e0] overflow-x-hidden">
      {/* Background gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 5%, rgba(0, 212, 255, 0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 75%, rgba(255, 149, 0, 0.06) 0%, transparent 55%)',
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
