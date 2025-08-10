import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

// Component Imports
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";

// Font configuration
const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontManrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'NovaStack Solutions - Innovating Blockchain Solutions',
  description: 'NovaStack Solutions is dedicated to building innovative solutions on blockchain technology and providing expert Web3 services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* The head tag is empty, which is fine. Next.js will inject what it needs. */}
      </head>
      <body 
        className={cn(
          "font-body bg-background text-foreground antialiased flex flex-col min-h-screen",
          fontInter.variable, 
          fontManrope.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}