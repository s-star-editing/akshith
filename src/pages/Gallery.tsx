
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gallery } from '@/types';
import CulturalMotifs from '@/components/CulturalMotifs';
import { Image } from 'lucide-react';

const galleryData: Gallery[] = [
  {
    id: 1,
    month: "Month 1",
    title: "New Beginnings",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      url: "/placeholder.svg",
      alt: `Month 1 memory ${i + 1}`
    }))
  },
  {
    id: 2,
    month: "Month 2",
    title: "Growing Every Day",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 10,
      url: "/placeholder.svg",
      alt: `Month 2 memory ${i + 1}`
    }))
  },
  {
    id: 3,
    month: "Month 3",
    title: "Discovering the World",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 20,
      url: "/placeholder.svg",
      alt: `Month 3 memory ${i + 1}`
    }))
  },
  {
    id: 4,
    month: "Month 4",
    title: "Little Explorer",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 30,
      url: "/placeholder.svg",
      alt: `Month 4 memory ${i + 1}`
    }))
  },
  {
    id: 5,
    month: "Month 5",
    title: "Sitting Up Tall",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 40,
      url: "/placeholder.svg",
      alt: `Month 5 memory ${i + 1}`
    }))
  },
  {
    id: 6,
    month: "Month 6",
    title: "Half Birthday",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 50,
      url: "/placeholder.svg",
      alt: `Month 6 memory ${i + 1}`
    }))
  },
  {
    id: 7,
    month: "Month 7",
    title: "Crawling Adventures",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 60,
      url: "/placeholder.svg",
      alt: `Month 7 memory ${i + 1}`
    }))
  },
  {
    id: 8,
    month: "Month 8",
    title: "Winter Celebrations",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 70,
      url: "/placeholder.svg",
      alt: `Month 8 memory ${i + 1}`
    }))
  },
  {
    id: 9,
    month: "Month 9",
    title: "First Words",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 80,
      url: "/placeholder.svg",
      alt: `Month 9 memory ${i + 1}`
    }))
  },
  {
    id: 10,
    month: "Month 10",
    title: "Standing Tall",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 90,
      url: "/placeholder.svg",
      alt: `Month 10 memory ${i + 1}`
    }))
  },
  {
    id: 11,
    month: "Month 11",
    title: "Almost There",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 100,
      url: "/placeholder.svg",
      alt: `Month 11 memory ${i + 1}`
    }))
  },
  {
    id: 12,
    month: "Month 12",
    title: "Birthday Preparations",
    images: Array.from({ length: 9 }, (_, i) => ({
      id: i + 110,
      url: "/placeholder.svg",
      alt: `Month 12 memory ${i + 1}`
    }))
  }
];

const GalleryPage = () => {
  const [activeMonth, setActiveMonth] = useState<string>("Month 1");
  const [selectedImage, setSelectedImage] = useState<{url: string, alt: string} | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Gallery - Akshith's First Birthday";
  }, []);

  const handleImageClick = (image: {url: string, alt: string}) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
              Memories Gallery
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              A collection of precious moments from our baby's first year. Each photo tells
              a story of growth, joy, and love.
            </p>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-10xl">
            <Tabs defaultValue="Month 1" className="w-full">
              <div className="mb-8 overflow-x-auto">
                <TabsList className="flex space-x-2 p-1">
                  {galleryData.map((month) => (
                    <TabsTrigger 
                      key={month.id}
                      value={month.month}
                      onClick={() => setActiveMonth(month.month)}
                      className="px-4 py-2 whitespace-nowrap"
                    >
                      {month.month}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {galleryData.map((month) => (
                <TabsContent key={month.id} value={month.month}>
                  <div className="mb-6">
                    <h2 className="font-serif text-2xl font-bold">{month.title}</h2>
                    <p className="text-muted-foreground">{month.month} of our journey together</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {month.images.map((image) => (
                      <div 
                        key={image.id} 
                        className="aspect-square overflow-hidden rounded-xl shadow-sm border border-border cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => handleImageClick(image)}
                      >
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
                >
                  ✕
                </button>
              </div>
              <div className="p-4">
                <p className="text-foreground">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <AudioPlayer />
    </div>
  );
};

export default GalleryPage;
