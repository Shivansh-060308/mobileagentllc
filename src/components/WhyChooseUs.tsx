import { Shield, Clock, Award, Users, Headphones, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed security contractor with comprehensive insurance coverage for your peace of mind.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick installation scheduling and 24/7 support to address any concerns promptly.',
  },
  {
    icon: Award,
    title: '5-Year Warranty',
    description: 'Industry-leading warranty on all equipment and installation workmanship.',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Certified professionals with extensive experience in security system installation.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for troubleshooting and technical assistance.',
  },
  {
    icon: MapPin,
    title: 'Local Service',
    description: 'Washington-based company providing personalized service to our community.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose Mobile Agent LLC?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to providing the highest quality security solutions 
            with unmatched customer service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 rounded-2xl gradient-primary mb-6 group-hover:animate-pulse-glow">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
