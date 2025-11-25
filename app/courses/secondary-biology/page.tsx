import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Microscope, Dna, Heart, Leaf } from "lucide-react";

export const metadata: Metadata = {
    title: "Secondary Biology Tutoring – Improve Me Institute",
    description: "Looking for an expert Biology teacher? Get top-quality IGCSE & GCSE Biology tutoring at Improve ME Institute and boost your grades today!",
};

const ageGroups = [
    {
        title: "Year 7-9 Biology Tutoring (Ages 11-14)",
        subtitle: "Building Biological Foundations",
        description: "Our Year 7-9 Biology program helps students build a strong foundation in essential biological concepts. Key topics include cells, human and plant systems, reproduction, and ecosystems. We focus on understanding the structure and function of the body, as well as how organisms interact with their environment. Our goal is to make learning interactive and engaging, preparing students for more advanced topics in later years with the help of an experienced biology teacher."
    },
    {
        title: "Year 10-13 Biology Tutoring (Ages 14-18)",
        subtitle: "Advanced Exam Preparation",
        description: "Students in Years 10-13 receive focused support for their GCSE Biology, IGCSE Biology, A-Level, and IB exams. We cover advanced topics such as genetics, evolution, ecology, cellular processes, and human physiology. Our tutoring ensures students understand these challenging concepts and feel confident for their exams under the guidance of a subject-specialist biology teacher."
    }
];

const qualifications = [
    {
        title: "GCSE Biology",
        description: "Complete coverage of cell biology, genetics, ecology, and human biology with exam strategies."
    },
    {
        title: "IGCSE Biology",
        description: "International curriculum support focusing on practical skills and theoretical understanding."
    },
    {
        title: "A-Level Biology",
        description: "Advanced topics including molecular biology, genetics, evolution, and ecosystems."
    },
    {
        title: "IB Biology (SL & HL)",
        description: "Comprehensive IBDP Biology with internal assessment and extended essay guidance."
    }
];

export default function SecondaryBiologyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-teal-500/10 via-background to-cyan-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                            Expert Biology Teacher for IGCSE & GCSE Biology (Ages 11-18)
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Give your child the support they need in Biology with personalized tutoring tailored to students aged 11-18. We offer expert guidance for GCSE Biology, IGCSE Biology, A-Level, and IB Biology, helping students strengthen their understanding and improve their exam performance.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether your child needs a dedicated biology teacher or extra help for upcoming exams, we are here to support their academic growth.
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
                                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4">
                                    <Microscope className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Cell Biology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Master cellular structure, function, and processes at the microscopic level.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4">
                                    <Dna className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Genetics & Evolution</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Understand DNA, inheritance, natural selection, and evolutionary processes.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4">
                                    <Heart className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Human Physiology</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Explore body systems, organs, and how they work together.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4">
                                    <Leaf className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Ecology & Environment</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Study ecosystems, biodiversity, and environmental interactions.</p>
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
                                <CardHeader className="bg-gradient-to-r from-teal-500/5 to-cyan-500/5 pb-6">
                                    <CardTitle className="text-3xl mb-2">{group.title}</CardTitle>
                                    <CardDescription className="text-xl font-semibold text-teal-600">
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
            <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to excel in Biology? Book a free session with our expert biology teacher and discover how our personalized tutoring can help your child master biological concepts and achieve top grades.
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
