import { ArrowLeft, Cloud, Droplets, Sun, CloudRain, Wind, Thermometer, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';
import { cn } from '@/lib/utils';

const weekForecast = [
  { day: 'Today', icon: Cloud, temp: 32, condition: 'Cloudy', rain: '40%' },
  { day: 'Tomorrow', icon: CloudRain, temp: 28, condition: 'Rainy', rain: '80%' },
  { day: 'Wed', icon: CloudRain, temp: 27, condition: 'Heavy Rain', rain: '90%' },
  { day: 'Thu', icon: Cloud, temp: 29, condition: 'Cloudy', rain: '30%' },
  { day: 'Fri', icon: Sun, temp: 33, condition: 'Sunny', rain: '10%' },
  { day: 'Sat', icon: Sun, temp: 34, condition: 'Sunny', rain: '5%' },
  { day: 'Sun', icon: Cloud, temp: 31, condition: 'Partly Cloudy', rain: '20%' },
];

const Weather = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with weather background */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-sky opacity-90" />
        <div className="relative z-10 p-6 text-accent-foreground">
          <div className="flex items-center gap-3 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="text-accent-foreground hover:bg-accent-foreground/20"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Weather Forecast</h1>
              <p className="text-accent-foreground/80 text-sm">7-day predictions</p>
            </div>
          </div>

          {/* Current Weather */}
          <div className="text-center py-6">
            <Cloud className="w-20 h-20 mx-auto mb-4 animate-bounce-gentle" />
            <p className="text-6xl font-extrabold mb-2">32°C</p>
            <p className="text-xl">Partly Cloudy</p>
            <p className="text-accent-foreground/80">Feels like 35°C</p>
          </div>

          {/* Weather Stats */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="bg-accent-foreground/20 rounded-xl p-3 text-center">
              <Droplets className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">65%</p>
              <p className="text-xs opacity-80">Humidity</p>
            </div>
            <div className="bg-accent-foreground/20 rounded-xl p-3 text-center">
              <Wind className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">12 km/h</p>
              <p className="text-xs opacity-80">Wind</p>
            </div>
            <div className="bg-accent-foreground/20 rounded-xl p-3 text-center">
              <CloudRain className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">40%</p>
              <p className="text-xs opacity-80">Rain</p>
            </div>
            <div className="bg-accent-foreground/20 rounded-xl p-3 text-center">
              <Eye className="w-5 h-5 mx-auto mb-1" />
              <p className="text-sm font-bold">8 km</p>
              <p className="text-xs opacity-80">Visibility</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 -mt-4 space-y-4">
        {/* Advisory */}
        <div className="card-agricultural p-4">
          <div className="flex items-start gap-3">
            <div className="icon-circle w-10 h-10 bg-warning/20 text-warning">
              <CloudRain className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-foreground">Rain Alert</p>
              <p className="text-sm text-muted-foreground">
                Heavy rainfall expected in next 48 hours. Ideal for sowing if fields are prepared.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Day Forecast */}
        <div className="card-agricultural p-6">
          <h3 className="font-bold text-foreground mb-4">7-Day Forecast</h3>
          <div className="space-y-3">
            {weekForecast.map((day, index) => (
              <div
                key={day.day}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl transition-all animate-fade-in",
                  index === 0 ? "bg-primary/10" : "bg-muted/30"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16">
                  <p className={cn(
                    "font-semibold",
                    index === 0 ? "text-primary" : "text-foreground"
                  )}>
                    {day.day}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <day.icon className={cn(
                    "w-6 h-6",
                    day.condition.includes('Rain') ? "text-info" : "text-secondary"
                  )} />
                  <span className="text-sm text-muted-foreground w-24">{day.condition}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-info" />
                  <span className="text-sm text-muted-foreground w-10">{day.rain}</span>
                </div>
                <p className="font-bold text-lg text-foreground">{day.temp}°</p>
              </div>
            ))}
          </div>
        </div>

        {/* Farming Advisory */}
        <div className="card-agricultural p-6">
          <h3 className="font-bold text-foreground mb-3">🌾 Farming Advisory</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Prepare fields for sowing before rain arrives
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Ensure proper drainage to prevent waterlogging
            </li>
            <li className="flex items-start gap-2">
              <span className="text-warning">!</span>
              Avoid pesticide spraying during rainy period
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Good time for paddy transplanting after rain
            </li>
          </ul>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Weather;
