import { TrendingUp, TrendingDown, MapPin, RefreshCw } from 'lucide-react';
import { MarketPrice } from '@/types/farmer';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface MarketPricesCardProps {
  prices: MarketPrice[];
  className?: string;
}

export function MarketPricesCard({ prices, className }: MarketPricesCardProps) {
  return (
    <div className={cn("card-agricultural p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-foreground">Market Prices</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-3">
        {prices.slice(0, 4).map((price) => (
          <div
            key={price.id}
            className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <div className="flex-1">
              <p className="font-bold text-foreground">{price.crop}</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{price.mandi}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">₹{price.price.toLocaleString()}</p>
              <div className={cn(
                "flex items-center gap-1 text-sm font-semibold",
                price.change >= 0 ? "text-success" : "text-destructive"
              )}>
                {price.change >= 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{price.change >= 0 ? '+' : ''}{price.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-center text-muted-foreground mt-4">
        Prices per quintal • Updated hourly
      </p>
    </div>
  );
}
