import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, TrendingUp, Award, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "Expert Mathematics Tutor | IGCSE, A-Level & IB Maths Classes",
    description: "Looking for a professional mathematics tutor? Our expert IGCSE, A-Level, & IB maths teacher offers private maths classes to help you excel. Enroll today!",
};

const ageGroups = [
    {
        title: "Year 7 Maths Tutoring (Ages 11-12)",
        description: "Our Year 7 Maths program covers essential topics such as basic statistics, pie charts, and arithmetic involving negative numbers. Students will learn key concepts like fractions, decimals, and percentages, as well as basic algebra and geometry. We focus on building problem-solving skills, ensuring students can confidently approach topics like angles, linear sequences, and graphs with the help of a skilled maths teacher."
    },
    {
        title: "Year 8 Maths Tutoring (Ages 12-13)",
        description: "In Year 8 Maths, students deepen their understanding of algebra, fractions, and geometry. We cover topics such as significant figures, mixed numbers, surface areas, and volumes. Students will also explore algebraic expressions, equations, and Pythagoras' theorem. Our lessons are designed to solidify core skills, preparing students for more advanced mathematical concepts with support from private maths classes."
    },
    {
        title: "Year 9 Maths Tutoring (Ages 13-14)",
        description: "Our Year 9 Maths program focuses on more complex topics, including quadratic equations, inequalities, algebraic fractions, and simultaneous equations. Students will also learn about graphs, trigonometry, and geometry, applying these skills in real-world problem-solving scenarios. This year is critical for laying the groundwork for higher-level maths, helping students prepare for GCSEs and beyond, especially if they plan to pursue IGCSE Maths or A Level Maths later."
    },
    {
        title: "Year 10-13 Maths Tutoring (Ages 14-18)",
        description: "Students in Years 10-13 receive focused support for their GCSE, IGCSE, A-Level, and IB exams. We cover advanced topics such as algebra, calculus, trigonometry, statistics, and differential equations. Our tutoring ensures students master complex mathematical concepts and feel confident going into their exams. Whether it's IB Maths or A Level Maths, our experienced mathematics tutor ensures every student gets individual attention."
    }
];

const qualifications = [
    {
        title: "GCSE Mathematics",
        description: "Comprehensive coverage of GCSE topics with exam-focused strategies and past paper practice."
    },
    {
        title: "IGCSE Maths",
        description: "Expert guidance through the IGCSE curriculum with emphasis on problem-solving techniques."
    },
    {
        title: "A-Level Maths",
        description: "Advanced topics including calculus, statistics, and mechanics for A-Level success."
    },
    {
        title: "IB Mathematics",
        description: "Both SL and HL coverage with focus on internal assessments and exam preparation."
    }
];

export default function SecondaryMathematicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-indigo-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Expert Mathematics Tutor for Students Aged 11-18
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Give your child the support they need in Maths with personalized tutoring tailored to students aged 11-18. We offer expert guidance for GCSE, IGCSE, A-Level, and IB Maths, helping students strengthen their understanding and improve their exam performance.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            If you're looking for a qualified mathematics tutor, our team is here to support your child's journey.
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
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                                    <Calculator className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Expert Tutors</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Qualified mathematics tutors with proven track records in GCSE, IGCSE, A-Level, and IB.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Personalized Learning</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Tailored lessons that adapt to your child's learning style and pace.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                                    <Award className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Exam Preparation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Focused exam strategies, past papers, and mark scheme understanding.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4">
                                    <Target className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Proven Results</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Students consistently achieve top grades with our expert guidance.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Age Groups Section */}
            <section className="py-20">
                <div className="container">
                    <div className="space-y-8 max-w-7xl mx-auto">
                        {ageGroups.map((group, index) => (
                            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                                <CardHeader className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
                                    <CardTitle className="text-2xl">{group.title}</CardTitle>
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
            <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to boost your child's maths performance? Book a free session with our expert mathematics tutor and discover how our personalized approach can help them excel.
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
