import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  beforeResult: string;
  afterResult: string;
}

const PortfolioItemCard: React.FC<PortfolioItemProps> = ({ title, description, imageUrl, beforeResult, afterResult }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-green-500">
      {/* Placeholder for image/visual */}
      <div className="w-full h-48 bg-gray-700 rounded-md mb-4 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="object-cover w-full h-full rounded-md" />
        ) : (
          <span className="text-gray-500 text-xl">Image Placeholder</span>
        )}
      </div>
      <h3 className="text-2xl font-bold font-montserrat mb-2 text-white">{title}</h3>
      <p className="text-gray-300 font-poppins mb-4">{description}</p>
      <div className="bg-gray-700 p-3 rounded-md">
        <h4 className="text-md font-semibold font-poppins text-green-400 mb-1">Results:</h4>
        <p className="text-sm text-gray-300 font-poppins"><strong>Before:</strong> {beforeResult}</p>
        <p className="text-sm text-gray-300 font-poppins"><strong>After:</strong> {afterResult}</p>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: 'E-commerce SEO Overhaul',
      description: 'Revamped an online store\'s SEO strategy, leading to a significant increase in organic traffic and sales.',
      // imageUrl: '/images/portfolio-ecommerce.jpg', // Example image path
      beforeResult: '500 daily organic visitors',
      afterResult: '2,500 daily organic visitors',
    },
    {
      title: 'Startup Social Media Launch',
      description: 'Launched a new startup\'s social media presence, achieving rapid brand awareness and community engagement.',
      // imageUrl: '/images/portfolio-social.jpg',
      beforeResult: '0 social media followers',
      afterResult: '10,000+ followers in 3 months',
    },
    {
      title: 'Local Business PPC Campaign',
      description: 'Managed a PPC campaign for a local service business, dramatically increasing qualified leads and conversion rates.',
      // imageUrl: '/images/portfolio-ppc.jpg',
      beforeResult: '5 leads per week',
      afterResult: '25 leads per week',
    },
     {
      title: 'Tech Blog Content Strategy',
      description: 'Developed and executed a content strategy for a tech blog, establishing it as an authority in its niche.',
      // imageUrl: '/images/portfolio-content.jpg',
      beforeResult: 'Low domain authority, minimal traffic',
      afterResult: 'High domain authority, 50k monthly readers',
    }
  ];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12">
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Using 2 columns for larger items */}
          {portfolioItems.map((item) => (
            <PortfolioItemCard 
              key={item.title} 
              title={item.title} 
              description={item.description}
              // imageUrl={item.imageUrl}
              beforeResult={item.beforeResult}
              afterResult={item.afterResult}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
