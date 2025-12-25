import { Sprout, Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  farmerName?: string;
  className?: string;
}

export function Header({ farmerName = 'Farmer', className }: HeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <header className={cn("gradient-hero text-primary-foreground p-6 pb-8", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Sprout className="w-6 h-6" />
          </div>
          <span className="font-bold text-lg">KisanMitra</span>
        </div>
        <button className="relative p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-primary" />
        </button>
      </div>
      
      <div>
        <p className="text-primary-foreground/80 text-sm">{getGreeting()},</p>
        <h1 className="text-2xl font-extrabold">{farmerName} 👋</h1>
      </div>
    </header>
  );
}
