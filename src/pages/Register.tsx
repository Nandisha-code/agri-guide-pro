import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, User, Phone, MapPin, Map, Wheat, Ruler, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CropType, CROP_LABELS, INDIAN_STATES } from '@/types/farmer';
import { cn } from '@/lib/utils';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    village: '',
    state: '',
    cropType: '' as CropType | '',
    landSize: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = formData.name && formData.mobile && formData.mobile.length === 10;
  const canProceedStep2 = formData.village && formData.state;
  const canProceedStep3 = formData.cropType && formData.landSize;

  const handleSubmit = () => {
    // Save to localStorage for demo (would be API call in real app)
    localStorage.setItem('farmerName', formData.name);
    localStorage.setItem('farmerData', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero text-primary-foreground p-6 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Sprout className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">KisanMitra</h1>
            <p className="text-primary-foreground/80 text-sm">Your Farming Assistant</p>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                step >= s 
                  ? "bg-secondary text-secondary-foreground" 
                  : "bg-primary-foreground/20 text-primary-foreground/60"
              )}>
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 3 && (
                <div className={cn(
                  "flex-1 h-1 rounded-full transition-all",
                  step > s ? "bg-secondary" : "bg-primary-foreground/20"
                )} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form content */}
      <main className="px-4 -mt-6">
        <div className="card-agricultural p-6">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">Welcome! 👋</h2>
                <p className="text-muted-foreground">Let's start with your basic details</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Enter your name"
                    className="w-full h-14 px-4 text-lg rounded-xl border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => updateField('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="10 digit mobile number"
                    className="w-full h-14 px-4 text-lg rounded-xl border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
                  />
                  <p className="text-xs text-muted-foreground mt-1">For WhatsApp alerts</p>
                </div>
              </div>

              <Button
                variant="farmer"
                className="w-full"
                onClick={() => setStep(2)}
                disabled={!canProceedStep1}
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* Step 2: Location */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">Your Location 📍</h2>
                <p className="text-muted-foreground">Help us provide local weather and prices</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Village Name
                  </label>
                  <input
                    type="text"
                    value={formData.village}
                    onChange={(e) => updateField('village', e.target.value)}
                    placeholder="Enter village name"
                    className="w-full h-14 px-4 text-lg rounded-xl border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Map className="w-4 h-4 text-primary" />
                    State
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => updateField('state', e.target.value)}
                    className="w-full h-14 px-4 text-lg rounded-xl border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  variant="farmer"
                  className="flex-1"
                  onClick={() => setStep(3)}
                  disabled={!canProceedStep2}
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Crop Details */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">Your Crop 🌾</h2>
                <p className="text-muted-foreground">Select your primary crop for personalized advice</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <Wheat className="w-4 h-4 text-primary" />
                    Select Crop Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(CROP_LABELS) as CropType[]).map((crop) => (
                      <button
                        key={crop}
                        onClick={() => updateField('cropType', crop)}
                        className={cn(
                          "p-4 rounded-xl text-left transition-all border-2",
                          formData.cropType === crop
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-muted/50 text-foreground border-transparent hover:border-primary/30"
                        )}
                      >
                        <span className="font-semibold">{CROP_LABELS[crop]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Ruler className="w-4 h-4 text-primary" />
                    Land Size (Acres)
                  </label>
                  <input
                    type="number"
                    value={formData.landSize}
                    onChange={(e) => updateField('landSize', e.target.value)}
                    placeholder="Enter land size"
                    className="w-full h-14 px-4 text-lg rounded-xl border-2 border-input bg-background focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Button
                  variant="harvest"
                  className="flex-1"
                  onClick={handleSubmit}
                  disabled={!canProceedStep3}
                >
                  Start Farming
                  <Sprout className="w-5 h-5" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Register;
