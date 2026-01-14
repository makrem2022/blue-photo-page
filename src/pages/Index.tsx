import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AgroWefeSection } from '@/components/AgroWefeSection';
import { ImpactsSection } from '@/components/ImpactsSection';
import { ApplicationsSection } from '@/components/ApplicationsSection';
import { FounderSection } from '@/components/FounderSection';
import { AboutSection } from '@/components/AboutSection';
import { BlogSection } from '@/components/BlogSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AgroWefeSection />
        <ImpactsSection />
        <ApplicationsSection />
        <FounderSection />
        <AboutSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
