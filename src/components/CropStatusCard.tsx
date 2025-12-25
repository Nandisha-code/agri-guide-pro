import { Sprout, Calendar, Droplet, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CropStatusCardProps {
  cropName: string;
  daysToHarvest: number;
  health: 'good' | 'moderate' | 'poor';
  className?: string;
}

const healthColors = {
  good: 'text-success',
  moderate: 'text-warning',
  poor: 'text-destructive',
};

const healthLabels = {
  good: 'Healthy',
  moderate: 'Needs Attention',
  poor: 'Critical',
};

export function CropStatusCard({ cropName, daysToHarvest, health, className }: CropStatusCardProps) {
  return (
    <div className={cn("card-agricultural p-6 overflow-hidden relative", className)}>
      {/* Background decoration */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full" />
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="icon-circle bg-primary/20 text-primary">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-foreground">{cropName}</h3>
            <p className={cn("text-sm font-semibold", healthColors[health])}>
              {healthLabels[health]}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-muted/50 rounded-xl text-center">
            <Calendar className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <p className="font-bold text-foreground">{daysToHarvest}</p>
            <p className="text-xs text-muted-foreground">Days Left</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-xl text-center">
            <Droplet className="w-4 h-4 mx-auto mb-1 text-info" />
            <p className="font-bold text-foreground">Good</p>
            <p className="text-xs text-muted-foreground">Water</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-xl text-center">
            <Sun className="w-4 h-4 mx-auto mb-1 text-secondary" />
            <p className="font-bold text-foreground">6h</p>
            <p className="text-xs text-muted-foreground">Sunlight</p>
          </div>
        </div>
      </div>
    </div>
  );
}
