import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "KS2 English Tutoring | Improve ME Institute Dubai",
    description: "Specialized KS2 English tutoring focusing on reading, writing, and comprehension skills. Small group sessions prepare students for KS2 assessments with engaging lessons.",
};

const topics = [
    {
        name: "Reading Comprehension",
        detail: "Developing skills to understand and analyze texts, expanding vocabulary, and drawing inferences from written material."
    },
    {
        name: "Writing for Various Purposes",
        detail: "Learning to write effectively for different genres including stories, reports, letters, and persuasive texts."
    },
    {
        name: "Sentence and Paragraph Composition",
        detail: "Building strong writing skills through structured sentence and paragraph development."
    },
    {
        name: "Story and Non-Fiction Text Structuring",
        detail: "Understanding how to organize and structure different types of texts effectively."
    },
    {
        name: "SPAG (Spelling, Punctuation, and Grammar)",
        detail: "Mastering advanced spelling patterns, punctuation rules, and grammatical structures."
    },
    {
        name: "Handwriting",
        detail: "Refining handwriting skills for legibility and fluency in written communication."
    },
    {
        name: "Reading for Meaning and Inference",
        detail: "Analyzing texts to draw conclusions, infer meanings, and understand deeper layers of written content."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students to ensure individual progress."
    },
    {
        icon: BookOpen,
        title: "Engaging Lessons",
        description: "Interactive activities and engaging lessons that make learning English enjoyable and effective."
    },
    {
        icon: Target,
        title: "KS2 Assessment Preparation",
        description: "Focused preparation for KS2 assessments to ensure students are fully prepared."
    },
    {
        icon: Award,
        title: "Strong Foundations",
        description: "Building strong foundations in literacy skills while boosting confidence in English."
    }
];

export default function KS2EnglishPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            KS2 English Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Specialized group sessions for Key Stage 2 students, focusing on reading, writing, and comprehension skills. Our engaging lessons and interactive activities prepare students for KS2 assessments while building strong foundations in literacy and boosting confidence.
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
                        Strengthen Your Child's English Skills!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our specialized KS2 English tutoring can help your child excel in reading, writing, and comprehension. Our small group sessions ensure personalized attention and effective learning.
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Book Your Free Assessment
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Choose Our KS2 English Program?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Personalized Attention</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Small group sessions of 4-5 students ensure each child receives individual attention and support.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Assessment Preparation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Focused preparation for KS2 assessments to ensure students are fully prepared and confident.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Interactive Learning</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Engaging lessons and interactive activities make learning English enjoyable and effective.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Strong Foundations</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Building strong foundations in literacy skills while boosting confidence in English communication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

