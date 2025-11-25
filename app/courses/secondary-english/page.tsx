import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, PenTool, MessageSquare, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "IGCSE English Tutor | Online & In-Person English Teacher",
    description: "Need an English tutor for IGCSE English? Get personalized coaching from a qualified English teacher. Start learning today. Visit now!",
};

const ageGroups = [
    {
        title: "Year 7-9 English Tutoring (Ages 11-14)",
        subtitle: "Foundational Language Skills",
        description: "Our Year 7–9 English program introduces students to foundational reading, writing, and analysis skills. Whether you're looking for an experienced English teacher or a dedicated English tutor, our sessions are designed to engage and educate. Topics include vocabulary building, creative writing, comprehension of short stories, and critical literary concepts. We also cover narrative structure, character exploration, and thematic analysis, including poetry and drama. Our lessons encourage creative expression while strengthening language, comprehension, and analytical skills through engaging activities like role-playing, group discussions, and reflective essays. This helps prepare students for the rigors of more advanced IGCSE English studies in later years."
    },
    {
        title: "Year 10-13 English Language Tutoring (Ages 14-18)",
        subtitle: "Advanced Communication & Analysis",
        description: "Students in Years 10–13 receive focused support for their GCSE, IGCSE, A-Level, and IB exams. With a certified English teacher guiding them, they build confidence and clarity in both written and spoken communication. Our tutoring includes in-depth studies of English language concepts, such as language analysis, persuasive writing, descriptive techniques, and essay construction. We ensure students are well-prepared to tackle both the creative and analytical demands of the curriculum and develop a confident, articulate voice in their writing."
    }
];

const qualifications = [
    {
        title: "GCSE English",
        description: "Comprehensive language and literature coverage with focus on analytical writing and exam techniques."
    },
    {
        title: "IGCSE English",
        description: "International curriculum support for both English Language and English Literature components."
    },
    {
        title: "A-Level English",
        description: "Advanced literary analysis, critical thinking, and sophisticated essay writing skills."
    },
    {
        title: "IB English (SL & HL)",
        description: "Complete IBDP English support including written assignments, oral presentations, and exams."
    }
];

export default function SecondaryEnglishPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-rose-500/10 via-background to-pink-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600">
                            Secondary English Teacher | IGCSE English Tutor for Ages 11-18
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Give your child the support they need in English with personalized tutoring tailored to students aged 11–18. We offer expert guidance for GCSE, IGCSE, A-Level, and IB English Language, helping students strengthen their understanding and improve their reading, writing, and analytical skills with the help of a qualified English tutor.
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
                                <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 mb-4">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Reading & Analysis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Develop critical reading and literary analysis skills for complex texts.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 mb-4">
                                    <PenTool className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Creative & Persuasive Writing</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Master various writing styles from creative narratives to persuasive essays.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 mb-4">
                                    <MessageSquare className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Language Analysis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Understand language techniques, rhetorical devices, and their effects.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-2 hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 mb-4">
                                    <Award className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-lg">Exam Excellence</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Targeted exam preparation with practice papers and marking strategies.</p>
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
                                <CardHeader className="bg-gradient-to-r from-rose-500/5 to-pink-500/5 pb-6">
                                    <CardTitle className="text-3xl mb-2">{group.title}</CardTitle>
                                    <CardDescription className="text-xl font-semibold text-rose-600">
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
            <section className="py-20 bg-gradient-to-br from-rose-600 via-rose-500 to-pink-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to excel in English? Book a free session with our experienced English teacher and discover how our expert tutoring can enhance your child's language skills and exam performance.
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
