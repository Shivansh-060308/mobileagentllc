import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bell, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  '2K HDR Video Quality',
  'Two-Way Audio with Noise Cancellation',
  'Person & Package Detection',
  'Pre-Roll Video Recording',
  'Customizable Motion Zones',
  'Night Vision',
  'Weather-Resistant Design',
  'Smart Home Integration',
];

const specs = [
  { label: 'Resolution', value: '2K HDR' },
  { label: 'Field of View', value: '160° Diagonal' },
  { label: 'Power', value: 'Wired / Battery' },
  { label: 'Storage', value: 'Cloud & Local' },
  { label: 'Weather Rating', value: 'IP65' },
  { label: 'Warranty', value: '3 Years' },
];

export default function DoorbellCameras() {
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
              <Bell className="h-32 w-32 text-primary/50" />
              <div className="absolute top-4 right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                Home Essential
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl gradient-primary">
                  <Bell className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary">Front Door Security</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Doorbell Cameras</h1>
              <p className="text-lg text-muted-foreground mb-6">
                See and speak to visitors from anywhere with our smart video doorbells. 
                Get instant alerts when someone approaches and never miss a delivery again.
              </p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-primary">$249</span>
                <span className="text-muted-foreground">per unit</span>
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
