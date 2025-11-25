import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "KS1 English Tutoring | Improve ME Institute Dubai",
    description: "Key Stage 1 English tutoring for children aged 5-7. Developing reading, writing, and communication skills through engaging activities.",
};

const topics = [
    {
        name: "Phonics and Reading",
        detail: "Mastering phonics, decoding words, and developing reading fluency."
    },
    {
        name: "Comprehension Skills",
        detail: "Understanding texts, answering questions, and making inferences."
    },
    {
        name: "Writing Skills",
        detail: "Learning to write sentences, simple stories, and descriptions."
    },
    {
        name: "Grammar and Punctuation",
        detail: "Understanding basic grammar rules and punctuation marks."
    },
    {
        name: "Spelling",
        detail: "Learning common words and spelling patterns."
    },
    {
        name: "Speaking and Listening",
        detail: "Developing communication skills through discussions and presentations."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups of 4-5 students."
    },
    {
        icon: BookOpen,
        title: "Engaging Activities",
        description: "Stories, games, and interactive activities make learning fun."
    },
    {
        icon: Target,
        title: "Literacy Development",
        description: "Building strong reading and writing foundations."
    },
    {
        icon: Award,
        title: "Certified Teachers",
        description: "Experienced primary school teachers guide your child's learning."
    }
];

export default function KS1EnglishPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            KS1 English Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Key Stage 1 English tutoring for children aged 5-7. Our program develops reading, writing, and communication skills through engaging activities and personalized learning. Guided by experienced primary school teachers.
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Develop Strong English Skills!</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our KS1 English program can help your child excel in reading and writing.
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

