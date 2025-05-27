"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CTASection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const elementsToAnimate = [
      { ref: headingRef, delay: 0 },
      { ref: paragraphRef, delay: 0.2 },
      { ref: buttonRef, delay: 0.4 }
    ];

    elementsToAnimate.forEach(item => {
      if (item.ref.current) {
        gsap.fromTo(item.ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: item.ref.current,
              start: "top 85%", // Adjust as needed
              toggleActions: "play none none none",
            },
            delay: item.delay
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-900 text-white py-16 px-4 sm:px-8"> {/* Contrasting dark background */}
      <div className="container mx-auto text-center">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold font-montserrat mb-6 opacity-0">
          Stop Dreaming, Start Dominating.
        </h2>
        <p ref={paragraphRef} className="text-lg md:text-xl font-poppins mb-10 max-w-2xl mx-auto text-gray-300 opacity-0">
          Your competitors are strategizing. It&apos;s time to outmaneuver them. Let&apos;s build your market leadership, together.
        </p>
        <button 
          ref={buttonRef}
          className="bg-red-600 hover:bg-red-700 text-white font-bold font-montserrat py-4 px-10 rounded-lg text-xl 
                     transition-all duration-300 ease-in-out transform hover:scale-105 
                     animate-subtle-pulse opacity-0" // Using the custom CSS pulse animation
        >
          Schedule Your Strategy Call
        </button>
      </div>
    </section>
  );
};

export default CTASection;
