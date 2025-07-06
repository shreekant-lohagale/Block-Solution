import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, MessageSquare, Search, ShieldCheck, Users, Lightbulb, BarChart3 } from "lucide-react";
import Image from "next/image";

const services = [
	{
		id: "smart-contracts",
		icon: Code,
		title: "Smart Contract Development",
		description:
			"We design, develop, and deploy secure and efficient smart contracts for various blockchain platforms including Ethereum, Polygon, and Binance Smart Chain. Our contracts are optimized for gas efficiency and rigorously tested.",
		features: [
			"Custom Logic Implementation",
			"ERC20, ERC721, ERC1155 Standards",
			"Upgradable Contracts",
			"Gas Optimization",
		],
		image: require("@/img/Smart Contract Development.jpg"),
		imageHint: "code screen",
	},
	{
		id: "auditing",
		icon: ShieldCheck,
		title: "Smart Contract Auditing",
		description:
			"Our comprehensive auditing services identify vulnerabilities and ensure the security and reliability of your smart contracts. We provide detailed reports and recommendations to mitigate risks.",
		features: [
			"Manual Code Review",
			"Automated Testing",
			"Vulnerability Assessment",
			"Gas Usage Analysis",
			"Security Best Practices",
		],
		image: require("@/img/Smart Contract Auditing.jpg"),
		imageHint: "digital security",
	},
	{
		id: "consulting",
		icon: Users,
		title: "Blockchain Consulting",
		description:
			"Navigate the complexities of the Web3 space with our expert consulting services. We help businesses understand blockchain potential, develop strategies, and implement solutions.",
		features: [
			"Strategic Planning",
			"Feasibility Studies",
			"Tokenomics Design",
			"Regulatory Guidance",
			"Market Analysis",
		],
		image: require("@/img/Blockchain Consulting.jpg"),
		imageHint: "team meeting",
	},
	{
		id: "dapp-development",
		icon: Lightbulb,
		title: "dApp Development",
		description:
			"Full-cycle decentralized application development, from UI/UX design to backend smart contract integration. We build user-friendly and scalable dApps for various use cases.",
		features: [
			"Frontend (React, Next.js)",
			"Backend (Node.js, Go)",
			"Wallet Integration",
			"IPFS Storage Solutions",
			"Cross-chain compatibility",
		],
		image: require("@/img/dApp Development.jpg"),
		imageHint: "application interface",
	},
	{
		id: "defi-solutions",
		icon: BarChart3,
		title: "DeFi Solutions",
		description:
			"Develop innovative Decentralized Finance (DeFi) protocols and platforms, including lending, borrowing, staking, and yield farming applications, with a focus on security and capital efficiency.",
		features: [
			"Custom Protocol Development",
			"Liquidity Pool Integration",
			"Yield Farming Strategies",
			"Automated Market Makers (AMMs)",
			"Security Audits for DeFi",
		],
		image: require("@/img/DeFi Solutions.jpg"),
		imageHint: "financial charts",
	},
];

const testimonials = [
	{
		quote:
			"Block Solution Labs delivered an impeccable smart contract for our DeFi project. Their attention to detail and security expertise is top-notch.",
		name: "Alice DeFi CEO",
		company: "FutureFi Corp",
		image: "https://placehold.co/100x100.png",
		imageHint: "person smiling",
	},
	{
		quote:
			"The blockchain consultation provided by Block Solution Labs was invaluable in shaping our Web3 strategy. Highly recommended!",
		name: "Bob Innovator",
		company: "NextGen Startups",
		image: "https://placehold.co/100x100.png",
		imageHint: "professional person",
	},
	{
		quote:
			"Their auditing team found critical vulnerabilities we missed. Block Solution Labs saved us from a potential disaster.",
		name: "Carol SecureAdmin",
		company: "SafeToken Ltd.",
		image: "https://placehold.co/100x100.png",
		imageHint: "woman portrait",
	},
];

export default function ServicesPage() {
	return (
		<div className="space-y-16">
			<section className="text-center">
				<h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">
					Our Web3 Services
				</h1>
				<p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
					We offer a comprehensive suite of blockchain services to bring your Web3
					vision to life.
				</p>
			</section>

			{services.map((service) => (
				<section key={service.id} id={service.id} className="scroll-mt-20">
					<Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
						<div className="grid md:grid-cols-2">
							<div className="p-6 md:p-8">
								<div className="flex items-center gap-3 mb-4">
									<div className="bg-primary/10 p-3 rounded-md w-fit">
										<service.icon className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="text-2xl md:text-3xl font-headline">
										{service.title}
									</CardTitle>
								</div>
								<CardDescription className="text-md text-foreground/70 mb-6">
									{service.description}
								</CardDescription>
								<h4 className="font-semibold mb-2 text-foreground">
									Key Features:
								</h4>
								<ul className="space-y-2 mb-6">
									{service.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center gap-2 text-sm text-foreground/70"
										>
											<CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>
							</div>
							<div className="relative min-h-[250px] md:min-h-full">
								<Image
									src={service.image}
									alt={service.title}
									fill
									style={{ objectFit: "cover" }}
									className="transition-transform duration-500 hover:scale-105"
									data-ai-hint={service.imageHint}
								/>
							</div>
						</div>
					</Card>
				</section>
			))}

			<section>
				<h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center text-foreground">
					What Our Clients Say
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<CardHeader className="flex-grow">
								<MessageSquare className="h-8 w-8 text-accent mb-4" />
								<CardDescription className="italic text-foreground/70">
									"{testimonial.quote}"
								</CardDescription>
							</CardHeader>
							<CardFooter className="flex items-center gap-4 border-t pt-4">
								<Image
									src={testimonial.image}
									alt={testimonial.name}
									width={48}
									height={48}
									className="rounded-full"
									data-ai-hint={testimonial.imageHint}
								/>
								<div>
									<p className="font-semibold text-sm text-foreground">
										{testimonial.name}
									</p>
									<p className="text-xs text-muted-foreground">
										{testimonial.company}
									</p>
								</div>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
