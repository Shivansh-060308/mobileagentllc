import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
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
              <AlertTriangle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Disclaimer</h1>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Last updated: February 3, 2026
            </p>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Third-Party Service Provider</h2>
              <p className="text-muted-foreground">
                Mobile Agent LLC operates as an independent third-party service provider. We are not affiliated 
                with, endorsed by, or directly connected to any security camera manufacturers, brands, or 
                their official distribution networks unless explicitly stated. All product names, logos, and 
                brands mentioned on this website are the property of their respective owners.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Self-Service Provider</h2>
              <p className="text-muted-foreground">
                Mobile Agent LLC provides self-service security camera solutions. While we offer professional 
                installation services, customers are responsible for determining their own security needs, 
                compliance with local laws and regulations, and ensuring proper use of surveillance equipment. 
                We provide guidance and recommendations, but final decisions rest with the customer.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">No Official Authorization</h2>
              <p className="text-muted-foreground mb-4">
                Mobile Agent LLC is not an authorized dealer, reseller, or representative of any specific 
                security camera brand unless explicitly stated. We source our products through various 
                legitimate channels, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Wholesale distributors</li>
                <li>Authorized resellers</li>
                <li>Direct manufacturer partnerships (where applicable)</li>
                <li>Licensed importers</li>
              </ul>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">No Guarantee of Results</h2>
              <p className="text-muted-foreground">
                While we strive to provide high-quality security solutions, Mobile Agent LLC does not guarantee 
                that our products or services will prevent theft, vandalism, or other criminal activities. 
                Security cameras are deterrent and monitoring tools, not foolproof crime prevention systems. 
                The effectiveness of any security system depends on numerous factors beyond our control.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Legal Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Customers are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Complying with all federal, state, and local laws regarding surveillance and recording</li>
                <li>Obtaining necessary permits or permissions for camera installation</li>
                <li>Ensuring proper signage and notification where required by law</li>
                <li>Respecting privacy rights of employees, tenants, neighbors, and the public</li>
                <li>Proper storage and handling of recorded footage</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Mobile Agent LLC is not responsible for any legal issues arising from improper use or 
                placement of security cameras.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Technical Limitations</h2>
              <p className="text-muted-foreground">
                All security camera systems have inherent technical limitations. Factors such as lighting 
                conditions, weather, camera placement, network connectivity, power supply, and equipment 
                maintenance can affect system performance. Mobile Agent LLC provides recommendations for 
                optimal setup but cannot guarantee performance under all conditions.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Information Accuracy</h2>
              <p className="text-muted-foreground">
                While we make every effort to ensure the accuracy of product information, specifications, 
                and pricing on our website, errors may occur. Mobile Agent LLC reserves the right to 
                correct any errors and to change or update information at any time without prior notice. 
                Product specifications are subject to change by manufacturers without notice.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">External Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to external websites that are not operated by Mobile Agent LLC. 
                We have no control over the content and practices of these sites and cannot accept 
                responsibility for their respective privacy policies or practices.
              </p>
            </section>
            
            <section className="p-6 rounded-2xl bg-card border border-border">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong className="text-foreground">Mobile Agent LLC</strong></p>
                <p>Email: info@mobileagentllc.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>214 206th Pl Sw Lynnwood WA 98036</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
