import { ToyBrick, Music, Pizza, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import CulturalMotifs from './CulturalMotifs';

const BabyInfoPreview = () => {
  return (
    <section className="py-16 px-4 bg-soft-green/20 relative">
      <CulturalMotifs />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-title mx-auto">Meet Our Little One</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square relative indian-border">
            <img 
              src="/placeholder.svg" 
              alt="Baby portrait" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
              <span className="flex items-center text-sm">
                <Star size={14} className="text-gold mr-1" fill="currentColor" />
                <span className="font-medium">Kanni Bhai</span>
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2">Akshith</h3>
            <p className="text-muted-foreground mb-6">
              <span className="italic">"Happiness"</span> - The joy that completed our family
            </p>
            
            <p className="mb-6">
              Our little Kanni has been filling our lives with sunshine and laughter since the day he arrived.
              His curious eyes and infectious giggles have transformed our world in the most beautiful way.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <ToyBrick className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-medium">Favorite Toy</h4>
                </div>
                <p className="text-sm">Soft elephant plushie</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Music className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-medium">Favorite Song</h4>
                </div>
                <p className="text-sm">Potha raju Songs</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Pizza className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-medium">Favorite Food</h4>
                </div>
                <p className="text-sm">Guava</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-5 h-5 text-primary mr-2" />
                  <h4 className="font-medium">Special Talent</h4>
                </div>
                <p className="text-sm">Adorable peek-a-boo</p>
              </div>
            </div>
            
            <div className="mt-6 text-center md:text-left">
              <Link to="/baby-corner">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Know More About Kanni
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabyInfoPreview;
