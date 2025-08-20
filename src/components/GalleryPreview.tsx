
import { Gallery } from '@/types';
import { Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import CulturalMotifs from './CulturalMotifs';

interface GalleryPreviewProps {
  months?: Gallery[];
}

const months: Gallery[] = [
  {
    id: 1,
    month: "Month 1",
    title: "New Beginnings",
    images: [
      { id: 1, url: "/placeholder.svg", alt: "Baby sleeping" },
      { id: 2, url: "/placeholder.svg", alt: "First bath" },
      { id: 3, url: "/placeholder.svg", alt: "Family portrait" },
    ]
  },
  {
    id: 2,
    month: "Month 2",
    title: "Growing Every Day",
    images: [
      { id: 4, url: "/public/month1/2.jpg", alt: "First smile" },
      { id: 5, url: "/placeholder.svg", alt: "Tummy time" },
      { id: 6, url: "/placeholder.svg", alt: "With grandparents" },
    ]
  },
  {
    id: 3,
    month: "Month 3",
    title: "Discovering the World",
    images: [
      { id: 7, url: "/placeholder.svg", alt: "Playing with toys" },
      { id: 8, url: "/placeholder.svg", alt: "First outdoor trip" },
      { id: 9, url: "/placeholder.svg", alt: "Laughing" },
    ]
  }
];

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ months: propMonths }) => {
  const displayMonths = propMonths || months;
  
  return (
    <section className="py-16 px-4 relative">
      <CulturalMotifs />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-title mx-auto">Month by Month</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayMonths.map((month) => (
            <div key={month.id} className="memory-card indian-border bg-white overflow-hidden">
              <div className="aspect-video relative overflow-hidden group">
                <div className="grid grid-cols-3 h-full">
                  {month.images.slice(0, 3).map((image, index) => (
                    <img 
                      key={image.id}
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <Image size={24} className="mx-auto mb-1" />
                    <p className="font-medium">{month.images.length} memories</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-primary font-medium mb-1">{month.month}</div>
                <h3 className="font-serif text-lg font-semibold">{month.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Explore Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
