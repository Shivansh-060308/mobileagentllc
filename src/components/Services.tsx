import { Home, Building2, Store, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Home,
    title: 'Residential Security',
    description: 'Protect your family and home with comprehensive surveillance solutions tailored for residential properties.',
    features: ['Indoor/Outdoor Cameras', 'Smart Home Integration', 'Mobile App Access'],
  },
  {
    icon: Building2,
    title: 'Commercial Security',
    description: 'Enterprise-grade security systems for offices, warehouses, and commercial facilities.',
    features: ['Multi-Location Management', 'Access Control', 'Employee Monitoring'],
  },
  {
    icon: Store,
    title: 'Retail Security',
    description: 'Prevent theft and monitor operations with specialized retail surveillance solutions.',
    features: ['POS Integration', 'Loss Prevention', 'Customer Analytics'],
  },
  {
    icon: Factory,
    title: 'Industrial Security',
    description: 'Heavy-duty surveillance for manufacturing plants, construction sites, and industrial facilities.',
    features: ['Rugged Cameras', 'Perimeter Security', '24/7 Monitoring'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Security Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground">
            From homes to large commercial facilities, we provide customized surveillance 
            solutions across Washington State.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl gradient-primary group-hover:animate-pulse-glow transition-all">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Request a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
