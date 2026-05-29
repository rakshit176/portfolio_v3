'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    cam.position.z = 80;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const N = 140;
    const pos = new Float32Array(N * 3);
    const vel: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 160;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60;
      vel.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    const ptG = new THREE.BufferGeometry();
    ptG.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(
      new THREE.Points(
        ptG,
        new THREE.PointsMaterial({
          size: 0.6,
          color: 0x7C3AED, // Purple
          transparent: true,
          opacity: 0.4,
        })
      )
    );

    const linePositions = new Float32Array(N * N * 6);
    const lG = new THREE.BufferGeometry();
    lG.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lM = new THREE.LineSegments(
      lG,
      new THREE.LineBasicMaterial({ color: 0x7C3AED, transparent: true, opacity: 0.1 })
    );
    scene.add(lM);

    let mx = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mx.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mx.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let t = 0;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      t += 0.003;

      for (let i = 0; i < N; i++) {
        pos[i * 3] += vel[i].x;
        pos[i * 3 + 1] += vel[i].y;
        pos[i * 3 + 2] += vel[i].z;
        if (Math.abs(pos[i * 3]) > 80) vel[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 80) vel[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 30) vel[i].z *= -1;
      }
      ptG.attributes.position.needsUpdate = true;

      let li = 0;
      for (let a = 0; a < N; a++) {
        for (let b = a + 1; b < N; b++) {
          const dx = pos[a * 3] - pos[b * 3];
          const dy = pos[a * 3 + 1] - pos[b * 3 + 1];
          const dz = pos[a * 3 + 2] - pos[b * 3 + 2];
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 22 && li < linePositions.length - 6) {
            linePositions[li++] = pos[a * 3];
            linePositions[li++] = pos[a * 3 + 1];
            linePositions[li++] = pos[a * 3 + 2];
            linePositions[li++] = pos[b * 3];
            linePositions[li++] = pos[b * 3 + 1];
            linePositions[li++] = pos[b * 3 + 2];
          }
        }
      }
      for (let i = li; i < linePositions.length; i++) linePositions[i] = 0;
      lG.attributes.position.needsUpdate = true;
      lG.setDrawRange(0, li / 3);

      scene.rotation.y = mx.x * 0.04 + t * 0.05;
      scene.rotation.x = mx.y * 0.04;
      renderer.render(scene, cam);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
