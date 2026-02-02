import { Camera, Eye, Wifi, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cameraDome from '@/assets/camera-dome.jpg';
import cameraBullet from '@/assets/camera-bullet.jpg';
import cameraPtz from '@/assets/camera-ptz.jpg';

const products = [
  {
    name: 'Dome Cameras',
    description: 'Discreet ceiling-mounted cameras perfect for indoor surveillance with 360° coverage.',
    image: cameraDome,
    features: ['4K Ultra HD', 'Night Vision', 'Wide Angle'],
    icon: Eye,
  },
  {
    name: 'Bullet Cameras',
    description: 'Weather-resistant outdoor cameras with long-range IR for perimeter security.',
    image: cameraBullet,
    features: ['Weatherproof IP67', '100ft Night Vision', 'Motion Detection'],
    icon: Camera,
  },
  {
    name: 'PTZ Cameras',
    description: 'Pan-tilt-zoom cameras for comprehensive coverage of large areas.',
    image: cameraPtz,
    features: ['30x Optical Zoom', 'Auto Tracking', 'Remote Control'],
    icon: Wifi,
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Camera className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional-Grade Security Cameras
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our selection of high-quality surveillance equipment designed for residential and commercial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg gradient-primary">
                    <product.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Cameras
          </Button>
        </div>
      </div>
    </section>
  );
}
