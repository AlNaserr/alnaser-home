import React, { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import PropertyCard from './PropertyCard';
import PropertyDetails from './PropertyDetails';
import { Property } from '../types/Property';
import { properties } from '../data/properties';

interface PropertiesProps {
  searchFilters?: {
    type: string;
    minPrice: string;
    maxPrice: string;
    location: string;
  };
}

const Properties: React.FC<PropertiesProps> = ({ searchFilters }) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'newest' | 'area'>('newest');

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Apply search filters
    if (searchFilters) {
      if (searchFilters.type) {
        filtered = filtered.filter(prop => prop.type === searchFilters.type);
      }
      if (searchFilters.minPrice) {
        filtered = filtered.filter(prop => prop.price >= parseInt(searchFilters.minPrice));
      }
      if (searchFilters.maxPrice) {
        filtered = filtered.filter(prop => prop.price <= parseInt(searchFilters.maxPrice));
      }
      if (searchFilters.location) {
        filtered = filtered.filter(prop => prop.location.includes(searchFilters.location));
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'area':
        filtered.sort((a, b) => (b.area || 0) - (a.area || 0));
        break;
      case 'newest':
      default:
        // Keep original order for newest
        break;
    }

    return filtered;
  }, [searchFilters, sortBy]);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
  };

  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            عقاراتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اكتشف مجموعة متنوعة من العقارات الحصرية في أفضل مناطق دمشق
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Results Count */}
          <div className="text-gray-600">
            عرض <span className="font-bold">{filteredProperties.length}</span> عقار
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Sort */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">الأحدث</option>
              <option value="price-low">السعر: من الأقل للأعلى</option>
              <option value="price-high">السعر: من الأعلى للأقل</option>
              <option value="area">المساحة: الأكبر أولاً</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Filter size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">لم يتم العثور على عقارات</h3>
            <p className="text-gray-600">جرب تغيير معايير البحث للعثور على عقارات مناسبة</p>
          </div>
        )}

        {/* Property Details Modal */}
        {selectedProperty && (
          <PropertyDetails 
            property={selectedProperty} 
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Properties;