
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cake, Gift, Image, Video } from 'lucide-react';
import CulturalMotifs from './CulturalMotifs';
import BirthTimer from './BirthTimer';

const HomeHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-soft-yellow via-soft-peach to-soft-yellow py-10 px-4 flex items-center justify-center overflow-hidden">
      <CulturalMotifs />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">
              AKSHITH
            </h1>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-8">
              Turns One!
            </h2>
            
            <div className="w-24 h-1 bg-primary mx-auto mt-4 mb-8"></div>

            <div className="mb-8">
              <BirthTimer />
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto">
              Join us in celebrating the first year of our precious little one with love, laughter, and memories.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link to="/timeline">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  View Timeline <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Explore Gallery <Image size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="indian-border bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
                <Cake size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-medium">Birthday Celebration</h3>
              </div>
              <div className="indian-border bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
                <Gift size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-medium">Special Moments</h3>
              </div>
              <div className="indian-border bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
                <Video size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-medium">Family Greetings</h3>
              </div>
              <div className="indian-border bg-white/80 backdrop-blur-sm rounded-xl p-5 shadow-sm">
                <Image size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-medium">Photo Memories</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
