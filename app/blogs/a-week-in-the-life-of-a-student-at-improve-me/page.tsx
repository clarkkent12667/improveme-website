import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "A Week in the Life of a Student at Improve ME - Improve ME Institute",
    description: "Experience a week in the life of a student at Improve ME Institute. See how our tutoring programs support students in managing their studies and achieving success.",
};

export default function WeekInLifeStudentPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blogs
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                                Student Life
                            </span>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>November 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>5 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            A Week in the Life of a Student at Improve ME
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                Hi! I am a Year 10 student juggling 11 GCSE subjects. Improve ME has helped me manage my subjects, with the supportive staff and teachers making a real difference in my academic journey.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Monday: Starting the Week Strong</h2>
                                <p>
                                    Monday afternoons, I attend my Maths session. My tutor helps me tackle challenging algebra problems and explains concepts I didn't fully understand in school. The small group setting means I get personalized attention while also learning from my peers' questions.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Tuesday: Science Support</h2>
                                <p>
                                    Tuesdays are for Science - we alternate between Biology, Chemistry, and Physics. Today we focused on Chemistry equations. The tutor breaks down complex concepts into manageable steps, and I feel much more confident about my upcoming test.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Wednesday: English Enhancement</h2>
                                <p>
                                    Wednesday sessions focus on English Literature. We analyze texts, discuss themes, and practice essay writing. The feedback on my writing has been incredibly helpful - I've seen real improvement in my grades.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Thursday: Exam Preparation</h2>
                                <p>
                                    Thursdays are dedicated to exam preparation. We work through past papers, practice time management, and review exam techniques. The structured approach helps me feel prepared and reduces my anxiety about upcoming exams.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Friday: Review and Planning</h2>
                                <p>
                                    Friday sessions focus on reviewing the week's learning and planning for the week ahead. We identify areas that need more work and set goals. This helps me stay organized and on track with all 11 subjects.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">What Makes Improve ME Special</h2>
                                <p>
                                    Several things stand out about my experience:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Supportive Staff:</strong> Everyone is friendly, approachable, and genuinely cares about my success</li>
                                    <li><strong>Expert Teachers:</strong> Tutors who understand the curriculum and know how to explain things clearly</li>
                                    <li><strong>Small Groups:</strong> Enough attention for individual help, but also peer learning</li>
                                    <li><strong>Flexible Schedule:</strong> Sessions fit around my school commitments</li>
                                    <li><strong>Comprehensive Support:</strong> Help across all my subjects, not just one or two</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">The Impact</h2>
                                <p>
                                    Since joining Improve ME, I've noticed:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Improved grades across all subjects</li>
                                    <li>Better understanding of difficult concepts</li>
                                    <li>Increased confidence in exams</li>
                                    <li>More effective study habits</li>
                                    <li>Reduced stress about managing multiple subjects</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Balancing Everything</h2>
                                <p>
                                    Managing 11 GCSE subjects is challenging, but Improve ME helps me:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Prioritize my studies effectively</li>
                                    <li>Stay organized and on track</li>
                                    <li>Get support when I need it</li>
                                    <li>Maintain balance between school, tutoring, and personal time</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    Join Us at Improve ME
                                </p>
                                <p>
                                    If you're juggling multiple subjects like me, Improve ME can help. The supportive environment, expert tutors, and comprehensive approach make managing your studies much more manageable. Whether you need help with one subject or multiple, the team is here to support your success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Improve ME for Yourself</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how we can help you manage your studies and achieve your academic goals.
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

