import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Thermometer, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  'Thermal + Visual Dual Lens',
  'Temperature Detection',
  'Complete Darkness Vision',
  'Fire & Heat Alerts',
  'Perimeter Intrusion Detection',
  'All-Weather IP67 Rating',
  'Long-Range Detection (500ft+)',
  'Smart Analytics Integration',
];

const specs = [
  { label: 'Thermal Resolution', value: '640x512' },
  { label: 'Visual Resolution', value: '4K (8MP)' },
  { label: 'Detection Range', value: '500ft+' },
  { label: 'Temp Range', value: '-40°F to 302°F' },
  { label: 'Power', value: 'PoE / 12V DC' },
  { label: 'Warranty', value: '5 Years' },
];

export default function ThermalCameras() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <Link to="/#products" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square rounded-2xl shadow-card w-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
              <Thermometer className="h-32 w-32 text-primary/50" />
              <div className="absolute top-4 right-4 px-4 py-2 bg-destructive text-destructive-foreground rounded-full text-sm font-semibold">
                Industrial Grade
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl gradient-primary">
                  <Thermometer className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary">Advanced Detection</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Thermal Cameras</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Advanced thermal imaging cameras for complete darkness visibility and temperature monitoring. 
                Ideal for industrial facilities, warehouses, and high-security applications.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-primary">$1,299</span>
                <span className="text-muted-foreground">per camera</span>
                <span className="ml-4 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  FREE Installation
                </span>
              </div>
              
              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Get Free Quote
                </Button>
                <Button variant="outline" size="xl">
                  Request Installation
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {specs.map((spec) => (
                <div key={spec.label} className="p-4 rounded-xl bg-secondary/50">
                  <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                  <div className="text-lg font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
