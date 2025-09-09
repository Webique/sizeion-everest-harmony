import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Button } from './ui/button';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const ContactSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'en' ? 'Phone Numbers' : 'أرقام الهاتف',
      values: ['+966 566056630', '+966 535656505']
    },
    {
      icon: Mail,
      label: language === 'en' ? 'Email' : 'البريد الإلكتروني',
      values: ['ff.566@outlook.com']
    },
    {
      icon: MapPin,
      label: t.contact.office,
      values: [t.contact.location]
    },
    {
      icon: FileText,
      label: t.contact.crn,
      values: ['1010803925']
    }
  ];

  return (
    <section id="contact" className="py-20 section-band">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-primary-foreground text-center">
              {t.contact.title}
            </h2>
            
            <div className="h-1 w-24 bg-secondary mx-auto mb-8"></div>
            
            <p className={`text-lg text-primary-foreground/90 max-w-2xl mx-auto ${
              isRTL ? 'text-right' : 'text-left'
            }`}>
              {t.contact.cta}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="luxury-card bg-background p-6">
                  <div className={`flex items-start gap-4 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}>
                    <div className="p-3 rounded-full bg-accent text-accent-foreground flex-shrink-0">
                      <info.icon size={24} />
                    </div>
                    <div className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {info.label}
                      </h3>
                      {info.values.map((value, valueIndex) => (
                        <p key={valueIndex} className="text-muted-foreground" dir="ltr">
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="luxury-card bg-background p-8">
              <h3 className={`font-heading text-2xl font-bold text-foreground mb-6 ${
                isRTL ? 'text-right' : 'text-left'
              }`}>
                {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
              </h3>
              
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('tel:+966566056630')}
                >
                  <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'en' ? 'Call Now' : 'اتصل الآن'}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.open('mailto:ff.566@outlook.com')}
                >
                  <Mail className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'en' ? 'Send Email' : 'أرسل بريد إلكتروني'}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://twitter.com/sizeion', '_blank')}
                >
                  <FaXTwitter className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {language === 'en' ? 'Follow on X' : 'تابعنا على X'}
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className={`text-sm text-muted-foreground ${
                  isRTL ? 'text-right' : 'text-left'
                }`}>
                  {language === 'en' 
                    ? 'Available 24/7 for partnerships and hospitality inquiries'
                    : 'متاح على مدار الساعة للشراكات والاستفسارات الفندقية'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;