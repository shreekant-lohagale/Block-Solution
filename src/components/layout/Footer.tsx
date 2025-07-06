
import { SITE_NAME } from '@/lib/constants';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo'; // Import the new Logo component

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary mb-2">
              <Logo className="h-7 w-7" /> {/* Use the Logo component */}
              <span className="font-headline">{SITE_NAME}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Innovating the future of blockchain technology, one block at a time.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/innovations" className="text-muted-foreground hover:text-primary transition-colors">Innovations</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              123 Blockchain Avenue, Crypto City, ETH 12345
            </p>
             <p className="text-sm text-muted-foreground">
              contact@blocksolutionlabs.com
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
