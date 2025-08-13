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
import OurMissionImg from "@/img/Our Mission.jpg";
import SmartContractImg from "@/img/Smart Contract Development.jpg";
import AuditingImg from "@/img/Smart Contract Auditing.jpg";
import ConsultingImg from "@/img/Blockchain Consulting.jpg";
import InnovationImg from "@/img/Driving Blockchain Innovation.jpg";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // --- HERO SECTION ANIMATIONS ---
    const heroTl = gsap.timeline();

    heroTl
      .fromTo(
        ".hero-title",
        { text: "" },
        {
          text: "Building the Future of Web3, Block by Block",
          duration: 2,
          ease: "power2.out",
        }
      )
      .from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      }, "<0.5") // "<0.5" means this animation starts 0.5 seconds before the previous one ends
      .from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      }, "<0.3");

    // --- SCROLL-TRIGGERED ANIMATIONS ---

    // Fade-up animation for all elements with the .fade-up class
    gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    // Animate the Mission section
    const missionSection = document.querySelector(".mission-section");
    if (missionSection) {
      const missionImg = missionSection.querySelector(".mission-img");
      const missionText = missionSection.querySelector(".mission-text-container");

      gsap.from(missionText, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionText,
          start: "top 85%",
        },
      });

      gsap.from(missionImg, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionImg,
          start: "top 85%",
        },
      });
      
      // Parallax effect on the mission image
      gsap.to(missionImg, {
        y: -100, // Moves up more strongly than before
        ease: "none",
        scrollTrigger: {
          trigger: missionSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Card scale-in with a stagger
    const cards = gsap.utils.toArray<HTMLElement>(".card-animate");
    gsap.from(cards, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2, // Adds a slight delay between each card
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cards,
        start: "top 90%",
      },
    });

    // Animate the Innovation section
    const innovationSection = document.querySelector(".innovation-section");
    if (innovationSection) {
      const innovationText = innovationSection.querySelector(".innovation-text-container");
      const innovationImg = innovationSection.querySelector(".innovation-img");

      gsap.from(innovationText, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: innovationText,
          start: "top 85%",
        },
      });

      gsap.from(innovationImg, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: innovationImg,
          start: "top 85%",
        },
      });
    }

    // --- BACKGROUND PARTICLES ANIMATION ---
    const particleCount = 15;
    const particlesContainer = document.querySelector(".particles");
    if (particlesContainer) {
      const particles = Array.from({ length: particleCount }).map(() => {
        const el = document.createElement("div");
        el.className = "absolute bg-white/10 rounded-full blur-sm";
        el.style.width = `${Math.random() * 6 + 4}px`;
        el.style.height = el.style.width;
        el.style.top = `${Math.random() * 100}%`;
        el.style.left = `${Math.random() * 100}%`;
        particlesContainer.appendChild(el);
        return el;
      });

      particles.forEach((p) => {
        gsap.to(p, {
          y: "-=100",
          x: "+=50",
          repeat: -1,
          duration: Math.random() * 6 + 4,
          ease: "sine.inOut",
          yoyo: true,
        });
      });
    }

  }, [isClient]);

  return (
    <div className="bg-slate-950 text-slate-50 space-y-24 md:space-y-36 font-sans relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-48 overflow-hidden">
        {/* Background video with parallax */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 hero-parallax"
        >
          <source src="/videos/blockchain-bg.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>

        {/* Particle Overlay */}
        <div className="particles absolute inset-0 pointer-events-none"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 z-10">
          <h1
            className="hero-title text-4xl md:text-7xl font-bold font-heading mb-6 text-primary drop-shadow-lg"
            suppressHydrationWarning
          >
            {isClient ? "" : " "}
          </h1>
          <p className="hero-subtitle text-lg md:text-2xl text-slate-300 mb-10 max-w-4xl mx-auto drop-shadow-md">
            NovaStack Solutions pioneers innovative blockchain solutions, empowering businesses and individuals with cutting-edge Web3 technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              asChild
              className="hero-btn bg-accent hover:bg-accent/90 text-accent-foreground transform hover:-translate-y-1 transition-transform duration-300"
            >
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="hero-btn border-primary text-primary hover:bg-primary/20 hover:text-primary transition-colors duration-300"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 mission-section">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mission-text-container">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-slate-100 fade-up">
              Our Mission: Paving the Way for a Decentralized Future
            </h2>
            <p className="text-md md:text-xl text-slate-400 fade-up">
              At NovaStack Solutions, our mission is to demystify blockchain technology and make its transformative power accessible to all. We are committed to developing **robust, scalable, and secure** Web3 solutions that drive innovation and create lasting value for our clients and the broader digital ecosystem.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={OurMissionImg.src}
              alt="Team working on blockchain"
              width={1000}
              height={600}
              className="rounded-xl shadow-2xl shadow-black/50 mission-img"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center text-slate-100 fade-up">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              img: SmartContractImg,
              title: "Smart Contract Development",
              desc: "Secure and efficient smart contracts tailored to your business logic.",
              link: "/services#smart-contracts",
            },
            {
              img: AuditingImg,
              title: "Blockchain Auditing",
              desc: "Comprehensive security audits to ensure the integrity of your Web3 projects.",
              link: "/services#auditing",
            },
            {
              img: ConsultingImg,
              title: "Web3 Consulting",
              desc: "Expert guidance to navigate the complexities of the blockchain landscape.",
              link: "/services#consulting",
            },
          ].map((service, idx) => (
            <Card
              key={idx}
              className="card-animate bg-slate-800/80 border border-slate-700 hover:border-primary/50 transition-colors duration-300 transform hover:-translate-y-2 hover:shadow-primary/20 hover:shadow-lg"
            >
              <CardHeader>
                <Image
                  src={service.img.src}
                  alt={service.title}
                  width={400}
                  height={200}
                  className="rounded-t-lg mb-4 object-cover"
                  priority
                />
                <CardTitle className="font-heading text-xl text-slate-50">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {service.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="text-primary p-0">
                  <Link href={service.link}>
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Innovation Highlight */}
      <section className="container mx-auto px-4 innovation-section">
        <div className="bg-slate-800/60 border border-slate-700 p-8 md:p-16 rounded-xl shadow-lg shadow-black/30 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 innovation-img">
            <Image
              src={InnovationImg.src}
              alt="Blockchain innovation abstract"
              width={800}
              height={500}
              className="rounded-xl shadow-2xl shadow-black/20"
            />
          </div>
          <div className="flex-1 text-center md:text-left innovation-text-container">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-100">
              Driving Blockchain Innovation
            </h2>
            <p className="text-md md:text-xl text-slate-400 mb-8">
              We are constantly exploring new frontiers in blockchain technology. Discover our latest projects and research initiatives that are shaping the future of decentralized systems.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform hover:-translate-y-1 transition-transform duration-300"
            >
              <Link href="/innovations">
                View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}