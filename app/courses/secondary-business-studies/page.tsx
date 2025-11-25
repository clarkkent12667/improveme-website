import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Briefcase, TrendingUp, Users, BarChart } from "lucide-react";

export const metadata: Metadata = {
    title: "Secondary Business Studies Tutoring | GCSE to IB Levels",
    description: "Expert business studies tutoring for GCSE, IGCSE, A-Level & IB. Learn from experienced IB business teachers & excel in exams. Free assessment!",
};

const qualifications = [
    {
        title: "GCSE Business Studies",
        description: "Topics like entrepreneurship, business operations, financial decision-making, and marketing. Build a solid understanding of how businesses operate with thorough exam preparation using case studies and practice papers."
    },
    {
        title: "IGCSE Business Studies",
        description: "Key aspects including production, finance, and the external environment. Enhance ability to analyze case studies, develop business plans, and understand the dynamic business world."
    },
    {
        title: "A-Level Business Studies",
        description: "Advanced concepts such as corporate strategy, market analysis, managing change, and global business. Support for both theoretical and practical elements including business report writing and in-depth case study analysis."
    },
    {
        title: "IB Business Management",
        description: "Both SL and HL topics including business organization, finance, marketing, and strategic decision-making. Develop skills to analyze business issues, construct well-supported arguments, and apply business theories effectively."
    }
];

export default function SecondaryBusinessStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-amber-500/10 via-background to-yellow-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
                            Secondary Business Studies Tutoring for Ages 14-18
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Prepare your child for success in business studies with personalized tutoring tailored to students aged 14-18. We offer expert guidance for GCSE, IGCSE, A-Level, and IB Business Studies, helping students understand the intricacies of the business world and improve their exam performance.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether your child needs help from a subject expert or an experienced IB business teacher, we provide the right support.
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
                                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
                                    <Briefcase className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Business Operations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Understand production, operations management, and organizational structures.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
                                    <TrendingUp className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Finance & Accounting</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Master financial decision-making, forecasting, and business analysis.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
                                    <Users className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Marketing & HR</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Explore marketing strategies, human resources, and organizational behavior.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4">
                                    <BarChart className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Strategy & Analysis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Develop strategic thinking and business case study analysis skills.</p>
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
                            <CardHeader className="bg-gradient-to-r from-amber-500/5 to-yellow-500/5 pb-6">
                                <CardTitle className="text-3xl mb-2">Year 10-13 Business Studies Tutoring (Ages 14-18)</CardTitle>
                                <CardDescription className="text-xl font-semibold text-amber-600">
                                    Comprehensive Business Education
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    Our business studies program for Years 10-13 is designed to help students develop an in-depth understanding of key business concepts, including finance, marketing, human resources, and operations. We cover advanced topics such as business strategy, market analysis, financial forecasting, and entrepreneurship. Lessons are led by specialists, including an IB business teacher for those following the IB curriculum. Our lessons are tailored to ensure that students not only understand theoretical concepts but also know how to apply them in real-world scenarios, preparing them for exams and future business endeavors.
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
            <section className="py-20 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to excel in Business Studies? Book a free session with our expert IB business teacher and discover how our comprehensive tutoring can help your child master business concepts and achieve top grades.
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
