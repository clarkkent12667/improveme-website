import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "GCSE/IGCSE/MYP Economics Tutoring | Improve ME Institute Dubai",
    description: "Tailored Economics tutoring for GCSE, IGCSE, and MYP students. Small group sessions focus on economic concepts and exam preparation.",
};

const topics = [
    {
        name: "Basic Economic Problem",
        detail: "Scarcity, choice, opportunity cost, and factors of production."
    },
    {
        name: "Market Systems",
        detail: "Supply and demand, price determination, and market equilibrium."
    },
    {
        name: "Production and Costs",
        detail: "Production methods, costs, revenue, and profit maximization."
    },
    {
        name: "Market Structures",
        detail: "Perfect competition, monopoly, and market power."
    },
    {
        name: "Macroeconomics",
        detail: "National income, inflation, unemployment, and economic growth."
    },
    {
        name: "International Trade",
        detail: "International trade, exchange rates, and globalization."
    },
    {
        name: "Government Intervention",
        detail: "Fiscal policy, monetary policy, and government regulation."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students."
    },
    {
        icon: TrendingUp,
        title: "Real-World Applications",
        description: "Connecting economic theory to real-world economic scenarios."
    },
    {
        icon: Target,
        title: "Exam Preparation",
        description: "Focused preparation for GCSE/IGCSE/MYP Economics examinations."
    },
    {
        icon: Award,
        title: "Expert Tutors",
        description: "Experienced Economics teachers guide your learning journey."
    }
];

export default function IGCSECconomicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            GCSE/IGCSE/MYP Economics Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Tailored Economics tutoring for GCSE, IGCSE, and MYP students aged 14-16. Our small group sessions focus on mastering economic concepts, understanding market systems, and effective exam preparation. We connect theory to real-world economic scenarios.
                        </p>
                        <Link href="/#book-assessment">
                            <Button size="lg" className="h-12 px-8 text-lg">
                                Book Your Free Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Topics Covered</h2>
                        <div className="space-y-4">
                            {topics.map((topic, index) => (
                                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                                    <CardContent className="pt-6">
                                        <div className="flex gap-4">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg mb-2">{topic.name}</h3>
                                                <p className="text-muted-foreground">{topic.detail}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Excel in GCSE/IGCSE/MYP Economics!</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our Economics tutoring can help you master key concepts and achieve excellent exam results.
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Book Your Free Assessment
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

