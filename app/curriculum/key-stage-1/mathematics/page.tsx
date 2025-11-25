import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "KS1 Mathematics Tutoring | Improve ME Institute Dubai",
    description: "Key Stage 1 Mathematics tutoring for children aged 5-7. Building strong mathematical foundations through interactive activities and personalized learning.",
};

const topics = [
    {
        name: "Number and Place Value",
        detail: "Understanding numbers up to 100, counting, and place value concepts."
    },
    {
        name: "Addition and Subtraction",
        detail: "Mastering basic addition and subtraction within 20 using various methods."
    },
    {
        name: "Multiplication and Division",
        detail: "Introduction to multiplication and division through practical activities."
    },
    {
        name: "Fractions",
        detail: "Understanding halves and quarters through visual representations."
    },
    {
        name: "Measurement",
        detail: "Learning about length, weight, capacity, and time."
    },
    {
        name: "Geometry",
        detail: "Recognizing and describing 2D and 3D shapes, position, and direction."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students."
    },
    {
        icon: Calculator,
        title: "Interactive Learning",
        description: "Hands-on activities and games make Maths engaging and fun."
    },
    {
        icon: Target,
        title: "Strong Foundations",
        description: "Building solid mathematical foundations for future success."
    },
    {
        icon: Award,
        title: "Certified Teachers",
        description: "Experienced primary school teachers guide your child's learning."
    }
];

export default function KS1MathematicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            KS1 Mathematics Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Key Stage 1 Mathematics tutoring for children aged 5-7. Our program builds strong mathematical foundations through interactive activities, games, and personalized learning. Guided by experienced primary school teachers, we make Maths enjoyable and effective.
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Strong Mathematical Foundations!</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our KS1 Mathematics program can help your child develop confidence and mastery in Maths.
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

