import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl gradient-primary">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Last updated: February 2, 2026
            </p>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the services of Mobile Agent LLC, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree with any part of these terms, you may not 
                use our services.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-muted-foreground mb-4">
                Mobile Agent LLC provides:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Security camera sales and installation</li>
                <li>Surveillance system design and consultation</li>
                <li>Equipment maintenance and support</li>
                <li>Professional installation services (complimentary with purchase)</li>
              </ul>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">3. Free Installation Offer</h2>
              <p className="text-muted-foreground mb-4">
                Our free professional installation offer is subject to the following conditions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Valid for standard residential and commercial installations within Washington State</li>
                <li>Installation must be scheduled within 30 days of purchase</li>
                <li>Complex installations may require additional fees (quoted in advance)</li>
                <li>Customer must provide access to installation locations</li>
              </ul>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">4. Warranty</h2>
              <p className="text-muted-foreground mb-4">
                All products sold by Mobile Agent LLC come with manufacturer warranties. Additionally:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>5-year warranty on most camera equipment</li>
                <li>1-year warranty on installation workmanship</li>
                <li>Warranty does not cover damage from misuse or natural disasters</li>
                <li>Extended warranty options available for purchase</li>
              </ul>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment is due upon completion of installation or delivery of products. We accept major 
                credit cards, checks, and bank transfers. Financing options may be available for 
                qualified customers.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Mobile Agent LLC shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services. Our total liability shall not 
                exceed the amount paid for the specific service or product in question.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting to our website. Continued use of our services constitutes 
                acceptance of modified terms.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">Mobile Agent LLC</strong></p>
                <p>Email: legal@mobileagentllc.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>214 206th Pl Sw lynnwood wa 98036</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
