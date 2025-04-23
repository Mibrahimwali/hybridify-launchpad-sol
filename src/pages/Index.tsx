
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import CommunitySection from '@/components/CommunitySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Implement smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (!target) return;
      
      // Check if it's an anchor link
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listener to document
    document.addEventListener('click', handleSmoothScroll);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-hybridify-dark-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <ProjectsSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
