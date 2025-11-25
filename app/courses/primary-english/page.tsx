import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Mic, PenTool, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "Expert Primary English Tutor in Dubai | Improve ME Institute",
    description: "Looking for a reliable primary English tutor in Dubai? Our program is tailored for students aged 3–11 and offers dynamic English tutoring focused on reading, writing, speaking, and listening.",
};

const ageGroups = [
    {
        title: "Foundation Stage English Tutoring (Ages 3-5)",
        subtitle: "Early Language Skills Through Fun!",
        description: "Our Foundation Stage English program (FS1-FS2) helps children build early language skills through fun activities. Led by certified primary English tutors in Dubai, the program covers phonics, vocabulary, and listening skills. With engaging games and storytelling, we make English tutoring exciting and effective from the very beginning.",
        topics: [
            {
                name: "Phonics and Letter Recognition",
                detail: "Learning sounds and letters through songs and games."
            },
            {
                name: "Basic Vocabulary Building",
                detail: "Introducing simple words and expanding vocabulary through play."
            },
            {
                name: "Storytelling and Listening Skills",
                detail: "Encouraging children to listen to stories and retell them in their own words."
            }
        ],
        goal: "Our aim is to make learning language fun while developing key skills that will give your child a head start in reading and writing."
    },
    {
        title: "Year 3-5 English Tutoring (Ages 7-9)",
        subtitle: "Laying the Foundation for Literacy!",
        description: "At this stage, students begin to deepen their skills through immersive English tutoring. We guide them in creative writing, reading comprehension, and proper grammar usage. With support from dedicated primary English tutors in Dubai, we encourage children to express themselves and build confidence in language.",
        topics: [
            {
                name: "Reading Comprehension",
                detail: "Understanding stories, answering questions, and discussing characters and plot."
            },
            {
                name: "Creative Writing",
                detail: "Learning how to write simple stories, describe scenes, and use imaginative language."
            },
            {
                name: "Grammar and Spelling",
                detail: "Learning basic punctuation, spelling rules, and using correct grammar."
            }
        ],
        goal: "Through interactive activities, we keep children engaged while strengthening their reading, writing, and comprehension skills. Our focus is on helping students enjoy English and build a strong foundation for their future studies."
    },
    {
        title: "Year 4-6 English Tutoring (Ages 8-11)",
        subtitle: "Becoming a Confident Communicator!",
        description: "Our advanced English tutoring for primary students focuses on expanding vocabulary and mastering both creative writing and persuasive expression. Delivered by a qualified primary English tutor in Dubai, this level helps students communicate ideas clearly and prepares them for secondary-level English.",
        topics: [
            {
                name: "Creative and Persuasive Writing",
                detail: "Writing stories, essays, and learning how to express opinions effectively."
            },
            {
                name: "Vocabulary Expansion and Grammar",
                detail: "Expanding vocabulary and understanding complex grammar concepts."
            }
        ],
        goal: "Our lessons encourage students to express their ideas clearly and build their analytical and creative skills. We make sure your child gains the confidence they need in reading and writing as they transition to secondary-level English."
    }
];

const features = [
    {
        icon: BookOpen,
        title: "Reading & Comprehension",
        description: "Build strong reading skills and deep understanding of texts through engaging stories and activities."
    },
    {
        icon: PenTool,
        title: "Creative Writing",
        description: "Develop imaginative writing skills with structured and creative writing techniques."
    },
    {
        icon: Mic,
        title: "Speaking & Listening",
        description: "Enhance communication skills through interactive discussions and storytelling sessions."
    },
    {
        icon: Award,
        title: "Certified Tutors",
        description: "Learn from experienced primary English tutors in Dubai with proven teaching methods."
    }
];

export default function PrimaryEnglishPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-purple-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-primary">
                            Expert Primary English Tutor in Dubai
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Looking for a reliable primary English tutor in Dubai? Our program is tailored for students aged 3–11 and offers dynamic English tutoring focused on reading, writing, speaking, and listening.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Using a blend of structured and creative writing techniques, we help young learners build confidence and develop a genuine love for the English language.
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
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4">
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
                                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-primary/5 pb-6">
                                    <CardTitle className="text-3xl mb-2">{group.title}</CardTitle>
                                    <CardDescription className="text-xl font-semibold text-purple-600">
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
                                                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                                                    <div>
                                                        <h5 className="font-semibold mb-1">{topic.name}</h5>
                                                        <p className="text-sm text-muted-foreground">{topic.detail}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-purple-500/10 border-l-4 border-purple-600">
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
            <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-primary text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free session with our experienced primary English tutor in Dubai and discover how our expert English tutoring and creative writing curriculum can boost your child's skills and confidence.
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
                            Why Choose Our English Tutoring?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Experienced English Tutors</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Our certified primary English tutors in Dubai bring years of teaching experience and passion for language education.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Comprehensive Curriculum</h3>
                                    <p className="text-sm text-muted-foreground">
                                        From phonics to persuasive writing, we cover all aspects of English language learning.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Interactive Learning</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Engaging activities, storytelling, and creative exercises make learning English fun and memorable.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-purple-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Confidence Building</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We focus on building your child's confidence in reading, writing, speaking, and listening.
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
