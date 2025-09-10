import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Square, Calendar, MessageCircle, Phone, Mail, Navigation, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyDetailsProps {
  property: Property;
  onClose: () => void;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SY', {
      style: 'currency',
      currency: 'SYP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const contactWhatsApp = () => {
    const message = encodeURIComponent(`مرحباً، أنا مهتم بالعقار: ${property.title} - ${formatPrice(property.price)}`);
    window.open(`https://wa.me/${property.whatsappNumber}?text=${message}`, '_blank');
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent(`${property.title}, ${property.location}, Damascus, Syria`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const shareProperty = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `شاهد هذا العقار الرائع في ${property.location}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-900">تفاصيل العقار</h2>
          <div className="flex space-x-3 rtl:space-x-reverse">
            <button 
              onClick={shareProperty}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Share2 size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart size={20} className="text-red-500" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.title}
                className="w-full h-96 object-cover rounded-xl"
              />
              {property.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} من {property.images.length}
              </div>
            </div>

            {/* Image Thumbnails */}
            {property.images.length > 1 && (
              <div className="flex space-x-2 rtl:space-x-reverse overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`صورة ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Google Maps Integration */}
            <div className="bg-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900">الموقع على الخريطة</h3>
                <button 
                  onClick={openGoogleMaps}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                >
                  <Navigation size={16} />
                  <span>فتح في خرائط جوجل</span>
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-2 text-blue-600" />
                  <p>انقر على الزر أعلاه لعرض الموقع على خرائط جوجل</p>
                  <p className="text-sm mt-1">{property.location} - دمشق</p>
                </div>
              </div>
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={18} className="ml-2" />
                <span className="text-lg">{property.location}</span>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{formatPrice(property.price)}</div>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  property.status === 'for-sale' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {property.status === 'for-sale' ? 'للبيع' : 'للإيجار'}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {property.type === 'apartment' ? 'شقة' : 
                   property.type === 'house' ? 'منزل' :
                   property.type === 'villa' ? 'فيلا' :
                   property.type === 'office' ? 'مكتب' :
                   property.type === 'shop' ? 'محل تجاري' : 'أرض'}
                </span>
              </div>
            </div>

            {/* Features */}
            {property.features && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">تفاصيل العقار</h3>
                <div className="grid grid-cols-2 gap-4">
                  {property.features.bedrooms && (
                    <div className="flex items-center">
                      <Bed size={20} className="text-blue-600 ml-3" />
                      <div>
                        <div className="font-medium">غرف النوم</div>
                        <div className="text-gray-600">{property.features.bedrooms}</div>
                      </div>
                    </div>
                  )}
                  {property.features.bathrooms && (
                    <div className="flex items-center">
                      <Bath size={20} className="text-blue-600 ml-3" />
                      <div>
                        <div className="font-medium">الحمامات</div>
                        <div className="text-gray-600">{property.features.bathrooms}</div>
                      </div>
                    </div>
                  )}
                  {property.area && (
                    <div className="flex items-center">
                      <Square size={20} className="text-blue-600 ml-3" />
                      <div>
                        <div className="font-medium">المساحة</div>
                        <div className="text-gray-600">{property.area.toLocaleString('ar')} م²</div>
                      </div>
                    </div>
                  )}
                  {property.yearBuilt && (
                    <div className="flex items-center">
                      <Calendar size={20} className="text-blue-600 ml-3" />
                      <div>
                        <div className="font-medium">سنة البناء</div>
                        <div className="text-gray-600">{property.yearBuilt}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">الوصف</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
            </div>

            {/* Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">المرافق والخدمات</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full ml-3"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">للاستفسار والتواصل</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={contactWhatsApp}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-3 rtl:space-x-reverse font-medium text-lg"
                >
                  <MessageCircle size={20} />
                  <span>تواصل عبر واتساب</span>
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`tel:${property.whatsappNumber}`}
                    className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse font-medium"
                  >
                    <Phone size={18} />
                    <span>اتصال</span>
                  </a>
                  <a 
                    href="mailto:info@al-nasser.sy"
                    className="bg-gray-600 text-white py-3 px-4 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse font-medium"
                  >
                    <Mail size={18} />
                    <span>إيميل</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;