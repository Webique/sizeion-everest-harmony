import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const quickLinks = [
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
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="font-heading text-2xl font-bold mb-4">
              {language === 'en' ? 'Sizeion Everest' : 'السيزيليون إيفرست'}
            </h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              {language === 'en' 
                ? 'International Hospitality excellence since 2017'
                : 'التميز الفندقي الدولي منذ عام 2017'}
            </p>
            <p className="text-sm text-background/60">
              {t.contact.crn}: 1010803925
            </p>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-heading text-lg font-semibold mb-4 text-regal-sand">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-regal-sand transition-colors text-sm"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-heading text-lg font-semibold mb-4 text-regal-sand">
              {t.contact.title}
            </h4>
            <div className="space-y-3">
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone size={16} className="text-regal-sand flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <div>+966 566056630</div>
                  <div>+966 535656505</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Mail size={16} className="text-regal-sand flex-shrink-0" />
                <div className="text-sm text-background/80">
                  ff.566@outlook.com
                </div>
              </div>
              
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <MessageCircle size={16} className="text-regal-sand flex-shrink-0" />
                <a
                  href="https://twitter.com/sizeion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/80 hover:text-regal-sand transition-colors"
                >
                  @sizeion
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-8"></div>

        {/* Copyright */}
        <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
          <p className="text-sm text-background/60">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;