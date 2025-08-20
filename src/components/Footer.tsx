
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/80 border-t border-soft-peach/40 py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <Link to="/" className="text-xl">
              <span className="font-serif text-primary font-bold">Akshith</span>
              <span className="font-serif font-medium"> Andekar</span>
            </Link>
          </div>
          
          <div className="flex justify-center space-x-6 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/timeline" className="hover:text-primary transition-colors">Timeline</Link>
            <Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
            <Link to="/baby-corner" className="hover:text-primary transition-colors">Baby Corner</Link>
            <Link to="/wishes" className="hover:text-primary transition-colors">Wishes</Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart size={16} className="text-festive-red" fill="currentColor" /> for our little one
            </p>
            <p className="mt-1">© {new Date().getFullYear()} - Abhishek Dandetkar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
