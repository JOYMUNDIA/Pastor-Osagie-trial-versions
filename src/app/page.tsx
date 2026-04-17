import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MinistryCards from '@/components/home/MinistryCards';
import MusicSection from '@/components/home/MusicSection';
import YouthSection from '@/components/home/YouthSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MinistryCards />
        <MusicSection />
        <YouthSection />
      </main>
      <Footer />
    </>
  );
}
