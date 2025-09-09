import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Crown, Users } from 'lucide-react';

const ManagementSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  return (
    <section id="management" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-accent text-accent-foreground">
                <Crown size={36} />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center">
                {t.management.title}
              </h2>
            </div>
            
            <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="luxury-card p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="p-6 rounded-full bg-primary text-primary-foreground inline-block mb-6">
                <Users size={48} />
              </div>
            </div>
            
            <p className={`text-lg md:text-xl leading-relaxed text-muted-foreground ${
              isRTL ? 'text-right' : 'text-left'
            }`}>
              {t.management.content}
            </p>
            
            {/* Management Roles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
                <h3 className="font-heading text-xl font-semibold text-accent mb-2">
                  {language === 'en' ? 'General Manager' : 'المدير العام'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'Strategic oversight & decision making' 
                    : 'الإشراف الاستراتيجي واتخاذ القرارات'}
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  {language === 'en' ? 'Operations Manager' : 'مدير العمليات'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'en' 
                    ? 'Daily operations & coordination' 
                    : 'العمليات اليومية والتنسيق'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;