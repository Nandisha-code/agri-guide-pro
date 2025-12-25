import { Home, TrendingUp, Calculator, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
  { id: 'prices', label: 'Prices', icon: TrendingUp, path: '/prices' },
  { id: 'calculator', label: 'Calculate', icon: Calculator, path: '/calculator' },
  { id: 'alerts', label: 'Alerts', icon: Bell, path: '/alerts' },
  { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
];

export function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("w-6 h-6 mb-1", isActive && "animate-bounce-gentle")} />
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
