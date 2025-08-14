"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, UserCircle } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

// Image imports
import smartContractImg from "@/img/Smart Contract Development.jpg";
import nftEvolutionImg from "@/img/evolution-of-nfts.jpg";
import defiFinanceImg from "@/img/defi-reshaping-finance.jpg";
import web3SecurityImg from "@/img/web3-security-best-practices.jpg";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const articles = [
  {
    title: "Understanding Smart Contracts: A Beginner's Guide",
    slug: "understanding-smart-contracts",
    category: "Blockchain Basics",
    date: "October 26, 2025",
    author: "Dr. Web Three",
    excerpt:
      "Dive into the world of smart contracts. Learn what they are, how they work, and their potential to revolutionize industries.",
    image: smartContractImg,
    imageHint: "code screen",
  },
  {
    title: "The Evolution of NFTs: From Art to Utility",
    slug: "evolution-of-nfts",
    category: "NFTs",
    date: "November 5, 2025",
    author: "Crypto Casey",
    excerpt:
      "Explore the journey of Non-Fungible Tokens, from digital art and collectibles to their expanding utility in various sectors.",
    image: nftEvolutionImg,
    imageHint: "NFT art",
  },
  {
    title: "Decentralized Finance (DeFi): Reshaping the Financial Landscape",
    slug: "defi-reshaping-finance",
    category: "DeFi",
    date: "November 15, 2025",
    author: "Finance Fiona",
    excerpt:
      "An in-depth look at DeFi, its core components, benefits, risks, and how it's challenging traditional finance.",
    image: defiFinanceImg,
    imageHint: "financial data",
  },
  {
    title: "Web3 Security Best Practices for Users and Developers",
    slug: "web3-security-best-practices",
    category: "Security",
    date: "November 28, 2025",
    author: "Secure Sam",
    excerpt:
      "Essential security tips and practices for both users interacting with dApps and developers building on Web3.",
    image: web3SecurityImg,
    imageHint: "digital security",
  },
];

export default function ResourcesPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let smootherInstance;

    let ctx = gsap.context(() => {
      // Force a ScrollTrigger refresh after a short delay to ensure all content is loaded
      gsap.delayedCall(0.5, () => {
        ScrollTrigger.refresh();
        // Create smoother instance
        smootherInstance = ScrollSmoother.create({
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
      if (smootherInstance) smootherInstance.kill();
      ctx.revert();
    };
  }, [isClient]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="bg-slate-950 text-slate-50 font-sans">
        <div className="space-y-16 py-16 md:py-24">
          <section className="text-center">
            <h1 className="hero-title text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
              Web3 & Blockchain Insights
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Stay informed with our latest articles, guides, and analyses on
              blockchain technology and the Web3 ecosystem.
            </p>
          </section>

          <section className="articles-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.slug}
                  className="article-card group flex flex-col overflow-hidden bg-slate-800/80 border border-slate-700 transition-all duration-300 hover:border-primary/50 transform hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-lg"
                >
                  <Link href={`/resources/${article.slug}`} className="block">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={article.imageHint}
                        data-speed="0.9"
                      />
                    </div>
                  </Link>
                  <CardHeader>
                    <Badge
                      variant="secondary"
                      className="w-fit mb-2 bg-accent/20 text-accent border-transparent"
                    >
                      {article.category}
                    </Badge>
                    <CardTitle className="font-headline text-xl">
                      <Link href={`/resources/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-slate-400 mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <UserCircle size={14} />
                        <span>By {article.author}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="text-primary font-semibold hover:underline flex items-center gap-1 text-sm"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </CardFooter>
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
