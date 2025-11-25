import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, Users, Baby, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
    title: "Secondary Psychology Tutoring in UAE – GCSE & A-Level Support",
    description: "Struggling with GCSE or A-Level Psychology? Our top psychology teachers in Dubai help students master key concepts & excel in exams. Read more!",
};

const topics = [
    {
        icon: Brain,
        title: "Cognitive Psychology",
        description: "Memory, perception, and how we process information."
    },
    {
        icon: Baby,
        title: "Developmental Psychology",
        description: "Human growth and development from childhood to adulthood."
    },
    {
        icon: Users,
        title: "Social Psychology",
        description: "Group behaviour, social influences, and interpersonal relationships."
    },
    {
        icon: FlaskConical,
        title: "Research Methods",
        description: "Understanding and applying psychological research methodologies."
    }
];

const qualifications = [
    {
        title: "GCSE Psychology",
        description: "Covering memory, social influence, development, and mental health, with a focus on key studies and exam skills. Our expert psychology teacher in Dubai ensures students stay on track with their learning objectives in GCSE Psychology."
    },
    {
        title: "A-Level Psychology",
        description: "Advanced topics like abnormal psychology and relationships, emphasizing critical thinking, essay writing, and theory evaluation. Our dedicated A-level psychology teacher helps students master these topics and build exam confidence."
    },
    {
        title: "IB Psychology (SL & HL)",
        description: "Covering biological, cognitive, and sociocultural approaches, focusing on assessments, extended essays, and exam preparation. Students benefit from our targeted teaching methods, led by a highly experienced psychology teacher in Dubai."
    }
];

export default function SecondaryPsychologyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-indigo-500/10 via-background to-purple-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                            Psychology Courses in UAE | Secondary Psychology Tutoring for Ages 14-18
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Explore the World of Human Behaviour! Our Psychology Courses in UAE support students aged 14-18 (Years 10-13), offering personalized guidance for GCSE Psychology, A-Level, and IB Psychology to help them understand psychological concepts and excel in their exams.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Students searching for Psychology Courses in the UAE often find our tailored tutoring approach very effective. If you are looking for a qualified psychology teacher in Dubai, our program ensures expert guidance.
                        </p>
                        <Link href="/#book-assessment">
                            <Button size="lg" className="h-12 px-8 text-lg">
                                Book Your Free Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Topics We Cover</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {topics.map((topic, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4">
                                        <topic.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <Card className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300 mb-12">
                            <CardHeader className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pb-6">
                                <CardTitle className="text-3xl mb-2">Year 10-13 Psychology Tutoring (Ages 14-18)</CardTitle>
                                <CardDescription className="text-xl font-semibold text-indigo-600">
                                    Understanding Human Behaviour
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    Our Psychology Courses in UAE cover essential topics that help students understand the complexities of human behaviour and mental processes.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Core Areas:</h4>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-semibold">Cognitive Psychology:</span>
                                                    <p className="text-sm text-muted-foreground">Memory and perception</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-semibold">Developmental Psychology:</span>
                                                    <p className="text-sm text-muted-foreground">Human growth from childhood to adulthood</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-semibold">Social Psychology:</span>
                                                    <p className="text-sm text-muted-foreground">Group behaviour and influences</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Additional Focus:</h4>
                                        <ul className="space-y-3">
                                            <li className="flex gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-semibold">Biological Basis of Behaviour:</span>
                                                    <p className="text-sm text-muted-foreground">Genetics, brain functions, and behaviour</p>
                                                </div>
                                            </li>
                                            <li className="flex gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-semibold">Research Methods:</span>
                                                    <p className="text-sm text-muted-foreground">Understanding and applying psychological research</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-indigo-500/10 border-l-4 border-indigo-600">
                                    <p className="text-sm leading-relaxed">
                                        Lessons are interactive, using real-world examples and discussions to make topics accessible. We prepare students for exams and help them build a strong foundation in Psychology. Whether you're preparing for GCSE Psychology or need an experienced A-level psychology teacher, we're here to support you.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <h2 className="text-3xl font-bold text-center mb-12">Qualifications We Cater To</h2>
                        <div className="grid md:grid-cols-3 gap-6">
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
            <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to explore the fascinating world of Psychology? Book a free session with our expert psychology teacher in Dubai and discover how our Psychology Courses in UAE can help your child excel in their studies.
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Book Your Free Assessment
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Choose Our Psychology Courses?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-indigo-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Expert Psychology Teachers</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Qualified psychology teachers in Dubai with extensive experience in GCSE, A-Level, and IB Psychology.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-indigo-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Interactive Learning</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Real-world examples, case studies, and engaging discussions make psychology come alive.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-indigo-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
                                    <p className="text-sm text-muted-foreground">
                                        All major psychology topics from cognitive to social psychology, plus research methods.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-indigo-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Exam-Focused Approach</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Targeted exam preparation with essay writing skills and critical evaluation techniques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
