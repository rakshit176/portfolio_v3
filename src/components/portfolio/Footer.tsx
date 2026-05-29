'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }) + ' IST'
      );
    };
    update();
    const interval = setInterval(update, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t border-white/[0.08] py-6 px-6 md:px-12 max-w-[1160px] mx-auto flex justify-between items-center text-[#a0a0a0] text-[0.62rem] tracking-[0.08em] flex-wrap gap-2">
      <div>© 2026 Rakshith Kumar K.N — All systems nominal</div>
      <div>{time}</div>
    </footer>
  );
}
