import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us - Improve ME Institute | Leading Tutoring Center in Dubai",
    description: "Improve ME Institute is responsible for the academic development of over 500 students in the past 3 years with a comprehensive, highly reputable skills development programme.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            Why Improve ME Institute?
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Improve ME Institute is responsible for the academic development of over 500 students in the past 3 years,
                            with a comprehensive, and highly reputable skills development programme.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                        <Card className="border-2 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl">Improve ME Institute</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    We focus on perfecting to deliver expertly instructed lessons to primary and secondary level students
                                    and using our own proprietary materials across all curricula.
                                </p>
                                <p className="text-muted-foreground">
                                    Whether you're seeking certified tutors in Dubai or an institute that tailors learning for excellence,
                                    we're here to elevate your child's performance.
                                </p>
                                <Link href="/services">
                                    <Button className="mt-4">Our Programs</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl">Beyond Tutoring</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Improve ME is a structured, proven self-learning program that gives your child the critical thinking
                                    skills and mindset to learn new materials independently.
                                </p>
                                <p className="text-muted-foreground">
                                    The key to this is that individualised instruction is carefully planned by an instructor and practised
                                    daily at home or in the center.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl">Your Child's Own Pace</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Regardless of academic level, your child will progress through the personalised class structure at
                                    his or her own pace advancing step by logical step in just 30 minutes per day, per subject.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-2xl">Results in School and Beyond</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Improve ME's disciplined, worksheet approach to learning advances your child's abilities in the
                                    classroom and throughout life.
                                </p>
                                <p className="text-muted-foreground font-semibold">
                                    In fact, many Improve ME students are studying above grade level ... and it all begins with practice.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/50">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Child's Performance?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join over 500 students who have experienced academic excellence with Improve ME Institute
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" className="h-12 px-8 text-lg">
                            Book Your Free Assessment
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
