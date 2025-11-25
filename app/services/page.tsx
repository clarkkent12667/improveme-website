import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, GraduationCap, Compass } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Programs - Improve ME Institute | Tutoring Services in Dubai",
    description: "Comprehensive afterschool tutoring for all age groups and grades. Primary (Age 3-11) and Secondary (Age 11-18) programs covering all major subjects.",
};

const programs = [
    {
        title: "Primary (Age 3 - 11)",
        icon: BookOpen,
        description: "Give your child a strong academic foundation at a trusted Tutoring Center in Dubai through our Early Years program.",
        fullDescription: "Focused on Maths and English, our engaging afterschool tutoring combines hands-on activities and interactive games to develop essential skills. Led by certified tutors in Dubai, we prepare young learners for long-term academic success.",
        subjects: [
            "Primary Mathematics",
            "English Language",
            "Primary Science",
            "CAT Preparation"
        ],
        features: [
            "Hands-on learning activities",
            "Interactive games",
            "Certified tutors",
            "Foundation building"
        ]
    },
    {
        title: "Secondary (Age 11 - 18)",
        icon: GraduationCap,
        description: "Ensure your child excels with specialised afterschool tutoring for Year 7 to Year 13.",
        fullDescription: "Whether it's foundation-building or exam prep for GCSE, IGCSE, A-Levels, or IB, our Coaching Institute in Dubai supports academic excellence through structured programs.",
        subjects: [
            "Secondary Mathematics",
            "English Language",
            "Physics",
            "Chemistry",
            "Biology",
            "Business Studies",
            "Economics",
            "Computer Science"
        ],
        features: [
            "GCSE/IGCSE preparation",
            "A-Level support",
            "IB curriculum",
            "Exam-focused strategies"
        ]
    },
    {
        title: "Career Counseling",
        icon: Compass,
        description: "Expert guidance to help students make informed decisions about their future academic and professional paths.",
        fullDescription: "Our career counseling program provides personalized support to help students navigate their educational journey and plan for their professional future.",
        subjects: [
            "University Applications",
            "Subject Selection",
            "Career Planning",
            "Academic Pathway Guidance"
        ],
        features: [
            "One-on-one counseling",
            "University selection support",
            "Career assessment",
            "Future planning"
        ]
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            Comprehensive Afterschool Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Tailored learning for excellence across all age groups and grades
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20">
                <div className="container">
                    <div className="grid gap-12 max-w-7xl mx-auto">
                        {programs.map((program, index) => (
                            <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <program.icon className="h-8 w-8" />
                                        </div>
                                        <div className="flex-1">
                                            <CardTitle className="text-3xl mb-2">{program.title}</CardTitle>
                                            <CardDescription className="text-base">{program.description}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <p className="text-muted-foreground">
                                        {program.fullDescription}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-3 text-lg">Subjects Covered:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {program.subjects.map((subject, i) => (
                                                    <span key={i} className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {program.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Link href="/#book-assessment">
                                            <Button size="lg" className="h-11 px-8">
                                                Book Free Assessment
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/50">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Book a free assessment today and discover how we can help your child excel
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
