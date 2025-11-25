import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "GCSE/IGCSE/MYP Psychology Tutoring | Improve ME Institute Dubai",
    description: "Tailored Psychology tutoring for AQA, Edexcel, OCR, and MYP students. Small group sessions focus on psychological theories, research methods, and real-world applications.",
};

const examBoards = [
    {
        name: "AQA Psychology",
        topics: [
            "Cognitive psychology and memory",
            "Social influence and conformity",
            "Developmental psychology",
            "Biopsychology",
            "Research methods"
        ]
    },
    {
        name: "OCR Psychology",
        topics: [
            "Cognitive psychology",
            "Social influence",
            "Developmental stages",
            "Biological psychology",
            "Research methods"
        ]
    },
    {
        name: "Edexcel Psychology",
        topics: [
            "Biological psychology",
            "Cognitive processes",
            "Social psychology",
            "Developmental psychology",
            "Research methods"
        ]
    },
    {
        name: "MYP Psychology",
        topics: [
            "Psychological concepts",
            "Human behavior",
            "Research methods",
            "Ethical considerations",
            "Real-world applications"
        ]
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students to ensure mastery of core concepts."
    },
    {
        icon: Brain,
        title: "Expert Tutors",
        description: "Learn from experienced Psychology tutors who understand the requirements of each exam board."
    },
    {
        icon: Target,
        title: "Exam Board Alignment",
        description: "Curriculum aligned with AQA, Edexcel, OCR, and MYP specifications for effective exam preparation."
    },
    {
        icon: Award,
        title: "Proven Results",
        description: "Student-centered approach fostering deep understanding of psychological theories and concepts."
    }
];

export default function IGCSEPsychologyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            GCSE/IGCSE/MYP Psychology Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Tailored Psychology tutoring for AQA, Edexcel, OCR, and MYP students in small groups of 4-5. Our sessions focus on mastering core concepts, psychological theories, research methods, and real-world applications to ensure effective exam preparation.
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

            {/* Exam Boards Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Curriculum by Exam Board
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {examBoards.map((board, index) => (
                                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                                    <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-500/5">
                                        <CardTitle className="text-xl">{board.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <ul className="space-y-2">
                                            {board.topics.map((topic, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span className="text-muted-foreground">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Topics Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Key Topics Covered
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Cognitive Psychology</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Understanding memory, perception, thinking, and problem-solving processes.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Social Influence</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Exploring conformity, obedience, and social factors affecting behavior.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Developmental Psychology</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Studying human development across the lifespan and key developmental stages.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Research Methods</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Learning experimental design, data analysis, and ethical considerations in research.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Boost Your Psychology Grades!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our tailored Psychology tutoring can help you master core concepts and excel in your exams. Our small group sessions ensure personalized attention and effective exam preparation.
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

