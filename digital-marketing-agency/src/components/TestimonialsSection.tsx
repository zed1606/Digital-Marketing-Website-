"use client"; // Required for useState and useEffect

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Testimonial {
  quote: string;
  name: string;
  company?: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Their team didn&apos;t just deliver services, they delivered a strategic partnership that redefined our market position. The growth has been phenomenal!",
    name: "Alex Chen",
    company: "CEO, NextGen Solutions",
  },
  {
    quote: "Unparalleled expertise and a relentless drive for results. Our ROI has never been better since we started working with them.",
    name: "Samantha Rivera",
    company: "Marketing Director, AlphaCorp",
  },
  {
    quote: "From zero to hero in six months. Their social media and content strategies are pure gold. We&apos;re now a recognized voice in our industry.",
    name: "Michael B. Jordan (no, not that one!)",
    company: "Founder, SparkPlug Startups",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Basic auto-scroll functionality for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // GSAP animations for section elements
  useEffect(() => {
    const headingElement = headingRef.current;
    const carouselElement = carouselRef.current;

    if (headingElement) {
      gsap.fromTo(headingElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: headingElement,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }

    if (carouselElement) {
      gsap.fromTo(carouselElement,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: carouselElement,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: 0.2 // Delay slightly after heading
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12 opacity-0">
          Clients Testify: The Proof is in the Performance
        </h2>
        <div ref={carouselRef} className="relative min-h-[16rem] sm:min-h-[12rem] overflow-hidden opacity-0 flex justify-center items-center"> {/* Adjusted height and centering for content */}
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`absolute inset-x-0 top-0 bottom-0 transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center text-center p-4 sm:p-6 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-poppins italic mb-4 max-w-2xl mx-auto">{testimonial.quote}</p> {/* max-w for readability */}
              <p className="text-md sm:text-lg font-semibold font-montserrat">{testimonial.name}</p>
              {testimonial.company && (
                <p className="text-sm sm:text-md text-gray-400 font-poppins">{testimonial.company}</p>
              )}
            </div>
          ))}
        </div>
        {/* Optional: Manual controls for carousel (can be added later) */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-green-500" : "bg-gray-600"} hover:bg-green-400 transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
