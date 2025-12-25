import { ArrowLeft, User, Phone, MapPin, Wheat, Ruler, Edit2, LogOut, Settings, HelpCircle, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BottomNav } from '@/components/BottomNav';
import { CROP_LABELS, CropType } from '@/types/farmer';
import { cn } from '@/lib/utils';

const Profile = () => {
  const navigate = useNavigate();
  
  // Get saved data from localStorage
  const farmerDataStr = localStorage.getItem('farmerData');
  const farmerData = farmerDataStr ? JSON.parse(farmerDataStr) : {
    name: 'Farmer',
    mobile: '9876543210',
    village: 'Sample Village',
    state: 'Karnataka',
    cropType: 'rice',
    landSize: '5',
  };

  const handleLogout = () => {
    localStorage.removeItem('farmerName');
    localStorage.removeItem('farmerData');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="gradient-hero text-primary-foreground p-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">My Profile</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="px-4 -mt-10 space-y-4">
        {/* Profile Card */}
        <div className="card-agricultural p-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-2xl gradient-sunset flex items-center justify-center">
              <User className="w-10 h-10 text-secondary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">{farmerData.name}</h2>
              <p className="text-muted-foreground">Registered Farmer</p>
              <Button variant="outline" size="sm" className="mt-2">
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="card-agricultural p-6 space-y-4">
          <h3 className="font-bold text-foreground">Personal Details</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Mobile</p>
                <p className="font-semibold text-foreground">{farmerData.mobile}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">{farmerData.village}, {farmerData.state}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
              <Wheat className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Primary Crop</p>
                <p className="font-semibold text-foreground">
                  {farmerData.cropType ? CROP_LABELS[farmerData.cropType as CropType] : 'Not set'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
              <Ruler className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Land Size</p>
                <p className="font-semibold text-foreground">{farmerData.landSize} Acres</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="card-agricultural p-4 space-y-2">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-foreground">Help & Support</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
            <Share2 className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-foreground">Share App</span>
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-destructive/10 transition-colors text-destructive"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-semibold">Logout</span>
          </button>
        </div>

        {/* App Version */}
        <p className="text-center text-xs text-muted-foreground py-4">
          KisanMitra v1.0.0 • Made with ❤️ for Indian Farmers
        </p>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
