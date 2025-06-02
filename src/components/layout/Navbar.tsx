import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl hidden sm:inline-block">
              DevName
            </span>
            <span className="font-bold text-xl sm:hidden">DN</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link
              to="/"
              className="transition-colors hover:text-foreground/80"
              activeProps={{ className: 'text-foreground font-semibold' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-foreground/80"
              activeProps={{ className: 'text-foreground font-semibold' }}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="transition-colors hover:text-foreground/80"
              activeProps={{ className: 'text-foreground font-semibold' }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-foreground/80"
              activeProps={{ className: 'text-foreground font-semibold' }}
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Link to="/resume" className="px-2">
                Resume
              </Link>
            </Button>
            <Button>
              <Link to="/contact" className="px-2">
                Hire Me
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>
                <Link to="/resume" className="w-full">
                  Resume
                </Link>
              </Button>
              <Button onClick={() => setIsMenuOpen(false)}>
                <Link to="/contact" className="w-full">
                  Hire Me
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
