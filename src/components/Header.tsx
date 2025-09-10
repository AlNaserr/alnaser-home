import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Phone size={14} />
              <span dir="ltr">+963 11 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Mail size={14} />
              <span>info@al-nasser.sy</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <MapPin size={14} />
            <span>دمشق - سوريا</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-2 rounded-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">ن</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">الناصر للعقارات</h1>
              <p className="text-sm text-gray-600">الخبرة والثقة في خدمتكم</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">الرئيسية</a>
            <a href="#properties" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">العقارات</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">الخدمات</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">من نحن</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">اتصل بنا</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">الرئيسية</a>
              <a href="#properties" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">العقارات</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">الخدمات</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">من نحن</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">اتصل بنا</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;