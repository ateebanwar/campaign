import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { candidateInfo, navLinks } from '@/data/campaignData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-card'
            : 'bg-transparent'
          }`}
      >
        <div className="container-campaign px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo/Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-display font-bold text-xl transition-colors ${isScrolled ? 'text-foreground' : 'text-hero-text'
                }`}
            >
              {candidateInfo.name.split(' ')[0]}
              <span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-hero-text/90'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${candidateInfo.phone}`}
                className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isScrolled
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary-foreground/20 text-hero-text backdrop-blur-sm'
                  }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Now</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-foreground hover:bg-muted' : 'text-hero-text hover:bg-white/10'
                  }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-background shadow-elevated z-50 p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-xl text-foreground">
                  {candidateInfo.name.split(' ')[0]}
                  <span className="text-primary">.</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <a
                  href={`tel:${candidateInfo.phone}`}
                  className="flex items-center justify-center gap-2 w-full btn-primary"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;