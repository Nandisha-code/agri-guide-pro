import { Header } from '@/components/Header';
import { WeatherCard } from '@/components/WeatherCard';
import { CropStatusCard } from '@/components/CropStatusCard';
import { QuickActions } from '@/components/QuickActions';
import { MarketPricesCard } from '@/components/MarketPricesCard';
import { AlertsCard } from '@/components/AlertsCard';
import { BottomNav } from '@/components/BottomNav';
import { mockWeatherData, mockMarketPrices, mockAlerts } from '@/data/mockData';

const Dashboard = () => {
  // This would come from auth/context in real app
  const farmerName = localStorage.getItem('farmerName') || 'Farmer';

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header farmerName={farmerName} />
      
      {/* Main content with negative margin for overlap effect */}
      <main className="px-4 -mt-4 space-y-4">
        {/* Weather Card */}
        <WeatherCard weather={mockWeatherData} className="animate-fade-in" />
        
        {/* Crop Status */}
        <CropStatusCard 
          cropName="Rice (धान)"
          daysToHarvest={45}
          health="good"
          className="animate-fade-in [animation-delay:0.1s]"
        />
        
        {/* Quick Actions */}
        <div className="animate-fade-in [animation-delay:0.2s]">
          <h2 className="text-lg font-bold text-foreground mb-3">Quick Actions</h2>
          <QuickActions />
        </div>
        
        {/* Market Prices */}
        <MarketPricesCard 
          prices={mockMarketPrices} 
          className="animate-fade-in [animation-delay:0.3s]"
        />
        
        {/* Alerts */}
        <AlertsCard 
          alerts={mockAlerts}
          className="animate-fade-in [animation-delay:0.4s]"
        />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Dashboard;
