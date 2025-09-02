import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img
                src="/MIDDLE.png"
                alt="Middle logo"
                className="h-14 w-auto sm:h-16"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#industries" className="text-gray-600 hover:text-foreground transition-colors">
                Industries
              </a>
              <a href="#features" className="text-gray-600 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#demo" className="text-gray-600 hover:text-foreground transition-colors">
                Demo
              </a>
              <Button variant="outline" size="sm">
                Book Demo
              </Button>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#industries" className="block px-3 py-2 text-gray-600 hover:text-foreground transition-colors">
                Industries
              </a>
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#demo" className="block px-3 py-2 text-gray-600 hover:text-foreground transition-colors">
                Demo
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Book Demo
                </Button>
                <Button variant="default" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;