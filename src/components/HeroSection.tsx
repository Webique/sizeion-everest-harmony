import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { ArrowDown, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-hotel.jpg';

const HeroSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="font-heading text-5xl md:text-7xl font-bold mb-6 text-center leading-tight"
            style={isRTL ? { lineHeight: '1.4' } : {}}
          >
            {t.hero.headline}
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t.hero.subline}
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isRTL ? 'sm:flex-row-reverse' : ''
          }`}>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-[var(--shadow-luxury)]"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t.hero.cta}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-black/20 hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.hero.learnMore}
              <ArrowDown className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;