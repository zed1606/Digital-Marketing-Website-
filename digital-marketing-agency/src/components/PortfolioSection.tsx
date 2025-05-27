"use client";

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image"; // Import next/image

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  beforeResult: string;
  afterResult: string;
  className?: string; // Add className for animation
}

const PortfolioItemCard: React.FC<PortfolioItemProps> = ({ title, description, imageUrl, beforeResult, afterResult, className }) => {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out border border-transparent hover:border-green-500 ${className}`}>
      {/* Image placeholder: Replaced with next/image if imageUrl is provided */}
      <div className="relative w-full h-48 bg-gray-700 rounded-md mb-4 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          // When actual images are used, ensure "imageUrl" is a path Next.js can resolve (e.g., in /public or a remote URL configured in next.config.js)
          // Provide width and height props for optimal performance, or use fill and ensure parent has relative positioning and dimensions.
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            style={{ objectFit: "cover" }}
            className="rounded-md"
            // For local images, import them: import exampleImage from "/public/images/example.jpg"; and use src={exampleImage}
            // For remote images, configure domains in next.config.js:
            // module.exports = { images: { remotePatterns: [{ protocol: "https", hostname: "example.com" }] } }
          />
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
      title: "E-commerce Surge for AlphaGoods",
      description: "Transformed AlphaGoods&apos; online store with a full-funnel SEO and content strategy, skyrocketing their market share.",
      // imageUrl: "/images/portfolio-ecommerce.jpg", 
      beforeResult: "Stagnant Sales, Low Visibility",
      afterResult: "+320% Organic Revenue, Top 3 Rankings for 50+ Keywords",
    },
    {
      title: "Lead Gen Revolution for BetaServices",
      description: "Engineered a high-velocity lead generation machine for BetaServices using targeted PPC and conversion-optimized landing pages.",
      // imageUrl: "/images/portfolio-social.jpg",
      beforeResult: "High CPA, Inconsistent Lead Flow",
      afterResult: "-60% Cost Per Acquisition, +400% Qualified Leads Monthly",
    },
    {
      title: "Brand Dominance for GammaTech",
      description: "Launched GammaTech into the spotlight with an explosive social media and influencer marketing campaign.",
      // imageUrl: "/images/portfolio-ppc.jpg",
      beforeResult: "Minimal Brand Awareness",
      afterResult: "+1M Social Reach, 25% Engagement Rate Increase",
    },
     {
      title: "Content Authority for DeltaBlog",
      description: "Established DeltaBlog as the go-to resource in their niche through pillar content and strategic distribution.",
      // imageUrl: "/images/portfolio-content.jpg",
      beforeResult: "Scattered Content, Low Engagement",
      afterResult: 'x5 Search Visibility, #1 for "Industry Insights"',
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headingElement = headingRef.current;
    const items = itemsContainerRef.current?.children;

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

    if (items) {
      Array.from(items).forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: index * 0.2 // Stagger animation
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-12 opacity-0">
          Proven Results, Real Impact
        </h2>
        <div ref={itemsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Using 2 columns for larger items */}
          {portfolioItems.map((item) => (
            <PortfolioItemCard 
              key={item.title} 
              title={item.title} 
              description={item.description}
              // imageUrl={item.imageUrl}
              beforeResult={item.beforeResult}
              afterResult={item.afterResult}
              className="opacity-0" // Initial state for animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
