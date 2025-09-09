import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const AboutSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-heading text-4xl md:text-5xl font-bold text-center mb-8 text-foreground ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t.about.title}
          </h2>
          
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
          
          <p className={`text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t.about.content}
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center luxury-card p-8">
              <div className="text-4xl font-bold text-accent mb-2">2017</div>
              <div className="text-muted-foreground font-medium">
                {language === 'en' ? 'Founded' : 'تأسست'}
              </div>
            </div>
            
            <div className="text-center luxury-card p-8">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-muted-foreground font-medium">
                {language === 'en' ? 'Years Experience' : 'سنوات خبرة'}
              </div>
            </div>
            
            <div className="text-center luxury-card p-8">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground font-medium">
                {language === 'en' ? 'Excellence' : 'التميز'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;