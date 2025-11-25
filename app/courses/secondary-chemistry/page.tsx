import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlaskConical, Atom, Beaker, Droplets } from "lucide-react";

export const metadata: Metadata = {
    title: "Expert Chemistry Tutor | A-Level & IB Chemistry Exam Prep",
    description: "Looking for an expert chemistry tutor? Get personalized A-Level & IB Chemistry tutoring to boost your exam prep. Enroll now at Improve ME Institute!",
};

const ageGroups = [
    {
        title: "Year 7-9 Chemistry Tutoring (Ages 11-14)",
        subtitle: "Building Chemical Foundations",
        description: "For students in Years 7-9, we focus on building a strong foundation in Chemistry. Key topics covered include atomic structure, the periodic table, and chemical reactions. Our lessons are designed to engage students and prepare them for more advanced topics in later years."
    },
    {
        title: "Year 10-13 Chemistry Tutoring (Ages 14-18)",
        subtitle: "Advanced Exam Preparation",
        description: "Students in Years 10-13 receive focused support for their GCSE, IGCSE, A-Level, and IB exams. We cover advanced topics such as organic chemistry, electrolysis, thermodynamics, and chemical equilibrium. Our tutoring ensures students master these critical concepts and feel confident going into their exams."
    }
];

const qualifications = [
    {
        title: "GCSE Chemistry",
        description: "Essential topics like atomic structure, chemical bonding, and organic chemistry with thorough exam preparation through past papers and problem-solving skills."
    },
    {
        title: "IGCSE Chemistry",
        description: "Comprehensive coverage of energetics, chemical reactions, and bonding with focus on exam strategy and deep understanding of the syllabus."
    },
    {
        title: "A-Level Chemistry",
        description: "Challenging topics such as thermodynamics, kinetics, equilibrium, and advanced organic chemistry to develop analytical skills for theoretical and practical exams."
    },
    {
        title: "IB Chemistry (SL & HL)",
        description: "Complete coverage including stoichiometry, energy, and environmental chemistry with preparation for internal assessments and final exams."
    }
];

export default function SecondaryChemistryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-violet-500/10 via-background to-purple-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-purple-600">
                            Expert Chemistry Tutor | A-Level & IB Chemistry Exam Prep (Ages 11-18)
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Give your child the support they need in Chemistry with personalised tutoring tailored to students aged 11-18. We offer expert guidance for GCSE, IGCSE, A-Level, and IB Chemistry, helping students strengthen their understanding and improve their exam performance.
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
                                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600 mb-4">
                                    <FlaskConical className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Organic Chemistry</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Master carbon compounds, functional groups, and reaction mechanisms.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600 mb-4">
                                    <Atom className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Atomic Structure</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Understand atoms, elements, the periodic table, and chemical bonding.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600 mb-4">
                                    <Beaker className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Chemical Reactions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Explore reaction types, rates, equilibrium, and stoichiometry.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-600 mb-4">
                                    <Droplets className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Thermodynamics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Study energy changes, enthalpy, and thermochemical principles.</p>
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
                                <CardHeader className="bg-gradient-to-r from-violet-500/5 to-purple-500/5 pb-6">
                                    <CardTitle className="text-3xl mb-2">{group.title}</CardTitle>
                                    <CardDescription className="text-xl font-semibold text-violet-600">
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
                        <div className="grid md:grid-cols-2 gap-6">
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
            <section className="py-20 bg-gradient-to-br from-violet-600 via-violet-500 to-purple-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to excel in Chemistry? Book a free session with our expert chemistry tutor and discover how our personalized approach can help your child master chemical concepts and achieve outstanding results.
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
