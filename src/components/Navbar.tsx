import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Languages, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'restaurants', href: '#restaurants' },
    { key: 'fitness', href: '#fitness' },
    { key: 'massage', href: '#massage' },
    { key: 'departments', href: '#departments' },
    { key: 'management', href: '#management' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-[var(--shadow-luxury)]' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
                <img 
                  src="/logo.png" 
                  alt={language === 'en' ? 'Sizeion Everest' : 'السيزيليون إيفرست'}
                  className="h-16 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className={`hidden lg:flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors font-medium text-sm tracking-wide"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
            </div>

            {/* Desktop Language Toggle & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="hidden sm:flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Languages size={16} />
                <span className="font-medium">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-accent/10 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-accent" />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isRTL ? 'right-auto left-0' : ''
      } ${isMobileMenuOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt={language === 'en' ? 'Sizeion Everest' : 'السيزيليون إيفرست'}
                className="h-10 w-auto"
              />
              <span className="font-heading text-lg font-bold text-foreground">
                {language === 'en' ? 'Sizeion Everest' : 'السيزيليون إيفرست'}
              </span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg text-foreground hover:bg-accent/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-medium ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Language Toggle */}
          <div className="p-6 border-t border-border">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                toggleLanguage();
                closeMobileMenu();
              }}
              className="w-full flex items-center justify-center gap-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Languages size={20} />
              <span className="font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;