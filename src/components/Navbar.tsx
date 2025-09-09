import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = translations[language];
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-[var(--shadow-luxury)]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`flex-shrink-0 ${isRTL ? 'order-3' : 'order-1'}`}>
            <a href="#home" className="font-heading text-2xl font-bold text-foreground hover:text-accent transition-colors">
              {language === 'en' ? 'Sizeion Everest' : 'السيزيليون إيفرست'}
            </a>
          </div>

          {/* Navigation Links */}
          <div className={`hidden lg:flex items-center space-x-8 ${isRTL ? 'space-x-reverse order-1' : 'order-2'}`}>
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

          {/* Language Toggle */}
          <div className={`flex items-center ${isRTL ? 'order-2' : 'order-3'}`}>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Languages size={16} />
              <span className="font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;