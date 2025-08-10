import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import image modules
import OurMissionImg from '@/img/Our Mission.jpg';
import SmartContractImg from '@/img/Smart Contract Development.jpg';
import AuditingImg from '@/img/Smart Contract Auditing.jpg';
import ConsultingImg from '@/img/Blockchain Consulting.jpg';
import InnovationImg from '@/img/Driving Blockchain Innovation.jpg';

export default function HomePage() {
  return (
    // Set the base dark background and light text for the whole page
    <div className="bg-slate-900 text-slate-50 space-y-16 md:space-y-24">

      {/* Hero Section */}
      {/* Changed gradient to a subtle dark theme and used a border instead of a shadow */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-xl border border-slate-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-primary animate-fade-in-down">
            Building the Future of Web3, Block by Block
          </h1>
          {/* Adjusted paragraph text color for better contrast on a dark background */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            NovaStack Solutions pioneers innovative blockchain solutions, empowering businesses and individuals with cutting-edge Web3 technologies.
          </p>
          <div className="space-x-4 animate-fade-in-up animation-delay-600">
            {/* Accent button remains the same, as it should stand out */}
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            {/* Adjusted outline button's hover state for better visibility */}
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/20 hover:text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 text-center">
        {/* Ensured heading and paragraph text are light */}
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-slate-100">Our Mission</h2>
        <Image 
          src={OurMissionImg.src}
          alt="Team working on blockchain"
          width={800}
          height={400}
          className="rounded-lg shadow-lg shadow-black/30 mx-auto mb-6" // Added a subtle shadow for depth
          data-ai-hint="team collaboration"
        />
        <p className="text-md md:text-lg text-slate-400 max-w-3xl mx-auto">
          At NovaStack Solutions, our mission is to demystify blockchain technology and make its transformative power accessible to all. We are committed to developing robust, scalable, and secure Web3 solutions that drive innovation and create lasting value for our clients and the broader digital ecosystem.
        </p>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center text-slate-100">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Updated to have a dark background, border, and adjusted text colors */}
          <Card className="bg-slate-800/80 border border-slate-700 hover:border-primary/50 transition-colors duration-300 animate-slide-in-from-left">
            <CardHeader>
              <Image 
                src={SmartContractImg.src}
                alt="Smart Contract Development"
                width={400}
                height={200}
                className="rounded-md mb-4 mx-auto"
                priority
              />
              <CardTitle className="font-headline text-slate-50">Smart Contract Development</CardTitle>
              <CardDescription className="text-slate-400">Secure and efficient smart contracts tailored to your business logic.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" asChild className="text-primary p-0">
                <Link href="/services#smart-contracts">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          {/* Card 2: Updated to have a dark background, border, and adjusted text colors */}
          <Card className="bg-slate-800/80 border border-slate-700 hover:border-primary/50 transition-colors duration-300 animate-slide-in-from-bottom">
            <CardHeader>
              <Image 
                src={AuditingImg.src}
                alt="Blockchain Auditing"
                width={400}
                height={200}
                className="rounded-md mb-4 mx-auto"
                priority
              />
              <CardTitle className="font-headline text-slate-50">Blockchain Auditing</CardTitle>
              <CardDescription className="text-slate-400">Comprehensive security audits to ensure the integrity of your Web3 projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" asChild className="text-primary p-0">
                <Link href="/services#auditing">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>

          {/* Card 3: Updated to have a dark background, border, and adjusted text colors */}
          <Card className="bg-slate-800/80 border border-slate-700 hover:border-primary/50 transition-colors duration-300 animate-slide-in-from-right">
            <CardHeader>
              <Image 
                src={ConsultingImg.src}
                alt="Web3 Consulting"
                width={400}
                height={200}
                className="rounded-md mb-4 mx-auto"
                priority
              />
              <CardTitle className="font-headline text-slate-50">Web3 Consulting</CardTitle>
              <CardDescription className="text-slate-400">Expert guidance to navigate the complexities of the blockchain landscape.</CardDescription>
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
        {/* Used a slightly transparent dark background for this container */}
        <div className="bg-slate-800/60 border border-slate-700 p-8 md:p-12 rounded-xl shadow-lg shadow-black/30 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-slate-100">Driving Blockchain Innovation</h2>
            <p className="text-md md:text-lg text-slate-400 mb-6">
              We are constantly exploring new frontiers in blockchain technology. Discover our latest projects and research initiatives that are shaping the future of decentralized systems.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/innovations">View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          <div className="flex-1">
            <Image 
              src={InnovationImg.src}
              alt="Blockchain innovation abstract"
              width={600}
              height={400}
              className="rounded-lg shadow-md shadow-black/20"
              data-ai-hint="futuristic tech"
            />
          </div>
        </div>
      </section>
    </div>
  );
}