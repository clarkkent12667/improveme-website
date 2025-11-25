import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Users, Target, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "EYFS English Tutoring | Improve ME Institute Dubai",
    description: "Early Years Foundation Stage English tutoring for children aged 3-5. Building literacy foundations through play, stories, and interactive activities.",
};

const topics = [
    {
        name: "Phonics and Letter Recognition",
        detail: "Learning letter sounds and recognition through fun, interactive activities."
    },
    {
        name: "Vocabulary Development",
        detail: "Expanding vocabulary through stories, songs, and everyday conversations."
    },
    {
        name: "Listening and Speaking Skills",
        detail: "Developing communication skills through storytelling and group activities."
    },
    {
        name: "Pre-Reading Skills",
        detail: "Building foundations for reading through picture books and story comprehension."
    },
    {
        name: "Pre-Writing Skills",
        detail: "Developing fine motor skills and early writing through drawing and tracing."
    }
];

const features = [
    {
        icon: Users,
        title: "Small Group Sessions",
        description: "Personalized attention in small groups to ensure each child receives individual support."
    },
    {
        icon: BookOpen,
        title: "Play-Based Learning",
        description: "Stories, songs, and interactive activities make learning English fun and engaging."
    },
    {
        icon: Target,
        title: "Early Literacy Foundation",
        description: "Building strong literacy foundations from an early age."
    },
    {
        icon: Award,
        title: "Certified Teachers",
        description: "Experienced early years teachers guide your child's English language journey."
    }
];

export default function EYFSEnglishPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            EYFS English Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Early Years Foundation Stage English tutoring for children aged 3-5. Our program builds literacy foundations through play, stories, and interactive activities. Guided by experienced early years teachers, we make learning English fun and engaging.
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
                        Start Your Child's English Journey!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our EYFS English program can help your child develop early literacy skills through fun, interactive learning.
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

