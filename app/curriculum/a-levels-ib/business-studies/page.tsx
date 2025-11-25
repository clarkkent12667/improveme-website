import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "A-Level/IB Business Studies Tutoring | Improve ME Institute Dubai",
    description: "Specialized group sessions tailored for AQA, Edexcel, OCR, and IB students. Small group sessions ensure mastery of advanced business concepts and strategic analysis.",
};

const examBoards = [
    {
        name: "AQA Business Studies",
        topics: [
            "Business objectives and strategy",
            "Organizational structure",
            "Financial performance",
            "Marketing strategies",
            "Business ethics and corporate social responsibility"
        ]
    },
    {
        name: "OCR Business Studies",
        topics: [
            "Strategic planning",
            "Resource management",
            "Market analysis",
            "Innovation and enterprise",
            "Corporate social responsibility"
        ]
    },
    {
        name: "Edexcel Business Studies",
        topics: [
            "Business growth",
            "Operational planning",
            "Financial management",
            "Leadership and management",
            "Entrepreneurship"
        ]
    },
    {
        name: "IB Business Management",
        topics: [
            "Business organization",
            "Human resource management",
            "Finance and accounts",
            "Marketing",
            "Operations management"
        ]
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students to ensure mastery of advanced concepts."
    },
    {
        icon: Briefcase,
        title: "Expert Tutors",
        description: "Learn from experienced Business Studies tutors who understand the requirements of each exam board."
    },
    {
        icon: Target,
        title: "Exam Board Alignment",
        description: "Curriculum aligned with AQA, Edexcel, OCR, and IB specifications for effective exam preparation."
    },
    {
        icon: Award,
        title: "Strategic Analysis",
        description: "Focus on strategic analysis, business planning, and real-world business applications."
    }
];

export default function ALevelsIBBusinessStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            A-Level/IB Business Studies Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Specialized group sessions tailored for AQA, Edexcel, OCR, and IB students. Our small group sessions ensure mastery of advanced business concepts, strategic analysis, and effective exam preparation. We foster deep understanding of business principles through a student-centered approach.
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
                                    <h3 className="font-semibold mb-3">Business Objectives & Strategy</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Understanding business objectives, strategic planning, and decision-making processes.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Financial Performance</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Analyzing financial statements, budgeting, and financial management strategies.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Marketing Strategies</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Developing marketing plans, understanding consumer behavior, and market research.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-2">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold mb-3">Organizational Structure</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Understanding different organizational structures, leadership, and management styles.
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
                        Boost Your Business Studies Grades!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our specialized Business Studies tutoring can help you master advanced concepts and excel in your exams. Our small group sessions ensure personalized attention and effective exam preparation.
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

