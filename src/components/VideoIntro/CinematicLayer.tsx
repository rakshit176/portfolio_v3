'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* ── Warm bokeh palette extracted from video hero ── */
const BOKEH_COLORS = [
  new THREE.Color('#FF6B2B'), // warm orange
  new THREE.Color('#FF8C42'), // soft orange
  new THREE.Color('#FFF5E6'), // warm white
  new THREE.Color('#FFD700'), // subtle gold
];

interface CinematicLayerProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function CinematicLayer({ containerRef }: CinematicLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* All mutable refs — never trigger re-renders */
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const dataRef = useRef<
    { phase: number; speed: number; ampX: number; ampY: number }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    /* ── Scene ── */
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    camera.position.z = 80;
    cameraRef.current = camera;

    /* ── Particle Count ── */
    const PARTICLE_COUNT = 140;

    /* ── Build radial-gradient bokeh sprite texture ── */
    const spriteSize = 64;
    const spriteCanvas = document.createElement('canvas');
    spriteCanvas.width = spriteSize;
    spriteCanvas.height = spriteSize;
    const ctx = spriteCanvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(
      spriteSize / 2, spriteSize / 2, 0,
      spriteSize / 2, spriteSize / 2, spriteSize / 2
    );
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    grad.addColorStop(0.5, 'rgba(255,255,255,0.3)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, spriteSize, spriteSize);

    const spriteTexture = new THREE.CanvasTexture(spriteCanvas);

    /* ── Geometry & Attributes ── */
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    const perParticle: typeof dataRef.current extends React.MutableRefObject<infer T> ? T : never = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      /* Distribute across a wide z-range for depth */
      positions[i * 3]     = (Math.random() - 0.5) * 160; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 10; // z: -50 to +50ish

      /* Pick a warm bokeh color with low-to-mid opacity feel */
      const color = BOKEH_COLORS[Math.floor(Math.random() * BOKEH_COLORS.length)].clone();
      /* Subtle gold at low opacity — dim it down */
      if (color.getHex() === 0xFFD700) {
        color.multiplyScalar(0.5);
      }
      colors[i * 3]     = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      /* Size variation for depth illusion */
      sizes[i] = Math.random() * 3.5 + 1.0;

      perParticle.push({
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.3,
        ampX: 2 + Math.random() * 6,
        ampY: 1.5 + Math.random() * 5,
      });
    }
    dataRef.current = perParticle;

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    /* ── Material ── */
    const material = new THREE.PointsMaterial({
      map: spriteTexture,
      size: 3,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    /* ── Points ── */
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    particlesRef.current = points;

    /* ── Resize handler ── */
    const handleResize = () => {
      const container = containerRef?.current;
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    /* ── Mouse handler ── */
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    /* ── Animation loop ── */
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const posAttr = geometry.getAttribute('position');
      const posArr = posAttr.array as Float32Array;

      /* Sine-wave float for each particle */
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const d = dataRef.current[i];
        const baseX = positions[i * 3];
        const baseY = positions[i * 3 + 1];

        posArr[i * 3]     = baseX + Math.sin(elapsed * d.speed + d.phase) * d.ampX;
        posArr[i * 3 + 1] = baseY + Math.cos(elapsed * d.speed * 0.7 + d.phase) * d.ampY;
      }
      posAttr.needsUpdate = true;

      /* Mouse parallax — smooth lerp, max ±15px */
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      camera.position.x = mouse.x * 15;
      camera.position.y = -mouse.y * 10;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      geometry.dispose();
      material.dispose();
      spriteTexture.dispose();
      renderer.dispose();

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      particlesRef.current = null;
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
}
