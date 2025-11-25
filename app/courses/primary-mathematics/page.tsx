import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calculator, Users, Target, Award } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Best Math Teacher for Primary Tutoring | Improve ME Institute Dubai",
    description: "Looking for the best Math teacher for your child? At Improve Me Institute, we offer personalised private Maths tuition for primary students aged 3–11 in Dubai.",
};

const ageGroups = [
    {
        title: "Foundation Stage Maths Tutoring (Ages 3-5)",
        subtitle: "Learning Through Play!",
        description: "Introduce your child to Maths through our Foundation Stage program (FS1-FS2), guided by Dubai's most trusted Maths tutors and primary school teachers. This early primary school Maths course uses games and visual aids to make learning interactive.",
        topics: [
            {
                name: "Counting and Number Recognition",
                detail: "Learning numbers and counting with games."
            },
            {
                name: "Basic Shapes and Colors",
                detail: "Identifying shapes and colors in everyday objects."
            },
            {
                name: "Simple Addition and Subtraction",
                detail: "Understanding the basics with visual aids."
            }
        ],
        goal: "Our goal is to make Maths fun, nurture curiosity, and help children develop an early love for numbers and problem-solving.",
        image: "/images/foundation-maths.jpg"
    },
    {
        title: "Year 3-5 Maths Tutoring (Ages 7-9)",
        subtitle: "Building Strong Basics!",
        description: "Year 3-5 focuses on building a solid Maths foundation through private Maths tuition. Children in this age group work with skilled Maths tutors in Dubai to master arithmetic, fractions, and data handling.",
        topics: [
            {
                name: "Addition, Subtraction, Multiplication, and Division",
                detail: "Mastering the basics to solve problems confidently."
            },
            {
                name: "Fractions and Measurement",
                detail: "Understanding halves, quarters, and basic units of measurement."
            },
            {
                name: "Shapes, Geometry, and Data Handling",
                detail: "Learning about shapes, patterns, and how to interpret graphs."
            }
        ],
        goal: "We use interactive activities and practical examples to make Maths relatable and engaging. Our aim is to help your child develop a strong foundation while enjoying every step of their learning journey.",
        image: "/images/year3-5-maths.jpg"
    },
    {
        title: "Year 4-6 Maths Tutoring (Ages 8-11)",
        subtitle: "Ready for the Next Level!",
        description: "Prepare your child for secondary school with lessons from the best Math teachers and private Maths tutors. This stage introduces early algebra, percentages, and geometry concepts with strong focus and care.",
        topics: [
            {
                name: "Multiplication and Division Mastery",
                detail: "Long multiplication, division, and applying these skills in real-life problems."
            },
            {
                name: "Fractions, Decimals, and Percentages",
                detail: "Making these topics easy to understand with practical exercises."
            },
            {
                name: "Early Algebra and Geometry",
                detail: "Introducing simple algebra, angles, symmetry, and calculating perimeter and area."
            }
        ],
        goal: "Our approach helps students become confident problem solvers and ensures they are fully prepared for the transition to secondary school Maths. We believe that every child can excel in Maths with the right support.",
        image: "/images/year4-6-maths.jpg"
    }
];

const features = [
    {
        icon: Users,
        title: "Certified Primary School Teachers",
        description: "All our Maths tutors are certified primary school teachers with extensive experience in Dubai."
    },
    {
        icon: Target,
        title: "Personalised Learning",
        description: "Private Maths tuition tailored to your child's individual needs and learning pace."
    },
    {
        icon: Calculator,
        title: "Interactive Methods",
        description: "Games, visual aids, and hands-on activities make learning Maths fun and effective."
    },
    {
        icon: Award,
        title: "Proven Results",
        description: "Our students consistently show strong improvement in primary school Maths."
    }
];

export default function PrimaryMathematicsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Best Math Teacher for Primary Tutoring
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Looking for the best Math teacher for your child? At Improve Me Institute, we offer personalised private Maths tuition for primary students aged 3–11. Our programs are led by certified primary school teachers and experienced Maths tutors in Dubai, making learning fun and effective.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Whether your child needs help with number recognition, basic operations, or more advanced topics, our tailored approach ensures strong results in primary school Maths.
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

            {/* Age Groups Section */}
            <section className="py-20">
                <div className="container">
                    <div className="space-y-16 max-w-7xl mx-auto">
                        {ageGroups.map((group, index) => (
                            <Card key={index} className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300">
                                <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-500/5 pb-6">
                                    <CardTitle className="text-3xl mb-2">{group.title}</CardTitle>
                                    <CardDescription className="text-xl font-semibold text-primary">
                                        {group.subtitle}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-6">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {group.description}
                                    </p>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Topics Covered:</h4>
                                        <div className="grid gap-4">
                                            {group.topics.map((topic, i) => (
                                                <div key={i} className="flex gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h5 className="font-semibold mb-1">{topic.name}</h5>
                                                        <p className="text-sm text-muted-foreground">{topic.detail}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-blue-500/10 border-l-4 border-blue-500">
                                        <p className="text-sm leading-relaxed">
                                            <span className="font-semibold">Our Goal: </span>
                                            {group.goal}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to see progress? Book a free session with our best Math teachers or an experienced Maths tutor in Dubai. Our private Maths tuition will help your child gain confidence and master primary school Maths—all under the guidance of certified primary school teachers.
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
                            Why Choose Improve Me Institute?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Best Math Teachers in Dubai</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Our team consists of certified primary school teachers with proven track records.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Tailored Approach</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Every child learns differently. We customize our teaching methods to match your child's needs.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Fun & Engaging</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We make Maths fun through games, visual aids, and interactive activities.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-primary font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Strong Foundation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We focus on building a solid foundation that prepares students for future success.
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
