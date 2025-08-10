import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create enhanced floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 25;
      posArray[i + 1] = (Math.random() - 0.5) * 25;
      posArray[i + 2] = (Math.random() - 0.5) * 25;
      
      // Create color gradient from green to emerald
      const color = new THREE.Color();
      color.setHSL(0.3 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3);
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create animated wave effect
    const waveGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.05,
      wireframe: true,
      side: THREE.DoubleSide
    });

    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2;
    waveMesh.position.y = -5;
    scene.add(waveMesh);

    // Create floating geometries with enhanced materials
    const geometries = [];
    const materials = [];
    const meshes = [];

    // Add different geometric shapes with better materials
    const shapes = [
      { geo: new THREE.TetrahedronGeometry(0.4), color: 0x10b981 },
      { geo: new THREE.OctahedronGeometry(0.4), color: 0x059669 },
      { geo: new THREE.IcosahedronGeometry(0.4), color: 0x047857 },
      { geo: new THREE.DodecahedronGeometry(0.4), color: 0x065f46 }
    ];

    shapes.forEach((shape, index) => {
      const material = new THREE.MeshBasicMaterial({
        color: shape.color,
        transparent: true,
        opacity: 0.15,
        wireframe: true
      });

      const mesh = new THREE.Mesh(shape.geo, material);
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      geometries.push(shape.geo);
      materials.push(material);
      meshes.push(mesh);
      scene.add(mesh);
    });

    // Create floating rings with glow effect
    const ringGeometry = new THREE.RingGeometry(0.6, 0.8, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
      wireframe: true
    });

    for (let i = 0; i < 12; i++) {
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      ring.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(ring);
      meshes.push(ring);
    }

    // Create floating text-like elements (simulated with small cubes)
    const textCubes = [];
    for (let i = 0; i < 20; i++) {
      const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0x34d399,
        transparent: true,
        opacity: 0.3
      });
      
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      
      textCubes.push(cube);
      scene.add(cube);
    }

    // Create connection lines between nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.1
    });

    const lines = [];
    for (let i = 0; i < 15; i++) {
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      const endPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([startPoint, endPoint]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      lines.push(line);
      scene.add(line);
    }

    // Mouse movement effect with enhanced interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotationX = mouseY * 0.5;
      targetRotationY = mouseX * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop with enhanced effects
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Rotate particles with wave effect
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.001;
      
      // Animate particle positions
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i * 0.1) * 0.002;
        positions[i] += Math.cos(time + i * 0.1) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Animate wave mesh
      const wavePositions = waveGeometry.attributes.position.array;
      for (let i = 0; i < wavePositions.length; i += 3) {
        wavePositions[i + 1] = Math.sin(time + i * 0.1) * 0.5;
      }
      waveGeometry.attributes.position.needsUpdate = true;

      // Animate meshes with enhanced rotation and floating
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.003 + index * 0.0005;
        mesh.rotation.y += 0.002 + index * 0.0008;
        mesh.rotation.z += 0.004 + index * 0.0003;

        // Enhanced floating animation
        mesh.position.y += Math.sin(time * 0.5 + index) * 0.003;
        mesh.position.x += Math.cos(time * 0.3 + index) * 0.002;
        mesh.position.z += Math.sin(time * 0.4 + index) * 0.001;
      });

      // Animate text cubes
      textCubes.forEach((cube, index) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.008;
        cube.position.y += Math.sin(time + index) * 0.004;
        cube.material.opacity = 0.2 + Math.sin(time * 2 + index) * 0.1;
      });

      // Animate connection lines
      lines.forEach((line, index) => {
        line.material.opacity = 0.05 + Math.sin(time + index) * 0.05;
      });

      // Smooth camera movement based on mouse
      camera.rotation.x += (targetRotationX - camera.rotation.x) * 0.02;
      camera.rotation.y += (targetRotationY - camera.rotation.y) * 0.02;

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of Three.js resources
      geometries.forEach(geometry => geometry.dispose());
      materials.forEach(material => material.dispose());
      waveGeometry.dispose();
      waveMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      textCubes.forEach(cube => {
        cube.geometry.dispose();
        cube.material.dispose();
      });
      lines.forEach(line => {
        line.geometry.dispose();
        line.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeBackground;
