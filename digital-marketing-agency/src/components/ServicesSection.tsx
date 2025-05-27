import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-green-500">
      {/* Placeholder for icon/mini-animation */}
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
  const services: ServiceCardProps[] = [
    {
      title: 'Search Engine Optimization',
      description: 'Boost your visibility and rank higher in search engine results with our expert SEO strategies.',
    },
    {
      title: 'Pay-Per-Click Advertising',
      description: 'Drive targeted traffic and maximize ROI with our data-driven PPC campaigns.',
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand loyalty through compelling social media strategies.',
    },
    {
      title: 'Content Marketing',
      description: 'Attract, educate, and convert your audience with high-quality, valuable content.',
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
