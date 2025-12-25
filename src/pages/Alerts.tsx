import { ArrowLeft, Bell, MessageSquare, Check, CheckCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';
import { AlertsCard } from '@/components/AlertsCard';
import { mockAlerts } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Alerts = () => {
  const navigate = useNavigate();
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="gradient-hero text-primary-foreground p-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold">Alerts & Notifications</h1>
            <p className="text-primary-foreground/80 text-sm">Stay updated</p>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-primary-foreground/20 rounded-full">
            <Bell className="w-4 h-4" />
            <span className="text-sm font-semibold">{mockAlerts.filter(a => !a.isRead).length}</span>
          </div>
        </div>
      </header>

      <main className="px-4 -mt-4 space-y-4">
        {/* WhatsApp Integration Card */}
        <div className="card-agricultural p-6">
          <div className="flex items-start gap-4">
            <div className="icon-circle bg-success/20 text-success">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-1">WhatsApp Alerts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get daily weather updates, price alerts, and farming tips directly on WhatsApp
              </p>
              
              <Button
                variant={whatsappEnabled ? "success" : "farmer"}
                className="w-full"
                onClick={() => setWhatsappEnabled(!whatsappEnabled)}
              >
                {whatsappEnabled ? (
                  <>
                    <CheckCheck className="w-5 h-5" />
                    WhatsApp Alerts Enabled
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    Enable WhatsApp Alerts
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Alert Types */}
        <div className="card-agricultural p-6">
          <h3 className="font-bold text-foreground mb-4">Alert Preferences</h3>
          <div className="space-y-3">
            {[
              { id: 'weather', label: 'Weather Warnings', description: 'Rain, storms, temperature changes', enabled: true },
              { id: 'market', label: 'Price Changes', description: 'Significant market movements', enabled: true },
              { id: 'crop', label: 'Crop Reminders', description: 'Sowing, fertilizer, harvest timings', enabled: true },
              { id: 'tips', label: 'Farming Tips', description: 'Expert advice and best practices', enabled: false },
            ].map((pref) => (
              <div key={pref.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-xl">
                <div>
                  <p className="font-semibold text-foreground">{pref.label}</p>
                  <p className="text-xs text-muted-foreground">{pref.description}</p>
                </div>
                <button
                  className={cn(
                    "w-12 h-7 rounded-full transition-all relative",
                    pref.enabled ? "bg-primary" : "bg-muted"
                  )}
                >
                  <span className={cn(
                    "absolute top-1 w-5 h-5 bg-card rounded-full shadow transition-all",
                    pref.enabled ? "right-1" : "left-1"
                  )} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <AlertsCard alerts={mockAlerts} />

        {/* Mark All Read */}
        <Button variant="outline" className="w-full">
          <Check className="w-4 h-4" />
          Mark All as Read
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Alerts;
