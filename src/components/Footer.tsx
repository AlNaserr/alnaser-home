import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-2 rounded-lg">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">ن</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">الناصر للعقارات</h3>
                <p className="text-sm text-gray-400">الخبرة والثقة في خدمتكم</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              نحن في الناصر للعقارات نقدم لك أفضل العقارات في دمشق 
              بأسعار تنافسية وخدمة عملاء متميزة منذ أكثر من 15 عاماً.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a 
                href="https://wa.me/963123456789" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">الرئيسية</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white transition-colors">العقارات</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">الخدمات</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-bold mb-6">أنواع العقارات</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">شقق سكنية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">منازل وفيلات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">مكاتب تجارية</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">محلات ومعارض</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">أراضي للبناء</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">شارع بغداد - المزة</p>
                  <p className="text-gray-400">دمشق، سوريا</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-400" dir="ltr">+963 11 123-4567</p>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <p className="text-gray-400">info@al-nasser.sy</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6">
              <button 
                onClick={() => window.open('https://wa.me/963123456789?text=' + encodeURIComponent('مرحباً، أريد الاستفسار عن خدماتكم'), '_blank')}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse font-medium"
              >
                <MessageCircle size={18} />
                <span>تواصل معنا</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 الناصر للعقارات. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                شروط الاستخدام
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                اتفاقية الخدمة
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;