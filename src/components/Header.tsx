
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Transformation Ventures
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#course" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                Course
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
                Contact
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-accent/50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 border-t border-border/50 rounded-b-lg">
              <a
                href="#course"
                className="block px-3 py-3 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-accent/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Course
              </a>
              <a
                href="#contact"
                className="block px-3 py-3 text-foreground/80 hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-accent/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
