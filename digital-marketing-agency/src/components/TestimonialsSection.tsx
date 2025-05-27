"use client"; // Required for useState and useEffect

import React, { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  company?: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with this agency was a game-changer for our business. Our online presence has never been stronger!",
    name: "Jane Doe",
    company: "Tech Solutions Inc.",
  },
  {
    quote: "The team's expertise in SEO and content marketing helped us double our organic traffic in just six months. Highly recommended!",
    name: "John Smith",
    company: "Growth Co.",
  },
  {
    quote: "Their PPC campaigns are incredibly effective. We've seen a significant increase in leads and conversions.",
    name: "Alice Brown",
    company: "Innovate Ltd.",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Basic auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="relative h-64 md:h-48 overflow-hidden"> {/* Container for testimonials */}
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center text-center p-6
                          ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="text-xl md:text-2xl font-poppins italic mb-4">"{testimonial.quote}"</p>
              <p className="text-lg font-semibold font-montserrat">{testimonial.name}</p>
              {testimonial.company && (
                <p className="text-md text-gray-400 font-poppins">{testimonial.company}</p>
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
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-600'} hover:bg-green-400 transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
