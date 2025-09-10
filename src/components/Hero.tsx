import React from 'react';
import { Search, MapPin, Filter } from 'lucide-react';

interface HeroProps {
  onSearch: (filters: {
    type: string;
    minPrice: string;
    maxPrice: string;
    location: string;
  }) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchFilters, setSearchFilters] = React.useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    location: ''
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchFilters);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            اكتشف منزل أحلامك
            <br />
            <span className="text-amber-400">في دمشق</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
             نحن في الناصر للعقارات نقدم لك أفضل العقارات في دمشق بأسعار تنافسية وخدمة عملاء متميزة لسنا الوحيدين لاكننا الافضل
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">نوع العقار</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchFilters.type}
                  onChange={(e) => setSearchFilters({...searchFilters, type: e.target.value})}
                >
                  <option value="">جميع الأنواع</option>
                  <option value="apartment">شقة</option>
                  <option value="house">منزل</option>
                  <option value="villa">فيلا</option>
                  <option value="office">مكتب</option>
                  <option value="shop">محل تجاري</option>
                  <option value="land">أرض</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">السعر من</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchFilters.minPrice}
                  onChange={(e) => setSearchFilters({...searchFilters, minPrice: e.target.value})}
                >
                  <option value="">أي سعر</option>
                  <option value="50000000">50 مليون</option>
                  <option value="100000000">100 مليون</option>
                  <option value="150000000">150 مليون</option>
                  <option value="200000000">200 مليون</option>
                  <option value="300000000">300 مليون</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">السعر إلى</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchFilters.maxPrice}
                  onChange={(e) => setSearchFilters({...searchFilters, maxPrice: e.target.value})}
                >
                  <option value="">أي سعر</option>
                  <option value="100000000">100 مليون</option>
                  <option value="200000000">200 مليون</option>
                  <option value="300000000">300 مليون</option>
                  <option value="500000000">500 مليون</option>
                  <option value="1000000000">مليار</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">المنطقة</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters({...searchFilters,location: e.target.value})}
                >
                  <option value="جميع المناطق">جميع المناطق</option>
                  <option value="مزة">المزة</option>
                  <option value="ابو رمانة">أبو رمانة</option>
                  <option value="المالكي">المالكي</option>
                  <option value="القصاع">القصاع</option>
                  <option value="الشعلان">الشعلان</option>
                  <option value="باب توما">باب توما</option>
                  <option value="القيمرية">القيمرية</option>
                  <option value="كفرسوسة">كفرسوسة</option>
                  <option value="دمر">دمر</option>
                  <option value="قدسيا">قدسيا</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-amber-500 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Search size={20} />
              <span>ابحث عن العقار المناسب</span>
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">500+</div>
            <div className="text-blue-100">عقار متاح</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">15+</div>
            <div className="text-blue-100">سنة خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">1000+</div>
            <div className="text-blue-100">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-blue-100">معدل الرضا</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;