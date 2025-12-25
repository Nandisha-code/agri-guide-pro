import { Bell, CloudRain, TrendingUp, Sprout, Info, AlertTriangle, AlertCircle } from 'lucide-react';
import { Alert } from '@/types/farmer';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface AlertsCardProps {
  alerts: Alert[];
  className?: string;
}

const alertTypeIcons = {
  weather: CloudRain,
  market: TrendingUp,
  crop: Sprout,
  general: Info,
};

const severityStyles = {
  info: 'bg-info/10 border-info/30 text-info',
  warning: 'bg-warning/10 border-warning/30 text-warning',
  critical: 'bg-destructive/10 border-destructive/30 text-destructive',
};

const severityIcons = {
  info: Info,
  warning: AlertTriangle,
  critical: AlertCircle,
};

export function AlertsCard({ alerts, className }: AlertsCardProps) {
  const unreadCount = alerts.filter(a => !a.isRead).length;

  return (
    <div className={cn("card-agricultural p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-foreground">Alerts</h3>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        <Bell className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const TypeIcon = alertTypeIcons[alert.type];
          const SeverityIcon = severityIcons[alert.severity];
          
          return (
            <div
              key={alert.id}
              className={cn(
                "p-4 rounded-xl border transition-all",
                severityStyles[alert.severity],
                !alert.isRead && "ring-2 ring-offset-2 ring-current/20"
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "icon-circle w-10 h-10 flex-shrink-0",
                  alert.severity === 'info' && "bg-info/20",
                  alert.severity === 'warning' && "bg-warning/20",
                  alert.severity === 'critical' && "bg-destructive/20"
                )}>
                  <TypeIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-bold text-foreground">{alert.title}</p>
                    {!alert.isRead && (
                      <span className="w-2 h-2 bg-current rounded-full animate-pulse-slow" />
                    )}
                  </div>
                  <p className="text-sm text-foreground/80 mb-2">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(alert.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
