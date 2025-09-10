import React from 'react';
import { Search, FileText, Key, Calculator, Shield, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "البحث عن العقارات",
      description: "نساعدك في العثور على العقار المناسب حسب احتياجاتك وميزانيتك"
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "الاستشارات القانونية",
      description: "نقدم استشارات قانونية شاملة لضمان سلامة المعاملات العقارية"
    },
    {
      icon: <Key className="w-12 h-12 text-blue-600" />,
      title: "إدارة العقارات",
      description: "خدمات إدارة شاملة للعقارات التجارية والسكنية"
    },
    {
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      title: "التقييم العقاري",
      description: "تقييم دقيق ومهني للعقارات من قبل خبراء معتمدين"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "ضمانات الجودة",
      description: "نضمن جودة الخدمة وشفافية التعاملات مع جميع عملائنا"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "خدمة العملاء",
      description: "فريق خدمة عملاء محترف متاح 24/7 لخدمتكم"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            خدماتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات العقارية المتخصصة لتلبية جميع احتياجاتكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg group text-center"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            هل تحتاج استشارة عقارية؟
          </h3>
          <p className="text-xl mb-8 opacity-90">
            احجز استشارة مجانية مع خبرائنا العقاريين
          </p>
          <button 
            onClick={() => window.open('https://wa.me/963123456789?text=' + encodeURIComponent('أريد حجز استشارة عقارية مجانية'), '_blank')}
            className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            احجز استشارتك المجانية
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;