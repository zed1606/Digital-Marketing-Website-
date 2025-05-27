import HeroSection from '@/components/HeroSection'; // Import HeroSection
import ServicesSection from '@/components/ServicesSection'; // Import ServicesSection
import PortfolioSection from '@/components/PortfolioSection'; // Import PortfolioSection
import TestimonialsSection from '@/components/TestimonialsSection'; // Import TestimonialsSection
import CTASection from '@/components/CTASection'; // Import CTASection
import ContactForm from '@/components/ContactForm'; // Import ContactForm

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection /> 
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm /> {/* Add ContactForm section */}
      {/* You can add other page content here if needed */}
    </>
  );
}
