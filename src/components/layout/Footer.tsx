import { SITE_NAME } from '@/lib/constants';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/Logo'; // Import the new Logo component

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Updated to use the main dark background for a seamless look, with a subtle top border.
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Section 1: Logo and Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary mb-2">
              <Logo className="h-7 w-7" />
              <span className="font-headline">{SITE_NAME}</span>
            </Link>
            {/* Using a brighter text color consistent with the main page paragraphs */}
            <p className="text-slate-300 text-sm">
              Innovating the future of blockchain technology, one block at a time.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            {/* Brighter heading color to match main page section titles */}
            <h3 className="font-semibold mb-2 text-slate-100">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/services" className="text-slate-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/innovations" className="text-slate-300 hover:text-primary transition-colors">Innovations</Link></li>
              <li><Link href="/resources" className="text-slate-300 hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Section 3: Contact Info */}
          <div>
            <h3 className="font-semibold mb-2 text-slate-100">Connect With Us</h3>
            <p className="text-sm text-slate-300 mt-2">
              123 Blockchain Avenue, Crypto City, ETH 12345
            </p>
             <p className="text-sm text-slate-300">
              novastacksolution@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        {/* Adjusted the copyright text to be slightly dimmer but still clear and readable */}
        <div className="text-center text-sm text-slate-400 pt-8 border-t border-slate-800">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}