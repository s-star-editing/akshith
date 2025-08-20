
import { Milestone } from '@/types';
import { Calendar, Clock } from 'lucide-react';
import CulturalMotifs from './CulturalMotifs';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface TimelineSectionProps {
  milestones?: Milestone[];
  showAll?: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Pre Birthday Shoot",
    date: "July 10, 2024",
    ageInDays: 25,
    description: "The most precious moment when our little one smiled for the first time, melting our hearts completely.",
    imageUrl: "public/month1/file.svg",
  },
  {
    id: 2,
    title: "First Smile",
    date: "July 10, 2024",
    ageInDays: 25,
    description: "The most precious moment when our little one smiled for the first time, melting our hearts completely.",
    imageUrl: "/public/month1/file.svg",
  },
  {
    id: 3,
    title: "Naming Ceremony",
    date: "July 25, 2024",
    ageInDays: 40,
    description: "We officially named our bundle of joy in a beautiful traditional ceremony surrounded by family.",
    imageUrl: "/public/month1/file.svg",
  },
  {
    id: 4,
    title: "First Laugh",
    date: "August 5, 2024",
    ageInDays: 51,
    description: "The sweetest sound of laughter filled our home for the first time!",
    imageUrl: "/public/month1/file.svg",
  },
  {
    id: 5,
    title: "First Diwali",
    date: "October 31, 2024",
    ageInDays: 138,
    description: "Celebrated the festival of lights with our little diya who brightens our lives.",
    imageUrl: "/public/month1/file.svg",
  }
  ];

const TimelineSection: React.FC<TimelineSectionProps> = ({ showAll = false }) => {
  const displayMilestones = showAll ? milestones : milestones.slice(0, 3);
  
  return (
    <section className="py-16 px-4 bg-soft-blue/20 relative">
      <CulturalMotifs />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-title mx-auto">Precious Milestones</h2>
        
        <div className="mt-12">
          {displayMilestones.map((milestone, index) => (
            <div key={milestone.id} className="timeline-item">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src={milestone.imageUrl} 
                    alt={milestone.title} 
                    className="rounded-xl shadow-md aspect-square object-cover w-full" 
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-serif text-xl font-bold mb-1">{milestone.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" /> {milestone.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" /> {milestone.ageInDays} days old
                    </span>
                  </div>
                  <p>{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-8">
            <Link to="/timeline">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View All Milestones
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TimelineSection;
