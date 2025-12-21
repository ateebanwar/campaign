import Navbar from '@/components/campaign/Navbar';
import HeroSection from '@/components/campaign/HeroSection';
import AboutSection from '@/components/campaign/AboutSection';
import PastWorkSection from '@/components/campaign/PastWorkSection';
import OngoingWorkSection from '@/components/campaign/OngoingWorkSection';
import IssuesSection from '@/components/campaign/IssuesSection';
import VisionSection from '@/components/campaign/VisionSection';
import TestimonialsSection from '@/components/campaign/TestimonialsSection';
import EventsSection from '@/components/campaign/EventsSection';
import CTASection from '@/components/campaign/CTASection';
import ContactSection from '@/components/campaign/ContactSection';
import Footer from '@/components/campaign/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PastWorkSection />
      <OngoingWorkSection />
      <IssuesSection />
      <VisionSection />
      <TestimonialsSection />
      <EventsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;