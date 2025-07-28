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

// ✅ Import images at the top level
import smartContractImg from "@/img/Smart Contract Development.jpg";
import nftEvolutionImg from "@/img/evolution-of-nfts.jpg";
import defiFinanceImg from "@/img/defi-reshaping-finance.jpg";
import web3SecurityImg from "@/img/web3-security-best-practices.jpg";

const articles = [
  {
    title: "Understanding Smart Contracts: A Beginner's Guide",
    slug: "understanding-smart-contracts",
    category: "Blockchain Basics",
    date: "October 26, 2023",
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
    date: "November 5, 2023",
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
    date: "November 15, 2023",
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
    date: "November 28, 2023",
    author: "Secure Sam",
    excerpt:
      "Essential security tips and practices for both users interacting with dApps and developers building on Web3.",
    image: web3SecurityImg,
    imageHint: "digital security",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
          Web3 & Blockchain Insights
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Stay informed with our latest articles, guides, and analyses on
          blockchain technology and the Web3 ecosystem.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/resources/${article.slug}`} className="block">
                <div className="relative h-56 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={article.imageHint}
                  />
                </div>
              </Link>
              <CardHeader>
                <Badge
                  variant="secondary"
                  className="w-fit mb-2 bg-accent/20 text-accent"
                >
                  {article.category}
                </Badge>
                <CardTitle className="font-headline text-xl hover:text-primary transition-colors">
                  <Link href={`/resources/${article.slug}`}>
                    {article.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/70 mb-4 line-clamp-3">
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

      <section className="text-center mt-12">
        <p className="text-foreground/70">
          Note: Article detail pages are illustrative. Clicking "Read More"
          will lead to a 404 or a generic page for this demo.
        </p>
      </section>
    </div>
  );
}
