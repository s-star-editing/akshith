
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import BirthDetails from '@/components/BirthDetails';
import TimelineSection from '@/components/TimelineSection';
import GalleryPreview from '@/components/GalleryPreview';
import BabyInfoPreview from '@/components/BabyInfoPreview';
import WishesPreview from '@/components/WishesPreview';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Akshith's First Birthday - A Digital Time Capsule";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomeHero />
        <BirthDetails />
        <TimelineSection />
        <GalleryPreview />
        <BabyInfoPreview />
        <WishesPreview />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default Index;
