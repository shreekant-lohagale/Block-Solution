"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Cpu, GitBranch, Layers, Zap } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";


// Image imports
import identityImg from "@/img/Decentralized Identity Protocol.jpg";
import aiAuditImg from "@/img/AI-Powered.jpg";
import crossChainImg from "@/img/Cross-Chain.jpg";
import greenChainImg from "@/img/Sustainable Blockchain Consensus Algorithm.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const innovations = [
  {
    title: "Decentralized Identity Protocol",
    description:
      "A novel protocol for self-sovereign identity management, giving users full control over their personal data using zero-knowledge proofs.",
    status: "In Development",
    tags: ["Identity", "Privacy", "ZKPs"],
    icon: Cpu,
    image: identityImg,
    imageHint: "digital identity",
  },
  {
    title: "AI-Powered Smart Contract Auditing Tool",
    description:
      "An advanced tool leveraging artificial intelligence to automatically detect vulnerabilities and inefficiencies in smart contracts with higher accuracy.",
    status: "Alpha Testing",
    tags: ["AI", "Security", "Auditing"],
    icon: Zap,
    image: aiAuditImg,
    imageHint: "AI analytics",
  },
  {
    title: "Cross-Chain NFT Marketplace",
    description:
      "A seamless marketplace allowing users to trade NFTs across multiple blockchain networks, enhancing liquidity and accessibility for digital collectibles.",
    status: "Live",
    tags: ["NFTs", "Interoperability", "Marketplace"],
    icon: Layers,
    image: crossChainImg,
    imageHint: "NFT art",
  },
  {
    title: "Sustainable Blockchain Consensus Algorithm",
    description:
      "Research into a new energy-efficient consensus mechanism designed to reduce the environmental impact of blockchain networks without compromising security.",
    status: "Research Phase",
    tags: ["Sustainability", "Consensus", "GreenTech"],
    icon: GitBranch,
    image: greenChainImg,
    imageHint: "green energy",
  },
];

export default function InnovationsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let smootherInstance_1;

    // Use gsap.context() for better cleanup
    let ctx = gsap.context(() => {
      // Force a ScrollTrigger refresh after a short delay to ensure all content is loaded
      gsap.delayedCall(0.5, () => {
        ScrollTrigger.refresh();
        // Now create smoother instance
        smootherInstance_1 = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
          normalizeScroll: true,
        });
      });
    });

    // Fade-in animation for the hero section
    gsap.from(".hero-title", {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    return () => {
      // Clean up the smoother instance and revert the context when the component unmounts
      if (smootherInstance_1) smootherInstance_1.kill();
      ctx.revert();
    };
  }, [isClient]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-slate-950 text-slate-50 font-sans">
        <div className="space-y-16 py-16 md:py-24">
          <section className="text-center">
            <h1 className="hero-title text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
              Our Innovations
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Discover the cutting-edge projects and research we're working on to push the boundaries of blockchain technology.
            </p>
          </section>

          <section className="innovation-section">
            <div className="grid md:grid-cols-2 gap-8">
              {innovations.map((innovation, index) => (
                <Card
                  key={index}
                  className="innovation-card flex flex-col overflow-hidden bg-slate-800/80 border border-slate-700 transition-all duration-300 hover:border-primary/50 transform hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-lg"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={innovation.image}
                      alt={innovation.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500"
                      data-ai-hint={innovation.imageHint}
                      data-speed="0.9"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 p-2 rounded-md w-fit">
                        <innovation.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="font-headline text-xl md:text-2xl">
                        {innovation.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-slate-400 mb-4">
                      {innovation.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {innovation.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
