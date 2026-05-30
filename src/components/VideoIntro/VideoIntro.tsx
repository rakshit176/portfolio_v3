'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import styles from './VideoIntro.module.css';

/* Lazy-load Three.js layer — no SSR */
const CinematicLayer = dynamic(
  () => import('./CinematicLayer'),
  { ssr: false }
);

export default function VideoIntro() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasCompleted, setHasCompleted] = useState(false);

  /* Track whether the first play-through has finished so we
     only pause + auto-scroll once, never on subsequent replays */
  const firstPlayDone = useRef(false);

  /* ── GSAP staggered text reveal ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .to(firstNameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.6')
      .to(lastNameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.8')
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.6');
    });

    return () => ctx.revert();
  }, []);

  /* ── Enable audio after initial autoplay settles ──
     Browsers block audio on autoplay, so we start muted.
     As soon as the video is playing, we unmute so the user
     hears the rest of the first loop.                       */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleCanPlay = () => {
      /* Small delay so the browser doesn't reject the unmute */
      setTimeout(() => {
        if (videoRef.current && !firstPlayDone.current) {
          videoRef.current.muted = false;
          if (bgVideoRef.current) bgVideoRef.current.muted = false;
          setIsMuted(false);
        }
      }, 800);
    };

    vid.addEventListener('canplay', handleCanPlay);
    return () => vid.removeEventListener('canplay', handleCanPlay);
  }, []);

  /* ── When first loop ends → pause + auto-scroll ── */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleEnded = () => {
      /* Guard: only act on the very first completion */
      if (firstPlayDone.current) return;
      firstPlayDone.current = true;

      /* Pause both videos */
      vid.pause();
      if (bgVideoRef.current) bgVideoRef.current.pause();

      /* Mute again so there's no lingering audio */
      vid.muted = true;
      if (bgVideoRef.current) bgVideoRef.current.muted = true;

      setIsPlaying(false);
      setIsMuted(true);
      setHasCompleted(true);

      /* Auto-scroll to next section after a brief cinematic pause */
      setTimeout(() => {
        const nextSection = heroRef.current?.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }
      }, 600);
    };

    vid.addEventListener('ended', handleEnded);
    return () => vid.removeEventListener('ended', handleEnded);
  }, []);

  /* ── Sync both videos ── */
  useEffect(() => {
    const fg = videoRef.current;
    const bg = bgVideoRef.current;
    if (!fg || !bg) return;

    const sync = () => {
      if (fg && bg && Math.abs(fg.currentTime - bg.currentTime) > 0.15) {
        bg.currentTime = fg.currentTime;
      }
    };

    const interval = setInterval(sync, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ── Toggle mute ── */
  const toggleMute = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const newMuted = !vid.muted;
    vid.muted = newMuted;
    if (bgVideoRef.current) bgVideoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  }, []);

  /* ── Toggle play/pause ── */
  const togglePlay = useCallback(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      if (bgVideoRef.current) bgVideoRef.current.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      if (bgVideoRef.current) bgVideoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  /* ── Scroll to next section ── */
  const scrollToNext = useCallback(() => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-label="Cinematic hero introduction"
    >
      {/* ── Background video (blurred ambient glow) ── */}
      <video
        ref={bgVideoRef}
        className={styles.videoBackground}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* ── Foreground video ──
           NOT looped — plays once, then `ended` event fires.
           Starts muted (browser autoplay policy), then we unmute
           once it's playing.                                */}
      <video
        ref={videoRef}
        className={styles.videoForeground}
        src="/hero-video.mp4"
        autoPlay
        muted
        playsInline
      />

      {/* ── Gradient overlays ── */}
      <div className={styles.gradientBottom} />
      <div className={styles.vignette} />

      {/* ── Three.js bokeh particles ── */}
      <CinematicLayer containerRef={heroRef} />

      {/* ── Text overlay ── */}
      <div className={styles.textOverlay}>
        <span ref={taglineRef} className={styles.tagline}>
          Senior AI/ML Engineer
        </span>

        <h1 ref={firstNameRef} className={styles.firstName}>
          RAKSHITH
        </h1>
        <h1 ref={lastNameRef} className={styles.lastName}>
          KUMAR
        </h1>

        <p ref={subtitleRef} className={styles.subtitle}>
          Generative AI &middot; Multi-Agent Systems &middot; Cloud Infrastructure
        </p>
      </div>

      {/* ── Sound hint badge — only show while still on first play ── */}
      {!hasCompleted && (
        <div className={styles.soundHint} aria-hidden="true">
          Tap for sound 🔊
        </div>
      )}

      {/* ── Controls ── */}
      <div className={styles.controls}>
        <button
          className={styles.glassBtn}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          )}
        </button>

        <button
          className={styles.glassBtn}
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3z" />
              <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3z" />
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              <path d="M19 12c0 2.97-1.65 5.54-4 6.71v2.06c3.45-1.28 6-4.63 6-8.77s-2.55-7.49-6-8.77v2.06c2.35 1.17 4 3.74 4 6.71z" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        className={styles.scrollIndicator}
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} />
      </button>
    </section>
  );
}
