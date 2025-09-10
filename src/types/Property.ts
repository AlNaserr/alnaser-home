export interface PropertyFeatures {
  bedrooms?: number;
  bathrooms?: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'apartment' | 'house' | 'villa' | 'office' | 'shop' | 'land';
  status: 'for-sale' | 'for-rent';
  area?: number;
  yearBuilt?: number;
  features?: PropertyFeatures;
  amenities?: string[];
  images: string[];
  whatsappNumber: string;
}