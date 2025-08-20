
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TimelineSection from '@/components/TimelineSection';
import AudioPlayer from '@/components/AudioPlayer';
import CulturalMotifs from '@/components/CulturalMotifs';

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Timeline - Khushi's First Birthday";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-soft-blue via-soft-blue/50 to-soft-blue/20 py-16 px-4 relative">
          <CulturalMotifs />
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Journey Together
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Explore the beautiful milestones from our little one's first year of life.
              Each moment has been a precious blessing.
            </p>
          </div>
        </section>
        
        {/* Full Timeline Section */}
        <TimelineSection showAll={true} />
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default Timeline;
