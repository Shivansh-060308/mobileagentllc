import { Camera, Eye, Wifi, Radio, Thermometer, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
    href: '/cameras/dome',
    badge: 'Best Seller',
  },
  {
    name: 'Bullet Cameras',
    description: 'Weather-resistant outdoor cameras with long-range IR for perimeter security.',
    image: cameraBullet,
    features: ['Weatherproof IP67', '100ft Night Vision', 'Motion Detection'],
    icon: Camera,
    href: '/cameras/bullet',
    badge: 'Most Popular',
  },
  {
    name: 'PTZ Cameras',
    description: 'Pan-tilt-zoom cameras for comprehensive coverage of large areas.',
    image: cameraPtz,
    features: ['30x Optical Zoom', 'Auto Tracking', 'Remote Control'],
    icon: Wifi,
    href: '/cameras/ptz',
    badge: 'Premium',
  },
  {
    name: 'Wireless Cameras',
    description: 'Wire-free security cameras with rechargeable batteries for flexible placement.',
    image: null,
    features: ['Battery Powered', 'WiFi Connected', 'Easy Install'],
    icon: Radio,
    href: '/cameras/wireless',
    badge: 'Easy Install',
  },
  {
    name: 'Thermal Cameras',
    description: 'Advanced thermal imaging for complete darkness visibility and temperature detection.',
    image: null,
    features: ['Heat Detection', 'Night Vision', 'Industrial Grade'],
    icon: Thermometer,
    href: '/cameras/thermal',
    badge: 'Industrial',
  },
  {
    name: 'Video Doorbells',
    description: 'Smart doorbell cameras with two-way audio and instant visitor notifications.',
    image: null,
    features: ['2K Video', 'Two-Way Audio', 'Smart Alerts'],
    icon: Bell,
    href: '/cameras/doorbell',
    badge: 'Home Essential',
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
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <product.icon className="h-24 w-24 text-primary/30 group-hover:text-primary/50 transition-colors" />
                )}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
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
                <Link to={product.href}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
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
