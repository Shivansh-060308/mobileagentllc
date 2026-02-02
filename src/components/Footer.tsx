import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Mobile Agent LLC" className="h-16 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-md">
              Washington's trusted provider of professional security camera solutions. 
              Protecting homes and businesses with cutting-edge surveillance technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-colors">Why Choose Us</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <span>(555) 123-4567</span>
              <span>info@mobileagentllc.com</span>
              <span>Washington State</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Mobile Agent LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
