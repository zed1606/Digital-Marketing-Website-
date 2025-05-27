import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-8"> {/* Contrasting dark background */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
          Ready to Dominate Your Market?
        </h2>
        <p className="text-lg md:text-xl font-poppins mb-10 max-w-2xl mx-auto text-gray-300">
          Let us help you achieve your business goals with our cutting-edge digital marketing strategies.
          Contact us today for a free consultation and let's start building your success story.
        </p>
        <button 
          className="bg-red-600 hover:bg-red-700 text-white font-bold font-montserrat py-4 px-10 rounded-lg text-xl 
                     transition-all duration-300 ease-in-out transform hover:scale-105 
                     animate-subtle-pulse" // Using the custom CSS pulse animation
        >
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default CTASection;
