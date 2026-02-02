import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner, Seattle',
    content: 'Mobile Agent LLC installed our home security system flawlessly. The free installation saved us hundreds, and the team was professional from start to finish. We feel so much safer now!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner, Bellevue',
    content: 'Outstanding service! They set up cameras across all three of my retail locations. The image quality is incredible and the mobile app makes monitoring easy. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Martinez',
    role: 'Property Manager, Tacoma',
    content: 'We\'ve worked with several security companies, but Mobile Agent stands out. Their expertise in commercial installations and ongoing support is unmatched. Worth every penny.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied customers who trust Mobile Agent LLC 
            for their security needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
