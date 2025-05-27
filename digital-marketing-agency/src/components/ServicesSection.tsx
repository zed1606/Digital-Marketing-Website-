"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// ScrollTrigger is already registered in GSAPInitializer.tsx

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string; // Add className to allow initial styling for animation
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, className }) => {
  // The ref will be attached in the map function below
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-green-500 ${className}`}>
      {/* Placeholder for icon/mini-animation. 
          If this were an image, it would be a good candidate for next/image:
          e.g., <Image src="/icons/service-icon.svg" alt={title} width={48} height={48} /> 
          Ensure the src path is correct (e.g., within /public or imported).
      */}
      <div className="w-12 h-12 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
        {/* Replace with actual icon or animation later */}
        <span className="text-xl text-green-500">?</span> 
      </div>
      <h3 className="text-2xl font-bold font-montserrat mb-2 text-white">{title}</h3>
      <p className="text-gray-300 font-poppins">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const services: ServiceCardProps[] = [
    {
      title: "Search Engine Optimization",
      description: "Dominate search rankings and drive organic traffic that converts. Our SEO strategies are data-backed and results-obsessed.",
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "Instant impact, measurable ROI. We craft targeted PPC campaigns that put your brand front and center, fast.",
    },
    {
      title: "Social Media Marketing",
      description: "Ignite your brand across social platforms. We build engaged communities and transform followers into fanatics.",
    },
    {
      title: "Content Marketing",
      description: "Fuel your growth with content that captivates and converts. We tell your story, your audience listens.",
    },
  ];

  useEffect(() => {
    const headingElement = headingRef.current;
    const cards = cardsContainerRef.current?.children;

    if (headingElement) {
      gsap.fromTo(headingElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: headingElement,
            start: "top 80%", // Trigger when 80% of the element is in view
            toggleActions: "play none none none", // Play animation once
          }
        }
      );
    }

    if (cards) {
      Array.from(cards).forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: index * 0.15 // Stagger animation for cards
          }
        );
      });
    }

    // Cleanup GSAP ScrollTriggers on component unmount
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        // Check if the trigger is associated with an element in this component
        // This is a simplified check; more specific checks might be needed if triggers are very dynamic
        if (trigger.trigger === headingElement || (cards && Array.from(cards).includes(trigger.trigger as Element))) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12 opacity-0">
          Our Arsenal of Digital Dominance
        </h2>
        <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            // Add opacity-0 to ServiceCard for initial state before animation
            <ServiceCard key={service.title} title={service.title} description={service.description} className="opacity-0" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
