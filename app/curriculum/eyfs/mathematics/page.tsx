import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "EYFS Mathematics Tutoring | Improve ME Institute Dubai",
    description: "Early Years Foundation Stage Mathematics tutoring for children aged 3-5. Learning through play with games and visual aids to make Maths fun and interactive.",
};

const topics = [
    {
        name: "Counting and Number Recognition",
        detail: "Learning numbers and counting with interactive games and activities."
    },
    {
        name: "Basic Shapes and Colors",
        detail: "Identifying shapes and colors in everyday objects through play-based learning."
    },
    {
        name: "Simple Addition and Subtraction",
        detail: "Understanding basic operations with visual aids and hands-on activities."
    },
    {
        name: "Patterns and Sequences",
        detail: "Recognizing and creating simple patterns to develop logical thinking."
    },
    {
        name: "Measurement Concepts",
        detail: "Introduction to size, weight, and capacity through practical activities."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups to ensure each child receives individual support."
    },
    {
        icon: Calculator,
        title: "Learning Through Play",
        description: "Games, visual aids, and interactive activities make learning Maths fun and engaging."
    },
    {
        icon: Target,
        title: "Early Foundation",
        description: "Building strong mathematical foundations from an early age."
    },
    {
        icon: Award,
        title: "Certified Teachers",
        description: "Experienced early years teachers guide your child's mathematical journey."
    }
];

export default function EYFSMathematicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            EYFS Mathematics Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Early Years Foundation Stage Mathematics tutoring for children aged 3-5. Our program introduces your child to Maths through play-based learning, guided by experienced early years teachers. We use games and visual aids to make learning interactive and fun.
                        </p>
                        <Link href="/#book-assessment">
                            <Button size="lg" className="h-12 px-8 text-lg">
                                Book Your Free Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
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

            {/* Topics Covered Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Topics Covered
                        </h2>
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Start Your Child's Mathematical Journey!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our EYFS Mathematics program can help your child develop an early love for numbers and problem-solving through fun, interactive learning.
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

