
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Baby Corner', path: '/baby-corner' },
    { name: 'Wishes', path: '/wishes' },
  ];

  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white/95 sticky top-0 z-50 backdrop-blur-sm border-b border-soft-peach/40 shadow-sm">
      <div className="container mx-auto py-3 px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-xl md:text-2xl">
            <span className="font-serif text-primary font-bold">Akshith</span>
            <span className="font-serif font-medium"> Andekar</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-soft-peach/40 p-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
