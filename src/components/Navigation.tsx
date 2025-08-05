import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

   return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">Prince Kumar</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-foreground hover:text-primary animate-smooth"
              >
                {item.name}
              </button>
            ))}

            {/* CV Download Button (Desktop) */}
            <a
              href="https://drive.google.com/file/d/1Fzh7SflCGnwdXHRH5sLjU8Opvz3RJ1Rn/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-primary border border-border rounded-md px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary animate-smooth"
                >
                  {item.name}
                </button>
              ))}

              {/* CV Download Button (Mobile) */}
              <a
                href="https://drive.google.com/file/d/1Fzh7SflCGnwdXHRH5sLjU8Opvz3RJ1Rn/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start border border-border rounded-md px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;