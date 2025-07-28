import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Cpu, GitBranch, Layers, Zap } from "lucide-react";

// ✅ Proper image imports
import identityImg from "@/img/Decentralized Identity Protocol.jpg";
import aiAuditImg from "@/img/AI-Powered.jpg";
import crossChainImg from "@/img/Cross-Chain.jpg";
import greenChainImg from "@/img/Cross-Chain.jpg"; // You reused Cross-Chain.jpg — consider replacing

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
    title: "Cross-Chain Bridge",
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
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
          Our Innovations
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Discover the cutting-edge projects and research we're working on to
          push the boundaries of blockchain technology.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={innovation.image}
                  alt={innovation.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint={innovation.imageHint}
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
                <Badge
                  variant={
                    innovation.status === "Live" ? "default" : "secondary"
                  }
                  className={
                    innovation.status === "Live"
                      ? "bg-accent text-accent-foreground"
                      : ""
                  }
                >
                  {innovation.status}
                </Badge>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/70 mb-4">
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
  );
}
