import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, ArrowRight, Sun, CloudRain, TrendingUp, Calculator, CheckCircle } from 'lucide-react';
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

  const features = [
    { icon: Sun, title: 'Weather Alerts', description: 'Get real-time weather updates and sowing recommendations' },
    { icon: TrendingUp, title: 'Market Prices', description: 'Track mandi prices and find best selling opportunities' },
    { icon: Calculator, title: 'Fertilizer Calculator', description: 'Calculate exact fertilizer quantities for your land' },
    { icon: CloudRain, title: 'Crop Advisory', description: 'Receive personalized farming advice and alerts' },
  ];

  const benefits = [
    'Weather-based sowing guidance',
    'Real-time mandi price visibility',
    'WhatsApp notifications',
    'Works on any device',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar - Desktop */}
      <nav className="hidden md:flex items-center justify-between px-8 lg:px-16 py-4 bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Sprout className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-foreground">Crop-Intel</h1>
            <p className="text-muted-foreground text-xs">ಕ್ರಾಪ್-ಇಂಟೆಲ್</p>
          </div>
        </div>
        <Button variant="farmer" onClick={() => navigate('/register')}>
          Get Started <ArrowRight className="w-4 h-4" />
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 gradient-hero opacity-95" />
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 md:w-96 md:h-96 bg-info/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 px-6 md:px-8 lg:px-16 pt-12 pb-20 md:pb-28 text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Logo */}
            <div className="flex md:hidden items-center gap-3 mb-12">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <Sprout className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold">Crop-Intel</h1>
                <p className="text-primary-foreground/80 text-sm">ಕ್ರಾಪ್-ಇಂಟೆಲ್</p>
              </div>
            </div>

            {/* Hero Content - Desktop: Side by side */}
            <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6">
                  Smart Farming,<br />
                  <span className="text-secondary">Better Harvest</span>
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 md:mb-8 max-w-lg">
                  Your digital assistant for weather updates, market prices, and farming advice. Make data-driven decisions for your crops.
                </p>
                
                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4 mb-8">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg px-8"
                    onClick={() => navigate('/register')}
                  >
                    Start Free <ArrowRight className="w-5 h-5" />
                  </Button>
                  <p className="text-primary-foreground/70 text-sm">
                    Free for all farmers
                  </p>
                </div>

                {/* Benefits List - Desktop */}
                <ul className="hidden md:grid grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-primary-foreground/90">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature Cards - Right side on desktop */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8 md:mt-0">
                {features.map((feature, i) => (
                  <div key={i} className="bg-primary-foreground/10 rounded-xl p-4 md:p-6 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 text-secondary" />
                    <p className="font-semibold text-sm md:text-base">{feature.title}</p>
                    <p className="hidden md:block text-xs text-primary-foreground/70 mt-1">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Mobile */}
      <main className="px-6 md:px-8 lg:px-16 -mt-8 md:hidden">
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
            Free for all farmers • Available in Kannada & English
          </p>
        </div>
      </main>

      {/* Stats Section */}
      <section className="px-6 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
            <div className="text-center md:p-6 md:card-agricultural">
              <p className="text-2xl md:text-5xl font-extrabold text-primary">10K+</p>
              <p className="text-xs md:text-base text-muted-foreground">Farmers Registered</p>
            </div>
            <div className="text-center md:p-6 md:card-agricultural">
              <p className="text-2xl md:text-5xl font-extrabold text-primary">50+</p>
              <p className="text-xs md:text-base text-muted-foreground">Districts Covered</p>
            </div>
            <div className="text-center md:p-6 md:card-agricultural">
              <p className="text-2xl md:text-5xl font-extrabold text-primary">8</p>
              <p className="text-xs md:text-base text-muted-foreground">Crops Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail - Desktop Only */}
      <section className="hidden md:block px-8 lg:px-16 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-foreground mb-4">Everything You Need</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From weather forecasts to market prices, get all the tools you need to make smart farming decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card-agricultural p-6 text-center hover:shadow-card transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Desktop */}
      <section className="hidden md:block px-8 lg:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of farmers who are already making smarter decisions with KisanMitra.
          </p>
          <Button variant="farmer" size="lg" className="text-lg px-12" onClick={() => navigate('/register')}>
            Register Now - It's Free <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 lg:px-16 py-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Crop-Intel</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            🇮🇳 Made for Indian Farmers • Secure & Private
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
