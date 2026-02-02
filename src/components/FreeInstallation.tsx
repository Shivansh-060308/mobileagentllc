import { Gift, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Professional site assessment',
  'Optimal camera placement',
  'Complete system setup',
  'App configuration',
  'User training included',
  'No hidden fees',
];

export function FreeInstallation() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-accent mb-6">
              <Gift className="h-4 w-4" />
              <span className="text-sm font-bold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              FREE Professional Installation with Every Purchase
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our certified technicians will install your security system at no additional cost. 
              We handle everything from site assessment to final configuration, ensuring your 
              property is fully protected.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Claim Free Installation
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Call (555) 123-4567
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20" />
            <div className="relative gradient-card rounded-3xl p-8 border border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl gradient-primary">
                  <Wrench className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">$500+ Value</h3>
                  <p className="text-muted-foreground">Completely FREE</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <div className="flex justify-between items-center">
                    <span>Professional Installation</span>
                    <span className="line-through text-muted-foreground">$299</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <div className="flex justify-between items-center">
                    <span>Site Assessment</span>
                    <span className="line-through text-muted-foreground">$99</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-background/50 border border-border">
                  <div className="flex justify-between items-center">
                    <span>System Configuration</span>
                    <span className="line-through text-muted-foreground">$149</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl gradient-accent">
                  <div className="flex justify-between items-center font-bold">
                    <span>Your Cost</span>
                    <span className="text-2xl">$0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
