import { Sprout, Bell, Home, TrendingUp, CloudSun, Calculator, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from '@/components/NavLink';

interface HeaderProps {
  farmerName?: string;
  className?: string;
}

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/weather', label: 'Weather', icon: CloudSun },
  { to: '/prices', label: 'Prices', icon: TrendingUp },
  { to: '/calculator', label: 'Calculator', icon: Calculator },
  { to: '/profile', label: 'Profile', icon: User },
];

export function Header({ farmerName = 'Farmer', className }: HeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <header className={cn("gradient-hero text-primary-foreground", className)}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-3 border-b border-primary-foreground/10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg">KisanMitra</span>
          </div>
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
                activeClassName="bg-primary-foreground/20 text-primary-foreground"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <button className="relative p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-primary" />
        </button>
      </div>

      {/* Mobile Header & Greeting */}
      <div className="p-6 pb-8 max-w-7xl mx-auto">
        <div className="flex md:hidden items-center justify-between mb-4">
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
          <h1 className="text-2xl md:text-3xl font-extrabold">{farmerName} 👋</h1>
        </div>
      </div>
    </header>
  );
}
