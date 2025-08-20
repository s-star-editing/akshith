
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import CulturalMotifs from './CulturalMotifs';

const wishes = [
  {
    id: 1,
    name: "Dadu & Dadi",
    relation: "Grandparents",
    message: "May you always be blessed with health, happiness, and all the love in the world.",
    language: "Hindi"
  },
  {
    id: 2,
    name: "Nana & Nani",
    relation: "Grandparents",
    message: "Our precious angel, may your life be filled with countless joys and blessings.",
    language: "English"
  },
  {
    id: 3,
    name: "Mama & Maami",
    relation: "Uncle & Aunt",
    message: "Wishing our little princess a life as sweet as her smile!",
    language: "English"
  }
];

const WishesPreview = () => {
  return (
    <section className="py-16 px-4 bg-soft-peach/30 relative">
      <CulturalMotifs />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-title mx-auto">Wishes & Blessings</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishes.map((wish) => (
            <div key={wish.id} className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md">
                <Heart className="h-6 w-6 text-festive-red" fill="currentColor" />
              </div>
              
              <div className="mb-4">
                <h3 className="font-serif font-bold text-lg">{wish.name}</h3>
                <p className="text-sm text-muted-foreground">{wish.relation}</p>
              </div>
              
              <p className="italic">"{wish.message}"</p>
              
              <div className="mt-4 text-xs text-right text-muted-foreground">
                {wish.language}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Send Your Wishes</h3>
          <p className="max-w-lg mx-auto mb-6">
            Join family and friends in sending your blessings and wishes for our little one's first birthday!
          </p>
          <Link to="/wishes">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Add Your Blessing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WishesPreview;
