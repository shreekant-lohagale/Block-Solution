
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from "react";
import { Logo } from '@/components/Logo'; // Import the new Logo component

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors">
          <Logo className="h-7 w-7" /> {/* Use the Logo component */}
          <span className="font-headline">{SITE_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {NAV_LINKS.map((link) => (
            <Button key={link.href} variant="ghost" asChild
              className={cn(
                "text-foreground/70 hover:text-foreground hover:bg-primary/10",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
           <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
             <Link href="/contact">Get a Quote</Link>
           </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 bg-background">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-4 p-6 pt-12"> {/* Added pt-12 to avoid overlap if title were visible */}
              <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary mb-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo className="h-6 w-6" /> {/* Use the Logo component */}
                  <span className="font-headline">{SITE_NAME}</span>
                </Link>
                {NAV_LINKS.map((link) => (
                  <Button 
                    key={link.href} 
                    variant="ghost" 
                    asChild
                    className={cn(
                      "justify-start text-lg py-3",
                      pathname === link.href && "text-primary font-semibold bg-primary/10"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
                <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 mt-4" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
