import { Property } from '../types/Property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'شقة فاخرة في المزة',
    description: 'شقة رائعة مؤثثة بالكامل في قلب منطقة المزة الراقية، تتميز بإطلالة ساحرة على الجبال وتصميم عصري أنيق. الشقة مجهزة بأحدث التقنيات والأجهزة المنزلية عالية الجودة.',
    price: 250000000,
    location: 'المزة - دمشق',
    type: 'apartment',
    status: 'for-sale',
    area: 150,
    yearBuilt: 2020,
    features: {
      bedrooms: 3,
      bathrooms: 2
    },
    amenities: [
      'مصعد',
      'جراج خاص',
      'بلكونة واسعة',
      'تدفئة مركزية',
      'أمن وحراسة 24/7',
      'حديقة مشتركة'
    ],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '2',
    title: 'فيلا مع حديقة في قدسيا',
    description: 'فيلا مستقلة رائعة في منطقة قدسيا الهادئة، تحاط بحديقة غناء وتتمتع بخصوصية تامة. البيت مبني على أحدث الطرز المعمارية ويوفر مساحات واسعة للعائلة الكبيرة.',
    price: 800000000,
    location: 'قدسيا - دمشق',
    type: 'villa',
    status: 'for-sale',
    area: 350,
    yearBuilt: 2019,
    features: {
      bedrooms: 5,
      bathrooms: 4
    },
    amenities: [
      'حديقة خاصة كبيرة',
      'مسبح خاص',
      'جراج لسيارتين',
      'غرفة للضيوف',
      'مطبخ واسع مجهز',
      'تراس وبرغولة',
      'نظام أمني متطور'
    ],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '3',
    title: 'محل تجاري في الشعلان',
    description: 'محل تجاري في موقع استراتيجي ممتاز في منطقة الشعلان التجارية النابضة بالحياة. المحل يقع على الشارع الرئيسي مما يضمن حركة مرور عالية وإقبال كبير من الزبائن.',
    price: 180000000,
    location: 'الشعلان - دمشق',
    type: 'shop',
    status: 'for-sale',
    area: 80,
    yearBuilt: 2018,
    amenities: [
      'واجهة زجاجية كبيرة',
      'إطلالة على الشارع الرئيسي',
      'دورة مياه',
      'تكييف مركزي',
      'إضاءة ممتازة',
      'سهولة الوصول',
      'مواقف سيارات قريبة'
    ],
    images: [
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '4',
    title: 'شقة للإيجار في أبو رمانة',
    description: 'شقة أنيقة ومريحة للإيجار في منطقة أبو رمانة المرموقة، قريبة من جميع الخدمات والمرافق الحيوية. الشقة مؤثثة بذوق رفيع وجاهزة للسكن الفوري.',
    price: 30000000,
    location: 'أبو رمانة - دمشق',
    type: 'apartment',
    status: 'for-rent',
    area: 120,
    yearBuilt: 2021,
    features: {
      bedrooms: 2,
      bathrooms: 2
    },
    amenities: [
      'مؤثث بالكامل',
      'تكييف في كل الغرف',
      'انترنت عالي السرعة',
      'أجهزة منزلية حديثة',
      'بلكونة مطلة على الحديقة',
      'موقع مركزي ممتاز'
    ],
    images: [
      'https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '5',
    title: 'مكتب إداري في المالكي',
    description: 'مكتب إداري حديث في برج تجاري راقي في منطقة المالكي، مناسب للشركات والمكاتب المهنية. المكتب يتميز بإطلالة بانورامية رائعة على المدينة وتصميم معماري متطور.',
    price: 120000000,
    location: 'المالكي - دمشق',
    type: 'office',
    status: 'for-sale',
    area: 100,
    yearBuilt: 2022,
    amenities: [
      'مصاعد سريعة',
      'إطلالة بانورامية',
      'تكييف مركزي',
      'إنترنت عالي السرعة',
      'أمن وحراسة',
      'مواقف سيارات مؤمنة',
      'استقبال راقي'
    ],
    images: [
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '6',
    title: 'منزل تراثي في باب توما',
    description: 'منزل دمشقي أصيل في منطقة باب توما التاريخية، يجمع بين الأصالة والعراقة مع التجديدات الحديثة. المنزل يتميز بفناء داخلي جميل وتفاصيل معمارية تراثية ساحرة.',
    price: 400000000,
    location: 'باب توما - دمشق القديمة',
    type: 'house',
    status: 'for-sale',
    area: 200,
    yearBuilt: 1920,
    features: {
      bedrooms: 4,
      bathrooms: 3
    },
    amenities: [
      'فناء داخلي أصيل',
      'تصميم دمشقي تراثي',
      'أسقف خشبية مزخرفة',
      'نافورة وسط الفناء',
      'موقع تاريخي متميز',
      'قرب من الأسواق التراثية'
    ],
    images: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '7',
    title: 'أرض للبناء في دمر',
    description: 'قطعة أرض مميزة للبناء في منطقة دمر الراقية، تتمتع بموقع استراتيجي وإطلالة جميلة على المناطق المحيطة. الأرض مناسبة لبناء فيلا أو مشروع سكني صغير.',
    price: 150000000,
    location: 'دمر - دمشق',
    type: 'land',
    status: 'for-sale',
    area: 500,
    amenities: [
      'إطلالة ممتازة',
      'طريق معبد',
      'جميع الخدمات متوفرة',
      'كهرباء ومياه',
      'منطقة هادئة وآمنة',
      'قرب من المرافق الحيوية'
    ],
    images: [
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '8',
    title: 'شقة عائلية في كفرسوسة',
    description: 'شقة واسعة ومناسبة للعائلات الكبيرة في منطقة كفرسوسة الحيوية، تتميز بمساحات واسعة وتوزيع ممتاز للغرف. الشقة قريبة من المدارس والمستشفيات ومراكز التسوق.',
    price: 200000000,
    location: 'كفرسوسة - دمشق',
    type: 'apartment',
    status: 'for-sale',
    area: 180,
    yearBuilt: 2019,
    features: {
      bedrooms: 4,
      bathrooms: 3
    },
    amenities: [
      'غرف واسعة ومريحة',
      'مطبخ كبير ومجهز',
      'صالون واستقبال منفصلين',
      'بلكونات متعددة',
      'تدفئة مركزية',
      'موقع حيوي ومميز'
    ],
    images: [
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  },
  {
    id: '9',
    title: 'فيلا حديثة في القصاع',
    description: 'فيلا عصرية مصممة على أحدث الطرز المعمارية في منطقة القصاع الراقية، تتميز بحديقة واسعة ومرافق حديثة. الفيلا تناسب العائلات التي تبحث عن الرفاهية والخصوصية.',
    price: 650000000,
    location: 'القصاع - دمشق',
    type: 'villa',
    status: 'for-sale',
    area: 300,
    yearBuilt: 2023,
    features: {
      bedrooms: 4,
      bathrooms: 4
    },
    amenities: [
      'تصميم معماري حديث',
      'حديقة ومساحات خضراء',
      'مسبح صيفي',
      'جراج مغطى لسيارتين',
      'غرفة خادمة منفصلة',
      'نظام أمني متطور',
      'إطلالة رائعة'
    ],
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '963123456789'
  }
];