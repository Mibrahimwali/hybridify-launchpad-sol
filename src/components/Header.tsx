
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-5 px-5 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-white">Hybridify</div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <a href="#home" className="mx-3 hover:text-blue-200 font-medium transition-colors">Home</a>
          <a href="#features" className="mx-3 hover:text-blue-200 font-medium transition-colors">Features</a>
          <a href="#services" className="mx-3 hover:text-blue-200 font-medium transition-colors">Services</a>
          <a href="#projects" className="mx-3 hover:text-blue-200 font-medium transition-colors">Projects</a>
          <a href="#community" className="mx-3 hover:text-blue-200 font-medium transition-colors">Community</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-white" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 absolute left-0 right-0 p-5 shadow-lg animate-fade-in z-20">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="font-medium text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#services" 
              className="font-medium text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="font-medium text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#community" 
              className="font-medium text-white hover:text-blue-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
