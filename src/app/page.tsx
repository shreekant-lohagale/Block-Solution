import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Lightbulb, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-primary animate-fade-in-down">
            Building the Future of Web3, Block by Block
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Block Solution Labs pioneers innovative blockchain solutions, empowering businesses and individuals with cutting-edge Web3 technologies.
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-600">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-foreground">Our Mission</h2>
        <Image 
            src={require("@/img/Our Mission.jpg")}
            alt="Team working on blockchain"
            width={800}
            height={400}
            className="rounded-lg shadow-md mx-auto mb-6"
            data-ai-hint="team collaboration"
          />
        <p className="text-md md:text-lg text-foreground/70 max-w-3xl mx-auto">
          At Block Solution Labs, our mission is to demystify blockchain technology and make its transformative power accessible to all. We are committed to developing robust, scalable, and secure Web3 solutions that drive innovation and create lasting value for our clients and the broader digital ecosystem.
        </p>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center text-foreground">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-in-from-left">
            <CardHeader>
              <Image 
                src={require("@/img/Smart Contract Development.jpg")}
                alt="Smart Contract Development"
                width={400}
                height={200}
                className="rounded-md mb-4 mx-auto"
                priority
              />
              <CardTitle className="font-headline">Smart Contract Development</CardTitle>
              <CardDescription>Secure and efficient smart contracts tailored to your business logic.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" asChild className="text-primary p-0">
                <Link href="/services#smart-contracts">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-in-from-bottom">
            <CardHeader>
              <Image 
                src={require("@/img/Smart Contract Auditing.jpg")}
                alt="Blockchain Auditing"
                width={400}
                height={200}
                className="rounded-md mb-4 mx-auto"
                priority
              />
              <CardTitle className="font-headline">Blockchain Auditing</CardTitle>
              <CardDescription>Comprehensive security audits to ensure the integrity of your Web3 projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" asChild className="text-primary p-0">
                <Link href="/services#auditing">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-300 animate-slide-in-from-right">
            <CardHeader>
              <Image 
                src={require("@/img/Blockchain Consulting.jpg")}
                alt="Web3 Consulting"
                width={400}
                height={200}
                className="rounded-md mb-4 mx-auto"
                priority
              />
              <CardTitle className="font-headline">Web3 Consulting</CardTitle>
              <CardDescription>Expert guidance to navigate the complexities of the blockchain landscape.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" asChild className="text-primary p-0">
                <Link href="/services#consulting">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Innovation Highlight */}
       <section className="container mx-auto px-4">
        <div className="bg-card p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-foreground">Driving Blockchain Innovation</h2>
            <p className="text-md md:text-lg text-foreground/70 mb-6">
              We are constantly exploring new frontiers in blockchain technology. Discover our latest projects and research initiatives that are shaping the future of decentralized systems.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/innovations">View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="flex-1">
             <Image 
                src={require("@/img/Driving Blockchain Innovation.jpg")}
              alt="Blockchain innovation abstract"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
              data-ai-hint="futuristic tech"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Add some basic CSS for animations if not already in globals
// You can expand on these or use a library like framer-motion
// For simplicity, these are illustrative. `tailwindcss-animate` handles some.
// Consider adding these to globals.css or a dedicated animation css file.
// @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fade-in-down { animation: fadeInDown 0.5s ease-out forwards; }
// .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
// .animation-delay-300 { animation-delay: 0.3s; }
// .animation-delay-600 { animation-delay: 0.6s; }

// For slide-in, using tailwindcss-animate classes (data-[state=open]:animate-in data-[state=closed]:animate-out ...)
// For simple on-load animations, you might need to trigger them.
// These illustrative classes provide basic entry animations.
// .animate-slide-in-from-left { animation: slideInFromLeft 0.7s ease-out forwards; opacity: 0; }
// .animate-slide-in-from-right { animation: slideInFromRight 0.7s ease-out forwards; opacity: 0; }
// .animate-slide-in-from-bottom { animation: slideInFromBottom 0.7s ease-out forwards; opacity: 0; }
// @keyframes slideInFromLeft { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
// @keyframes slideInFromRight { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
// @keyframes slideInFromBottom { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
// This is better handled by intersection observer or a library for scroll-triggered animations.
// For now, assuming these are applied for initial load or using tailwindcss-animate capabilities if available.
// The current setup uses tailwindcss-animate which is good.
// Custom animations added here for demonstration. `tailwindcss-animate` is configured.
// To make them work on load without interaction, you might need JS or specific setup.
// We will rely on `tailwindcss-animate` for what it provides for now.
// The classes provided above might need manual animation setup.
// Let's assume `tailwindcss-animate` provides animate-in, fade-in-0, slide-in-from-left-2 etc. which are used by shadcn.
// For simple on-load:
// Add in tailwind.config.js keyframes:
// fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
// And animation:
// fadeIn: 'fadeIn 1s ease-out',
// Then use `animate-fadeIn` class.

// The prompt mentions `tailwindcss-animate` is available, which often means classes for entry animations like `animate-in`, `fade-in`, `slide-in-from-*`.
// I've used placeholder class names like `animate-fade-in-down`. These would need to be defined in `tailwind.config.js` or `globals.css`
// For instance, in `tailwind.config.js`:
// theme: { extend: { keyframes: { 'fade-in-down': { ... } }, animation: { 'fade-in-down': 'fade-in-down 0.5s ease-out' } } }
// This is done for illustration. `tailwindcss-animate` provides similar functionalities.

