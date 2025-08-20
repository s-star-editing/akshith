
import { Calendar, Clock, Moon, Star } from 'lucide-react';
import CulturalMotifs from './CulturalMotifs';

const BirthDetails = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title mx-auto">Birth Details</h2>
        
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <CulturalMotifs />
          
          <div className="relative indian-border bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="absolute -top-8 -left-2 bg-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <Calendar className="text-white w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-4 mt-5">Date & Time</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium w-28">Gregorian:</span>
                <span>June 15, 2024 (Saturday)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-28">Hindu Calendar:</span>
                <span>Jyeshtha Shukla Paksha, Samvat 2081</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-28">Time:</span>
                <span>7:23 AM (Morning)</span>
              </li>
            </ul>
          </div>
          
          <div className="relative indian-border bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="absolute -top-8 -left-2 bg-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <Star className="text-white w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-4 mt-5">Astrological Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium w-28">Nakshatra:</span>
                <span>Pushya</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-28">Rashi:</span>
                <span>Karka (Cancer)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-28">Moon Phase:</span>
                <span>Waxing Gibbous (90%)</span>
              </li>
            </ul>
          </div>
          
          <div className="relative indian-border bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md md:col-span-2">
            <div className="absolute -top-8 -left-2 bg-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <Moon className="text-white w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-4 mt-5">Significance</h3>
            <p className="mb-3">
              Born under the nurturing Pushya nakshatra, our little one is blessed with qualities of warmth, compassion, and 
              a caring heart. This nakshatra is known as "The Nourisher" and signifies growth and prosperity.
            </p>
            <p>
              The waxing gibbous moon phase represents growth and optimism, suggesting a life full of continuous learning and
              development. The Cancer rashi bestows emotional intelligence and strong intuition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthDetails;
