import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FertilizerCalculator } from '@/components/FertilizerCalculator';
import { BottomNav } from '@/components/BottomNav';

const Calculator = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      {/* Header */}
      <header className="gradient-hero text-primary-foreground p-6">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Fertilizer Calculator</h1>
            <p className="text-primary-foreground/80 text-sm">Get exact quantities</p>
          </div>
        </div>
      </header>

      <main className="px-4 md:px-8 lg:px-16 -mt-4 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <FertilizerCalculator />
          
          {/* Tips Section */}
          <div className="mt-4 md:mt-0 card-agricultural p-6">
            <h3 className="font-bold text-foreground mb-3">💡 Fertilizer Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Apply urea in 2-3 split doses for better absorption
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Apply DAP at the time of sowing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Potash helps in grain filling and disease resistance
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Get soil tested every 2-3 years for best results
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};

export default Calculator;
