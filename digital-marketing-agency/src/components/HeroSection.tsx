import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center text-center p-8">
      {/* Placeholder for abstract digital-themed animation */}
      <div className="absolute inset-0 z-0">
        {/* This div will later house the GSAP animation. 
            For now, it's a simple placeholder. 
            Ensure it doesn't interfere with text content. */}
      </div>
      
      <div className="relative z-10"> {/* Ensure text is above the animation placeholder */}
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-8">
          Elevate Your Brand with Data-Driven Marketing
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-transform duration-300 ease-in-out hover:scale-105">
          Get a Free Audit
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
