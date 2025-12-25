import { ArrowLeft, Search, TrendingUp, TrendingDown, MapPin, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';
import { mockMarketPrices } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Prices = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPrices = mockMarketPrices.filter(
    (price) =>
      price.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      price.mandi.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="gradient-hero text-primary-foreground p-6 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Market Prices</h1>
            <p className="text-primary-foreground/80 text-sm">Live mandi rates</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <RefreshCw className="w-5 h-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search crop or mandi..."
            className="w-full h-14 pl-12 pr-4 text-lg rounded-xl bg-card text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </header>

      <main className="px-4 -mt-4">
        {/* Price Summary */}
        <div className="card-agricultural p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Best Price Today</p>
              <p className="text-2xl font-extrabold text-success">₹6,800/q</p>
              <p className="text-sm text-foreground">Cotton at Guntur</p>
            </div>
            <div className="icon-circle bg-success/20 text-success">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Price List */}
        <div className="space-y-3">
          {filteredPrices.map((price, index) => (
            <div
              key={price.id}
              className="card-agricultural p-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg text-foreground">{price.crop}</h3>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs font-semibold",
                      price.change >= 0 
                        ? "bg-success/20 text-success" 
                        : "bg-destructive/20 text-destructive"
                    )}>
                      {price.change >= 0 ? '+' : ''}{price.change}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{price.mandi}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-foreground">
                    ₹{price.price.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">per quintal</p>
                </div>
              </div>

              {/* Price trend visualization */}
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  {price.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all",
                        price.change >= 0 ? "bg-success" : "bg-destructive"
                      )}
                      style={{ width: `${Math.min(Math.abs(price.change) + 30, 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {price.change >= 0 ? 'Rising' : 'Falling'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPrices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No prices found for "{searchTerm}"</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Prices;
