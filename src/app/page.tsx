"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Images
import OurMissionImg from '@/img/Our Mission.jpg';
import SmartContractImg from '@/img/Smart Contract Development.jpg';
import AuditingImg from '@/img/Smart Contract Auditing.jpg';
import ConsultingImg from '@/img/Blockchain Consulting.jpg';
import InnovationImg from '@/img/Driving Blockchain Innovation.jpg';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Hero title typing effect
    gsap.fromTo(".hero-title",
      { text: "" },
      { text: "Building the Future of Web3, Block by Block", duration: 2.5, ease: "power2.out" }
    );

    // Fade-up
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });
    });

    // Fade-down
    gsap.utils.toArray<HTMLElement>(".fade-down").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });
    });

    // Card scale-in
    gsap.utils.toArray<HTMLElement>(".card-animate").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        }
      });
    });
  }, [isClient]);

  return (
    <div className="bg-slate-900 text-slate-50 space-y-16 md:space-y-24">

      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 overflow-hidden rounded-xl border border-slate-800">
        {/* Background video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/blockchain-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <h1 
            className="hero-title text-4xl md:text-6xl font-bold font-headline mb-6 text-primary" 
            suppressHydrationWarning
          >
            {isClient ? "" : " "}
          </h1>
          <p className="fade-up text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            NovaStack Solutions pioneers innovative blockchain solutions, empowering businesses and individuals with cutting-edge Web3 technologies.
          </p>
          <div className="fade-down space-x-4">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Explore Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/20 hover:text-primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 text-center fade-down">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-slate-100">Our Mission</h2>
        <Image 
          src={OurMissionImg.src}
          alt="Team working on blockchain"
          width={800}
          height={400}
          className="rounded-lg shadow-lg shadow-black/30 mx-auto mb-6"
        />
        <p className="text-md md:text-lg text-slate-400 max-w-3xl mx-auto">
          At NovaStack Solutions, our mission is to demystify blockchain technology and make its transformative power accessible to all. We are committed to developing robust, scalable, and secure Web3 solutions that drive innovation and create lasting value for our clients and the broader digital ecosystem.
        </p>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 fade-up">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center text-slate-100">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { img: SmartContractImg, title: "Smart Contract Development", desc: "Secure and efficient smart contracts tailored to your business logic.", link: "/services#smart-contracts" },
            { img: AuditingImg, title: "Blockchain Auditing", desc: "Comprehensive security audits to ensure the integrity of your Web3 projects.", link: "/services#auditing" },
            { img: ConsultingImg, title: "Web3 Consulting", desc: "Expert guidance to navigate the complexities of the blockchain landscape.", link: "/services#consulting" }
          ].map((service, idx) => (
            <Card key={idx} className="card-animate bg-slate-800/80 border border-slate-700 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <Image 
                  src={service.img.src}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="rounded-md mb-4 mx-auto"
                  priority
                />
                <CardTitle className="font-headline text-slate-50">{service.title}</CardTitle>
                <CardDescription className="text-slate-400">{service.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-primary p-0">
                  <Link href={service.link}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Innovation Highlight */}
      <section className="container mx-auto px-4 fade-down">
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
            />
          </div>
        </div>
      </section>
    </div>
  );
}
