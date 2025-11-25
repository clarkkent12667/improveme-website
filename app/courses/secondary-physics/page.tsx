import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, Waves, Magnet, Atom } from "lucide-react";

export const metadata: Metadata = {
    title: "Expert Physics Tutoring | GCSE, A-Level & IBDP Dubai",
    description: "Top Physics Tutors in Dubai, Specialized GCSE, IGCSE, A Level, and IB tutoring for students aged 11–18 to build strong skills and excel academically.",
};

const ageGroups = [
    {
        title: "Year 7-9 Physics Tutoring (Ages 11-14)",
        subtitle: "Building Strong Foundations",
        description: "Our foundational physics tutoring covers energy, waves, motion, magnetism, and more. These lessons build problem-solving and analytical skills, setting students up for success in higher-level concepts. Through engaging activities, we ensure they are well-prepared for advanced topics introduced in A Level physics tutoring or IBDP tutoring in later years."
    },
    {
        title: "Year 10-13 Physics Tutoring (Ages 14-18)",
        subtitle: "Advanced Exam Preparation",
        description: "Designed for older students, this phase of physics tutoring provides targeted instruction for A Level physics, IGCSE, and IB programs. We cover electromagnetism, thermodynamics, and nuclear physics with hands-on problem-solving and deep conceptual analysis. This is perfect for physics exam preparation in Dubai, helping students excel in final board exams."
    }
];

const qualifications = [
    {
        title: "GCSE Physics",
        description: "Comprehensive coverage of energy, forces, waves, and electricity with exam-focused practice."
    },
    {
        title: "IGCSE Physics",
        description: "International curriculum support with emphasis on practical applications and theory."
    },
    {
        title: "A-Level Physics",
        description: "Advanced topics including quantum physics, thermodynamics, and particle physics."
    },
    {
        title: "IB Physics (SL & HL)",
        description: "Complete IBDP coverage with internal assessment and extended essay support."
    }
];

export default function SecondaryPhysicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500/10 via-background to-red-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
                            Secondary Physics Tutoring for Ages 11-18
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Our physics tutoring for students aged 11–18 offers personalized support aligned with GCSE, IGCSE, A Level physics tutoring, and IBDP tutoring in Dubai.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether your child needs help mastering wave mechanics or preparing for rigorous exams, our expert tutors offer structured sessions and real-world application practice. We specialize in physics exam preparation in Dubai for all major boards, ensuring students build confidence, improve performance, and excel.
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
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 mb-4">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Electricity & Magnetism</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Master circuits, electromagnetic fields, and electrical principles.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 mb-4">
                                    <Waves className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Waves & Motion</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Understand wave mechanics, sound, light, and kinematics.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 mb-4">
                                    <Magnet className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Forces & Energy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Explore forces, energy transfers, and thermodynamics.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 mb-4">
                                    <Atom className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Nuclear Physics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Study atomic structure, radioactivity, and particle physics.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Age Groups Section */}
            <section className="py-20">
                <div className="container">
                    <div className="space-y-12 max-w-7xl mx-auto">
                        {ageGroups.map((group, index) => (
                            <Card key={index} className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <CardHeader className="bg-gradient-to-r from-orange-500/5 to-red-500/5 pb-6">
                                    <CardTitle className="text-3xl mb-2">{group.title}</CardTitle>
                                    <CardDescription className="text-xl font-semibold text-orange-600">
                                        {group.subtitle}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <p className="text-muted-foreground leading-relaxed">{group.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qualifications Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Qualifications We Cater To</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {qualifications.map((qual, index) => (
                                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-lg">{qual.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{qual.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to excel in Physics? Book a free session with our expert physics tutors and discover how our specialized tutoring can help your child master complex concepts and ace their exams.
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
