import { Cloud, Droplets, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';
import { WeatherData } from '@/types/farmer';
import { cn } from '@/lib/utils';

interface WeatherCardProps {
  weather: WeatherData;
  className?: string;
}

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  stormy: Wind,
};

export function WeatherCard({ weather, className }: WeatherCardProps) {
  const WeatherIcon = weatherIcons[weather.condition];

  return (
    <div className={cn("card-agricultural p-6 overflow-hidden relative", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-sky opacity-10" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Today's Weather</h3>
          <span className="text-sm text-muted-foreground">Live</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="icon-circle bg-info/20 text-info">
            <WeatherIcon className="w-7 h-7" />
          </div>
          <div>
            <p className="stat-value text-foreground">{weather.temperature}°C</p>
            <p className="text-muted-foreground capitalize">{weather.condition}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
            <Droplets className="w-5 h-5 text-info" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="font-bold">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
            <CloudRain className="w-5 h-5 text-info" />
            <div>
              <p className="text-sm text-muted-foreground">Rainfall</p>
              <p className="font-bold">{weather.rainfall}mm</p>
            </div>
          </div>
        </div>

        {/* Forecast & Advisory */}
        <div className="space-y-3">
          <div className="p-3 bg-warning/10 border border-warning/30 rounded-xl">
            <p className="text-sm font-semibold text-warning">📅 {weather.forecast}</p>
          </div>
          <div className="p-3 bg-success/10 border border-success/30 rounded-xl">
            <p className="text-sm text-success">💡 {weather.advisory}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
