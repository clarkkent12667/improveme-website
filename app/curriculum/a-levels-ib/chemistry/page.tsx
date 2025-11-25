import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlaskConical, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "A-Level/IB Chemistry Tutoring | Improve ME Institute Dubai",
    description: "Advanced Chemistry tutoring for A-Level and IB students. Expert guidance to master complex chemical concepts and excel in examinations.",
};

const topics = [
    {
        name: "Physical Chemistry",
        detail: "Thermodynamics, kinetics, equilibrium, electrochemistry, and energetics."
    },
    {
        name: "Inorganic Chemistry",
        detail: "Periodic table, transition metals, group chemistry, and coordination compounds."
    },
    {
        name: "Organic Chemistry",
        detail: "Hydrocarbons, functional groups, reaction mechanisms, and synthesis."
    },
    {
        name: "Analytical Chemistry",
        detail: "Spectroscopy, chromatography, and analytical techniques."
    },
    {
        name: "Environmental Chemistry",
        detail: "Atmospheric chemistry, water chemistry, and environmental impact."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students."
    },
    {
        icon: FlaskConical,
        title: "Advanced Concepts",
        description: "Mastering complex chemical concepts and reaction mechanisms."
    },
    {
        icon: Target,
        title: "Exam Preparation",
        description: "Focused preparation for A-Level and IB Chemistry examinations."
    },
    {
        icon: Award,
        title: "Expert Tutors",
        description: "Experienced Chemistry teachers guide your advanced learning journey."
    }
];

export default function ALevelsIBChemistryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            A-Level/IB Chemistry Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Advanced Chemistry tutoring for A-Level and IB students aged 16-18. Our program covers physical, inorganic, and organic chemistry. Expert guidance helps you master complex concepts and excel in examinations.
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Master A-Level/IB Chemistry!</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our advanced Chemistry tutoring can help you master complex concepts and achieve excellent exam results.
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

