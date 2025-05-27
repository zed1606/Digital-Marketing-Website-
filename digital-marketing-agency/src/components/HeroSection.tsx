"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade-in animations for headline and CTA button
    gsap.fromTo(headlineRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(ctaButtonRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    // Floating particles animation
    if (particlesRef.current) {
      const numParticles = 20;
      const particlesContainer = particlesRef.current;
      particlesContainer.innerHTML = ''; // Clear previous particles if any

      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 10 + 5; // Size between 5px and 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.position = 'absolute';
        particle.style.backgroundColor = Math.random() > 0.5 ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'; // Green or white
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesContainer.appendChild(particle);

        gsap.to(particle, {
          x: (Math.random() - 0.5) * 2 * 100, // Random horizontal movement
          y: (Math.random() - 0.5) * 2 * 100, // Random vertical movement
          duration: Math.random() * 20 + 10, // Duration between 10 and 30 seconds
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2,
        });
      }
    }

  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
      {/* Container for abstract digital-themed animation */}
      <div ref={particlesRef} className="absolute inset-0 z-0 opacity-50">
        {/* Particles will be generated here by GSAP */}
      </div>
      
      <div className="relative z-10"> {/* Ensure text is above the animation placeholder */}
        <h1 ref={headlineRef} className="text-4xl sm:text-5xl md:text-7xl font-bold font-montserrat mb-8 opacity-0">
          We Don’t Just Grow Traffic—We Dominate Markets
        </h1>
        <button ref={ctaButtonRef} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-transform duration-300 ease-in-out hover:scale-105 opacity-0">
          Unlock Your Growth
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
