import React from 'react';
import { MapPin, Bed, Bath, Square, MessageCircle, Eye, Heart } from 'lucide-react';
import { Property } from '../types/Property';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
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

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Property Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.type === 'apartment' ? 'شقة' : 
             property.type === 'house' ? 'منزل' :
             property.type === 'villa' ? 'فيلا' :
             property.type === 'office' ? 'مكتب' :
             property.type === 'shop' ? 'محل تجاري' : 'أرض'}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            property.status === 'for-sale' ? 'bg-green-600 text-white' : 'bg-amber-600 text-white'
          }`}>
            {property.status === 'for-sale' ? 'للبيع' : 'للإيجار'}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 flex space-x-2 rtl:space-x-reverse">
          <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
            <Heart size={18} className="text-red-500" />
          </button>
          <button 
            onClick={() => onViewDetails(property)}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <Eye size={18} className="text-blue-600" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 flex-1">{property.title}</h3>
          <div className="text-right mr-4">
            <div className="text-2xl font-bold text-blue-600">{formatPrice(property.price)}</div>
            <div className="text-sm text-gray-500">
              {property.area ? `${property.area.toLocaleString('ar')} م²` : ''}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="ml-2" />
          <span>{property.location}</span>
        </div>

        {/* Property Features */}
        {property.features && (
          <div className="flex justify-between items-center mb-4 text-gray-600">
            {property.features.bedrooms && (
              <div className="flex items-center">
                <Bed size={16} className="ml-1" />
                <span className="text-sm">{property.features.bedrooms}</span>
              </div>
            )}
            {property.features.bathrooms && (
              <div className="flex items-center">
                <Bath size={16} className="ml-1" />
                <span className="text-sm">{property.features.bathrooms}</span>
              </div>
            )}
            {property.area && (
              <div className="flex items-center">
                <Square size={16} className="ml-1" />
                <span className="text-sm">{property.area.toLocaleString('ar')} م²</span>
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{property.description}</p>

        {/* Action Buttons */}
        <div className="flex space-x-3 rtl:space-x-reverse">
          <button 
            onClick={contactWhatsApp}
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse font-medium"
          >
            <MessageCircle size={18} />
            <span>واتساب</span>
          </button>
          <button 
            onClick={() => onViewDetails(property)}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse font-medium"
          >
            <Eye size={18} />
            <span>التفاصيل</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;