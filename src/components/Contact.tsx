import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    propertyType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `مرحباً، أنا ${formData.name}\n` +
      `رقم الهاتف: ${formData.phone}\n` +
      `البريد الإلكتروني: ${formData.email}\n` +
      `نوع العقار المطلوب: ${formData.propertyType}\n` +
      `الرسالة: ${formData.message}`
    );
    window.open(`https://wa.me/963123456789?text=${message}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا لخدمتكم على مدار 24 ساعة. تواصلوا معنا بالطريقة التي تناسبكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">معلومات التواصل</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">عنوان المكتب</h4>
                  <p className="text-gray-600">شارع بغداد - المزة - دمشق، سوريا</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">رقم الهاتف</h4>
                  <p className="text-gray-600" dir="ltr">+963 11 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-amber-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">البريد الإلكتروني</h4>
                  <p className="text-gray-600">info@al-nasser.sy</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">ساعات العمل</h4>
                  <p className="text-gray-600">السبت - الخميس: 8:00 ص - 8:00 م</p>
                  <p className="text-gray-600">الجمعة: 2:00 م - 8:00 م</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <button 
              onClick={() => window.open('https://wa.me/963123456789?text=' + encodeURIComponent('مرحباً، أريد التواصل معكم'), '_blank')}
              className="w-full bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-3 rtl:space-x-reverse font-bold text-lg"
            >
              <MessageCircle size={24} />
              <span>تواصل فوري عبر واتساب</span>
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رقم الهاتف</label>
                <div className="relative">
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="09xxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">نوع العقار المطلوب</label>
                <select 
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">اختر نوع العقار</option>
                  <option value="شقة">شقة</option>
                  <option value="منزل">منزل</option>
                  <option value="فيلا">فيلا</option>
                  <option value="مكتب">مكتب</option>
                  <option value="محل تجاري">محل تجاري</option>
                  <option value="أرض">أرض</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رسالتك</label>
                <div className="relative">
                  <MessageSquare className="absolute right-3 top-3 text-gray-400" size={20} />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 rtl:space-x-reverse"
              >
                <Send size={20} />
                <span>إرسال عبر واتساب</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;