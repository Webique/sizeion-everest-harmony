import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { ChefHat, Dumbbell, Sparkles } from 'lucide-react';
import restaurantImage from '@/assets/restaurant-dining.jpg';
import fitnessImage from '@/assets/fitness-center.jpg';
import spaImage from '@/assets/spa-massage.jpg';

const ServicesSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const services = [
    {
      id: 'restaurants',
      title: t.restaurants.title,
      content: t.restaurants.content,
      icon: ChefHat,
      image: restaurantImage,
      bgClass: 'bg-background'
    },
    {
      id: 'fitness',
      title: t.fitness.title,
      content: t.fitness.content,
      icon: Dumbbell,
      image: fitnessImage,
      bgClass: 'section-band'
    },
    {
      id: 'massage',
      title: t.massage.title,
      content: t.massage.content,
      icon: Sparkles,
      image: spaImage,
      bgClass: 'bg-background'
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-20 ${service.bgClass}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              isRTL ? 'lg:grid-flow-col-dense' : ''
            } ${
              index % 2 === 1 && !isRTL ? 'lg:grid-flow-col-dense' : ''
            } ${
              index % 2 === 0 && isRTL ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={`${
                (index % 2 === 1 && !isRTL) || (index % 2 === 0 && isRTL) 
                  ? 'lg:col-start-2' 
                  : 'lg:col-start-1'
              }`}>
                <div className={`flex items-center gap-4 mb-6 ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}>
                  <div className={`p-3 rounded-full ${
                    service.bgClass === 'section-band' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    <service.icon size={32} />
                  </div>
                  <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center ${
                    service.bgClass === 'section-band' 
                      ? 'text-primary-foreground' 
                      : 'text-foreground'
                  }`}>
                    {service.title}
                  </h2>
                </div>
                
                <p className={`text-lg leading-relaxed ${
                  service.bgClass === 'section-band' 
                    ? 'text-primary-foreground/90' 
                    : 'text-muted-foreground'
                } ${isRTL ? 'text-right' : 'text-left'}`}>
                  {service.content}
                </p>
              </div>

              {/* Image */}
              <div className={`${
                (index % 2 === 1 && !isRTL) || (index % 2 === 0 && isRTL)
                  ? 'lg:col-start-1'
                  : 'lg:col-start-2'
              }`}>
                <div className="luxury-card overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServicesSection;