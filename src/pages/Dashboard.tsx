import { Header } from '@/components/Header';
import { WeatherCard } from '@/components/WeatherCard';
import { CropStatusCard } from '@/components/CropStatusCard';
import { QuickActions } from '@/components/QuickActions';
import { MarketPricesCard } from '@/components/MarketPricesCard';
import { AlertsCard } from '@/components/AlertsCard';
import { BottomNav } from '@/components/BottomNav';
import { mockWeatherData, mockMarketPrices, mockAlerts } from '@/data/mockData';

const Dashboard = () => {
  const farmerName = localStorage.getItem('farmerName') || 'Farmer';

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <Header farmerName={farmerName} />
      
      {/* Main content */}
      <main className="px-4 md:px-8 lg:px-16 -mt-4 max-w-7xl mx-auto">
        {/* Desktop: Grid Layout */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {/* Left Column - Weather & Crop Status */}
          <div className="space-y-4 md:space-y-6">
            <WeatherCard weather={mockWeatherData} className="animate-fade-in" />
            <CropStatusCard 
              cropName="Rice (धान)"
              daysToHarvest={45}
              health="good"
              className="animate-fade-in [animation-delay:0.1s]"
            />
          </div>
          
          {/* Middle Column - Quick Actions & Market Prices */}
          <div className="mt-4 md:mt-0 space-y-4 md:space-y-6">
            <div className="animate-fade-in [animation-delay:0.2s]">
              <h2 className="text-lg font-bold text-foreground mb-3">Quick Actions</h2>
              <QuickActions />
            </div>
            <MarketPricesCard 
              prices={mockMarketPrices} 
              className="animate-fade-in [animation-delay:0.3s]"
            />
          </div>
          
          {/* Right Column - Alerts (Full width on tablet) */}
          <div className="mt-4 lg:mt-0 md:col-span-2 lg:col-span-1">
            <AlertsCard 
              alerts={mockAlerts}
              className="animate-fade-in [animation-delay:0.4s]"
            />
          </div>
        </div>
      </main>
      
      {/* Bottom Nav - Mobile Only */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default Dashboard;
