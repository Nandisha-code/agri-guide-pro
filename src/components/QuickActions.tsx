import { Calculator, TrendingUp, CloudSun, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface QuickActionsProps {
  className?: string;
}

const actions = [
  {
    id: 'calculator',
    title: 'Fertilizer Calculator',
    description: 'Get exact quantities',
    icon: Calculator,
    color: 'bg-success/20 text-success',
    path: '/calculator',
  },
  {
    id: 'prices',
    title: 'Market Prices',
    description: 'Check mandi rates',
    icon: TrendingUp,
    color: 'bg-secondary/20 text-secondary',
    path: '/prices',
  },
  {
    id: 'weather',
    title: 'Weather Forecast',
    description: '7-day predictions',
    icon: CloudSun,
    color: 'bg-info/20 text-info',
    path: '/weather',
  },
  {
    id: 'whatsapp',
    title: 'Get WhatsApp Alerts',
    description: 'Daily notifications',
    icon: MessageSquare,
    color: 'bg-primary/20 text-primary',
    path: '/alerts',
  },
];

export function QuickActions({ className }: QuickActionsProps) {
  const navigate = useNavigate();

  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => navigate(action.path)}
          className="card-agricultural p-4 text-left hover:shadow-card transition-all group"
        >
          <div className={cn("icon-circle mb-3", action.color)}>
            <action.icon className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-foreground mb-1 flex items-center gap-1">
            {action.title}
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h4>
          <p className="text-sm text-muted-foreground">{action.description}</p>
        </button>
      ))}
    </div>
  );
}
