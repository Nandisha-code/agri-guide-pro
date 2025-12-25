import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, ArrowRight, Sun, CloudRain, TrendingUp, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  // Check if user is already registered
  useEffect(() => {
    const farmerName = localStorage.getItem('farmerName');
    if (farmerName) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-info/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 px-6 pt-12 pb-20 text-primary-foreground">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <Sprout className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">KisanMitra</h1>
              <p className="text-primary-foreground/80 text-sm">किसान मित्र</p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="mb-8">
            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Smart Farming,<br />
              <span className="text-secondary">Better Harvest</span>
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Your digital assistant for weather updates, market prices, and farming advice.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <Sun className="w-6 h-6 mb-2 text-secondary" />
              <p className="font-semibold text-sm">Weather Alerts</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <TrendingUp className="w-6 h-6 mb-2 text-secondary" />
              <p className="font-semibold text-sm">Market Prices</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <Calculator className="w-6 h-6 mb-2 text-secondary" />
              <p className="font-semibold text-sm">Fertilizer Calculator</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <CloudRain className="w-6 h-6 mb-2 text-secondary" />
              <p className="font-semibold text-sm">Crop Advisory</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <main className="px-6 -mt-8">
        <div className="card-agricultural p-6 shadow-card">
          <h3 className="text-xl font-bold text-foreground mb-2">Start Your Journey</h3>
          <p className="text-muted-foreground mb-6">
            Register once and get personalized farming advice delivered to your phone.
          </p>
          
          <Button
            variant="farmer"
            className="w-full mb-3"
            onClick={() => navigate('/register')}
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            Free for all farmers • Available in Hindi & English
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 mb-8">
          <div className="text-center">
            <p className="text-2xl font-extrabold text-primary">10K+</p>
            <p className="text-xs text-muted-foreground">Farmers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-primary">50+</p>
            <p className="text-xs text-muted-foreground">Districts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-extrabold text-primary">8</p>
            <p className="text-xs text-muted-foreground">Crops</p>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center py-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            🇮🇳 Made for Indian Farmers • Secure & Private
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
