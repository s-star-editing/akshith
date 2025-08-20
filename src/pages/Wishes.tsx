
import { useState, useEffect, FormEvent } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wish } from '@/types';
import CulturalMotifs from '@/components/CulturalMotifs';
import { Heart } from 'lucide-react';

// Sample wishes data
const wishes: Wish[] = [
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
  },
  {
    id: 4,
    name: "Chacha & Chachi",
    relation: "Uncle & Aunt",
    message: "May God bless you with good health, wealth, and prosperity. Happy first birthday!",
    language: "Hindi"
  },
  {
    id: 5,
    name: "Bua & Fufa",
    relation: "Aunt & Uncle",
    message: "To our little angel, may your life be filled with laughter and love.",
    language: "English"
  },
  {
    id: 6,
    name: "Maasi & Maasa",
    relation: "Aunt & Uncle",
    message: "Sending lots of love and blessings on your special day. Stay blessed, little one!",
    language: "English"
  }
];

const WishesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    message: '',
    language: 'English'
  });
  const [displayedWishes, setDisplayedWishes] = useState<Wish[]>(wishes);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Wishes & Blessings - Khushi's First Birthday";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, language: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.relation || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Add new wish
    const newWish: Wish = {
      id: displayedWishes.length + 1,
      ...formData
    };
    
    setDisplayedWishes((prev) => [newWish, ...prev]);
    
    // Reset form
    setFormData({
      name: '',
      relation: '',
      message: '',
      language: 'English'
    });
    
    toast({
      title: "Wish Submitted",
      description: "Thank you for your blessing!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-soft-peach via-soft-peach/50 to-soft-peach/20 py-16 px-4 relative">
          <CulturalMotifs />
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Wishes & Blessings
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Share your love, blessings, and warm wishes for our little Khushi on her first birthday.
            </p>
          </div>
        </section>
        
        {/* Add Wish Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="indian-border bg-white rounded-xl p-8 shadow-md">
              <h2 className="font-serif text-2xl font-bold mb-6 text-center">Send Your Blessings</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name*</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name or family name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="relation">Relation*</Label>
                    <Input 
                      id="relation"
                      name="relation"
                      value={formData.relation}
                      onChange={handleChange}
                      placeholder="e.g. Friend, Uncle, Aunt"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message*</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your blessing or wish here..."
                    rows={4}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="language">Message Language</Label>
                  <Select 
                    value={formData.language} 
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Hindi">Hindi</SelectItem>
                      <SelectItem value="Sanskrit">Sanskrit</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Submit Blessing
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Wishes Wall Section */}
        <section className="py-16 px-4 bg-soft-yellow/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title mx-auto">Blessings Wall</h2>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedWishes.map((wish) => (
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
          </div>
        </section>
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default WishesPage;
