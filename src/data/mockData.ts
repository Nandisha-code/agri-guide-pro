import { WeatherData, MarketPrice, Alert } from '@/types/farmer';

export const mockWeatherData: WeatherData = {
  temperature: 32,
  humidity: 65,
  rainfall: 12,
  condition: 'cloudy',
  forecast: 'Rain expected in 2-3 days',
  advisory: 'Best time to prepare fields for sowing. Ensure proper drainage.',
};

export const mockMarketPrices: MarketPrice[] = [
  {
    id: '1',
    crop: 'Rice',
    price: 2180,
    mandi: 'Davangere',
    change: 45,
    lastUpdated: new Date(),
  },
  {
    id: '2',
    crop: 'Wheat',
    price: 2450,
    mandi: 'Indore',
    change: -20,
    lastUpdated: new Date(),
  },
  {
    id: '3',
    crop: 'Maize',
    price: 2150,
    mandi: 'Nizamabad',
    change: 80,
    lastUpdated: new Date(),
  },
  {
    id: '4',
    crop: 'Cotton',
    price: 6800,
    mandi: 'Guntur',
    change: 120,
    lastUpdated: new Date(),
  },
  {
    id: '5',
    crop: 'Soybean',
    price: 4520,
    mandi: 'Ujjain',
    change: -35,
    lastUpdated: new Date(),
  },
];

export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'weather',
    title: 'Rain Alert',
    message: 'Heavy rainfall expected in next 48 hours. Secure your harvest.',
    severity: 'warning',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    isRead: false,
  },
  {
    id: '2',
    type: 'market',
    title: 'Price Increase',
    message: 'Rice prices up by ₹45/quintal in Davangere mandi. Good time to sell.',
    severity: 'info',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    isRead: false,
  },
  {
    id: '3',
    type: 'crop',
    title: 'Sowing Reminder',
    message: 'Optimal sowing window for wheat starts in 5 days.',
    severity: 'info',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    isRead: true,
  },
];

// Fertilizer calculation rules (kg per acre)
export const fertilizerRules: Record<string, { urea: number; dap: number; potash: number }> = {
  rice: { urea: 55, dap: 30, potash: 15 },
  wheat: { urea: 50, dap: 35, potash: 20 },
  cotton: { urea: 45, dap: 40, potash: 25 },
  maize: { urea: 60, dap: 35, potash: 20 },
  sugarcane: { urea: 80, dap: 50, potash: 40 },
  soybean: { urea: 10, dap: 45, potash: 25 },
  groundnut: { urea: 10, dap: 50, potash: 30 },
  pulses: { urea: 10, dap: 40, potash: 20 },
};

// Fertilizer prices (₹ per kg)
export const fertilizerPrices = {
  urea: 6.5,
  dap: 27,
  potash: 18,
};
