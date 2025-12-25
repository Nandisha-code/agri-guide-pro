import { useState } from 'react';
import { Calculator, Leaf, FlaskConical, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { CropType, CROP_LABELS, FertilizerRecommendation } from '@/types/farmer';
import { fertilizerRules, fertilizerPrices } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface FertilizerCalculatorProps {
  className?: string;
}

export function FertilizerCalculator({ className }: FertilizerCalculatorProps) {
  const [cropType, setCropType] = useState<CropType>('rice');
  const [landSize, setLandSize] = useState<string>('');
  const [result, setResult] = useState<FertilizerRecommendation | null>(null);

  const calculateFertilizer = () => {
    const acres = parseFloat(landSize);
    if (isNaN(acres) || acres <= 0) return;

    const rules = fertilizerRules[cropType];
    const urea = Math.round(rules.urea * acres);
    const dap = Math.round(rules.dap * acres);
    const potash = Math.round(rules.potash * acres);
    
    const totalCost = Math.round(
      urea * fertilizerPrices.urea +
      dap * fertilizerPrices.dap +
      potash * fertilizerPrices.potash
    );

    setResult({ urea, dap, potash, totalCost });
  };

  return (
    <div className={cn("card-agricultural p-6", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="icon-circle bg-success/20 text-success">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">Fertilizer Calculator</h3>
          <p className="text-sm text-muted-foreground">Get exact quantities for your land</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {/* Crop Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Select Crop
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(Object.keys(CROP_LABELS) as CropType[]).map((crop) => (
              <button
                key={crop}
                onClick={() => setCropType(crop)}
                className={cn(
                  "p-3 rounded-xl text-sm font-medium transition-all border-2",
                  cropType === crop
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 text-foreground border-transparent hover:border-primary/30"
                )}
              >
                {CROP_LABELS[crop].split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Land Size Input */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Land Size (Acres)
          </label>
          <input
            type="number"
            value={landSize}
            onChange={(e) => setLandSize(e.target.value)}
            placeholder="Enter land size"
            className="w-full h-14 px-4 text-lg rounded-xl border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <Button
          variant="farmer"
          className="w-full"
          onClick={calculateFertilizer}
          disabled={!landSize || parseFloat(landSize) <= 0}
        >
          <Sparkles className="w-5 h-5" />
          Calculate Fertilizer
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4 animate-fade-in">
          <div className="p-4 bg-success/10 border border-success/30 rounded-xl">
            <p className="text-sm font-semibold text-success mb-1">Recommended Fertilizer</p>
            <p className="text-xs text-muted-foreground">
              For {landSize} acres of {CROP_LABELS[cropType]}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <p className="stat-value text-2xl">{result.urea}</p>
              <p className="text-sm text-muted-foreground">kg Urea</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary/20 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-secondary" />
              </div>
              <p className="stat-value text-2xl">{result.dap}</p>
              <p className="text-sm text-muted-foreground">kg DAP</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-info/20 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-info" />
              </div>
              <p className="stat-value text-2xl">{result.potash}</p>
              <p className="text-sm text-muted-foreground">kg Potash</p>
            </div>
          </div>

          <div className="p-4 gradient-sunset rounded-xl text-center">
            <p className="text-sm font-medium text-secondary-foreground/80">Estimated Cost</p>
            <p className="stat-value text-secondary-foreground">₹{result.totalCost.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
