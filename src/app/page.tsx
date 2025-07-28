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
          src={OurMissionImg.src}
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
                src={SmartContractImg.src}
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
                src={AuditingImg.src}
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
                src={ConsultingImg.src}
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
              src={InnovationImg.src}
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
