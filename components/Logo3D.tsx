"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Logo3D({ size = 34 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 20);
    camera.position.z = 3.5;

    // Lightning bolt shape
    const shape = new THREE.Shape();
    shape.moveTo(0.28, 0.85);
    shape.lineTo(-0.22, 0.08);
    shape.lineTo(0.06, 0.08);
    shape.lineTo(-0.28, -0.85);
    shape.lineTo(0.22, -0.08);
    shape.lineTo(-0.06, -0.08);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 4,
    });
    geo.center();

    // Gradient via shader: black at bottom → lime green at top
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uLightDir: { value: new THREE.Vector3(1.5, 2.0, 2.5).normalize() },
      },
      vertexShader: `
        varying float vY;
        varying vec3 vNormal;
        void main() {
          vY = position.y;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uLightDir;
        varying float vY;
        varying vec3 vNormal;
        void main() {
          float t = clamp((vY + 0.9) / 1.8, 0.0, 1.0);
          vec3 dark  = vec3(0.04, 0.04, 0.04);
          vec3 lime  = vec3(0.773, 0.945, 0.208);
          vec3 col   = mix(dark, lime, t * t);
          float diff = max(dot(vNormal, uLightDir), 0.0);
          col = col * (0.45 + 0.65 * diff);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    let raf: number;
    let frame = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      frame++;
      mesh.rotation.y = Math.sin(frame * 0.018) * 0.45;
      mesh.rotation.x = Math.sin(frame * 0.012) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size, display: "block", cursor: "default" }}
    />
  );
}
