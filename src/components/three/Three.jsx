import React, { useEffect } from 'react';
import * as THREE from 'three';
import { about } from '../../assets';

const Three = () => {
  useEffect(() =>{
    // Create THREE.js scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('circle-container').appendChild(renderer.domElement);

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Create a circle-shaped geometry
    const radius = 0.5;
    const segments = 32;
    const geometry = new THREE.CircleGeometry(radius, segments);
    const texture = new THREE.TextureLoader().load(about);
    texture.repeat.set(0.8, 0.8);

    const material = new THREE.MeshBasicMaterial({
      wireframe: false,
      map: texture,
      transparent: true,
    });

    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);

      circle.rotation.z += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up event listener and renderer on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
      };
    })

    return <div id='circle-container' />
};

export default Three;
