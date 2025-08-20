
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import CulturalMotifs from '@/components/CulturalMotifs';
import { ToyBrick, Sparkles, Star, Music, Pizza, Laugh, Baby, Heart } from 'lucide-react';

const BabyCorner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Baby Corner - Akshith's First Birthday";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-soft-green via-soft-green/50 to-soft-green/20 py-16 px-4 relative">
          <CulturalMotifs />
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              All About Akshith
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Get to know our little sunshine - her favorites, personality, and all the joy he brings.
            </p>
          </div>
        </section>
        
        {/* Baby Profile Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl font-bold mb-3">Akshith</h2>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="bg-soft-peach text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Baby size={16} className="mr-1" /> Born: June 15, 2024
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">Name Meaning</h3>
                <p className="mb-6">
                  Kanni means "happiness" or "joy" in Hindi. Just as his name suggests,
                  he brings immense happiness to everyone around her with his bright smile and cheerful nature.
                </p>
                
                <h3 className="font-semibold text-lg mb-2">Personality</h3>
                <p className="mb-6">
                  Curious, sweet, and full of smiles, Akshith loves to explore everything around him.
                  he's an observer who takes in the world with wonder and excitement.
                  His laughter is contagious and he loves being around people.
                </p>
                
                <h3 className="font-semibold text-lg mb-2">Nicknames</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-soft-yellow rounded-full px-3 py-1 text-sm">Kanni</span>
                  <span className="bg-soft-blue rounded-full px-3 py-1 text-sm">Potharaju</span>
                  <span className="bg-soft-peach rounded-full px-3 py-1 text-sm">Bhai</span>
                  <span className="bg-soft-green rounded-full px-3 py-1 text-sm">Model</span>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="indian-border rounded-full overflow-hidden aspect-square max-w-sm mx-auto">
                  <img 
                    src="/public/month1/11.jpg" 
                    alt="Baby Akshith" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <Heart className="h-6 w-6 text-festive-red" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Favorites Section */}
        <section className="py-16 px-4 bg-soft-blue/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title mx-auto">Favorites & Fun Facts</h2>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-4">
                  <ToyBrick className="h-6 w-6" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Favorite Toy</h3>
                  <p>Soft brown teddy that he can't sleep without</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-4">
                  <Music className="h-6 w-6" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Favorite Song</h3>
                  <p>"Potharaju and Bonalu Volumes by (Clement)"</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-4">
                  <Pizza className="h-6 w-6" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Favorite Food</h3>
                  <p>Mashed banana and dahi (yogurt)</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-4">
                  <Laugh className="h-6 w-6" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Makes Her Laugh</h3>
                  <p>Peek-a-boo games and watching the family dance</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-4">
                  <Star className="h-6 w-6" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Special Milestone</h3>
                  <p>Said his first word "Mama" at 8 months!</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full p-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-lg font-bold mb-2">Special Talent</h3>
                  <p>Can identify all family members by name</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cultural Rituals Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title mx-auto">Cultural Celebrations</h2>
            
            <div className="mt-12 space-y-8">
              <div className="indian-border bg-white p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="/placeholder.svg" 
                      alt="Naming Ceremony" 
                      className="rounded-xl object-cover w-full aspect-square"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-serif text-xl font-bold mb-2">Naamkaran (Naming Ceremony)</h3>
                    <p className="text-sm text-muted-foreground mb-3">40 days after birth</p>
                    <p>
                      The special day when we officially named our son "Akshith" in the presence of family elders
                      and loved ones. The ceremony included traditional prayers and blessings for his bright future.
                      His name was whispered in his ear by his grandfather as per tradition.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="indian-border bg-white p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="/placeholder.svg" 
                      alt="Annaprashan Ceremony" 
                      className="rounded-xl object-cover w-full aspect-square"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-serif text-xl font-bold mb-2">Annaprashan (First Solid Food)</h3>
                    <p className="text-sm text-muted-foreground mb-3">6 months old</p>
                    <p>
                      Celebrating Akshith's first taste of solid food - a mixture of rice and ghee served on a silver spoon.
                      This milestone ceremony was performed to bless his with prosperity and nourishment for life.
                      The ceremony was followed by giving his small portions of different foods to taste.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="indian-border bg-white p-6 rounded-xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="/placeholder.svg" 
                      alt="First Diwali" 
                      className="rounded-xl object-cover w-full aspect-square"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-serif text-xl font-bold mb-2">First Diwali Celebration</h3>
                    <p className="text-sm text-muted-foreground mb-3">5 months old</p>
                    <p>
                      Kanni's first experience of the festival of lights! We dressed him in a beautiful traditional outfit
                      and performed a special puja for him well-being and prosperity. His eyes lit up watching the diyas
                      and colorful decorations around the house.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default BabyCorner;
