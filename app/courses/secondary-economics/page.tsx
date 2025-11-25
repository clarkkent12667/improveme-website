import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, DollarSign, Globe, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
    title: "Expert Economics Tutoring for GCSE, IGCSE, A-Level & IB",
    description: "Personalized tutoring for GCSE, IGCSE, A-Level & IB Economics. Build a strong foundation in economic principles & ace your exams with expert guidance.",
};

const qualifications = [
    {
        title: "GCSE Economics",
        description: "Essential topics like supply and demand, production, market structures, and government intervention. Develop comprehensive understanding of microeconomic and macroeconomic concepts with exam strategies, case studies, and practice questions."
    },
    {
        title: "IGCSE Economics",
        description: "Understanding economic activity, market forces, government policies, and the global economy. Gain insight into how economies work and how economic decisions impact individuals and societies through practical examples and structured learning."
    },
    {
        title: "A-Level Economics",
        description: "Advanced topics like market behaviors, macroeconomic indicators, fiscal and monetary policies, and international economics. Analyze complex economic data, apply theoretical knowledge, and develop critical understanding of real-world economic issues."
    },
    {
        title: "IB Economics (SL & HL)",
        description: "Complete coverage including microeconomics, macroeconomics, international trade, and development economics. Guidance through internal assessments, data response questions, and extended essays with skills to analyze economic situations and evaluate policies."
    }
];

export default function SecondaryEconomicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                            Expert Secondary Economics Tutoring | GCSE, IGCSE, A-Level & IB Support
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Help your child excel in economics with personalized tutoring tailored to students aged 14-18. We offer expert guidance for GCSE, IGCSE economics, A-Level, and IB economics, helping students build a strong understanding of economic principles and improve their exam performance.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether your child is just starting an economics course or preparing for advanced exams, we've got it covered.
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
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Microeconomics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Master supply and demand, market structures, and consumer behavior.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Macroeconomics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Understand GDP, inflation, unemployment, and fiscal/monetary policies.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">International Trade</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Explore global economics, trade theories, and exchange rates.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                                    <BarChart3 className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Economic Analysis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Develop critical thinking and data analysis skills for economics.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <Card className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300 mb-12">
                            <CardHeader className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 pb-6">
                                <CardTitle className="text-3xl mb-2">Year 10-13 Economics Tutoring (Ages 14-18)</CardTitle>
                                <CardDescription className="text-xl font-semibold text-emerald-600">
                                    Comprehensive Economic Education
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    Our economics course for years 10-13 provides students with a solid understanding of economic theories and their real-world applications. We cover core topics such as supply and demand, market structures, macroeconomic policies, international trade, and economic development. Our goal is to help students think critically about how economies function and make informed decisions, preparing them for both exams and future studies in the field of economics.
                                </p>
                            </CardContent>
                        </Card>

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
            <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to excel in Economics? Book a free session with our expert economics tutor and discover how our personalized approach can help your child master economic principles and achieve outstanding results.
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
