export interface Farmer {
  id: string;
  name: string;
  mobile: string;
  village: string;
  state: string;
  cropType: CropType;
  landSize: number;
  createdAt: Date;
}

export type CropType = 
  | 'rice'
  | 'wheat'
  | 'cotton'
  | 'maize'
  | 'sugarcane'
  | 'soybean'
  | 'groundnut'
  | 'pulses';

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  forecast: string;
  advisory: string;
}

export interface MarketPrice {
  id: string;
  crop: string;
  price: number;
  mandi: string;
  change: number;
  lastUpdated: Date;
}

export interface Alert {
  id: string;
  type: 'weather' | 'market' | 'crop' | 'general';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'critical';
  timestamp: Date;
  isRead: boolean;
}

export interface FertilizerRecommendation {
  urea: number;
  dap: number;
  potash: number;
  totalCost: number;
}

export const CROP_LABELS: Record<CropType, string> = {
  rice: 'Rice (धान)',
  wheat: 'Wheat (गेहूं)',
  cotton: 'Cotton (कपास)',
  maize: 'Maize (मक्का)',
  sugarcane: 'Sugarcane (गन्ना)',
  soybean: 'Soybean (सोयाबीन)',
  groundnut: 'Groundnut (मूंगफली)',
  pulses: 'Pulses (दाल)',
};

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Bihar',
  'Gujarat',
  'Haryana',
  'Karnataka',
  'Madhya Pradesh',
  'Maharashtra',
  'Punjab',
  'Rajasthan',
  'Tamil Nadu',
  'Telangana',
  'Uttar Pradesh',
  'West Bengal',
];
