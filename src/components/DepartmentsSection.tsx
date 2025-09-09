import React from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { 
  Users, 
  UtensilsCrossed, 
  TrendingUp, 
  Shield, 
  UserCheck, 
  Calculator,
  DollarSign
} from 'lucide-react';

const DepartmentsSection = () => {
  const { language, isRTL } = useLanguage();
  const t = translations[language];

  const departments = [
    {
      key: 'frontOffice',
      icon: Users,
      title: t.departments.items.frontOffice.title,
      description: t.departments.items.frontOffice.description
    },
    {
      key: 'foodBeverage',
      icon: UtensilsCrossed,
      title: t.departments.items.foodBeverage.title,
      description: t.departments.items.foodBeverage.description
    },
    {
      key: 'salesMarketing',
      icon: TrendingUp,
      title: t.departments.items.salesMarketing.title,
      description: t.departments.items.salesMarketing.description
    },
    {
      key: 'maintenance',
      icon: Shield,
      title: t.departments.items.maintenance.title,
      description: t.departments.items.maintenance.description
    },
    {
      key: 'hr',
      icon: UserCheck,
      title: t.departments.items.hr.title,
      description: t.departments.items.hr.description
    },
    {
      key: 'finance',
      icon: Calculator,
      title: t.departments.items.finance.title,
      description: t.departments.items.finance.description
    },
    {
      key: 'revenue',
      icon: DollarSign,
      title: t.departments.items.revenue.title,
      description: t.departments.items.revenue.description
    }
  ];

  return (
    <section id="departments" className="py-20 section-band">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-6 text-primary-foreground ${
              isRTL ? 'text-right' : 'text-left'
            }`}>
              {t.departments.title}
            </h2>
            
            <div className="h-1 w-24 bg-secondary mx-auto mb-8"></div>
            
            <p className={`text-lg text-primary-foreground/90 max-w-3xl mx-auto ${
              isRTL ? 'text-right' : 'text-left'
            }`}>
              {t.departments.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept.key} className="luxury-card bg-background p-6 text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <dept.icon size={32} />
                  </div>
                </div>
                
                <h3 className={`font-heading text-xl font-semibold mb-3 text-foreground ${
                  isRTL ? 'text-right' : 'text-left'
                }`}>
                  {dept.title}
                </h3>
                
                <p className={`text-muted-foreground leading-relaxed ${
                  isRTL ? 'text-right' : 'text-left'
                }`}>
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;