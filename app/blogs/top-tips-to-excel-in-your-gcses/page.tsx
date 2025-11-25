import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Top Tips To Excel In Your GCSEs - Improve ME Institute",
    description: "Discover top tips to excel in your GCSEs. Learn effective revision strategies, exam techniques, and study methods for GCSE success.",
};

export default function TopTipsToExcelInYourGCSEsPage() {
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
                                GCSE
                            </span>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>November 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>8 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Top Tips To Excel In Your GCSEs
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                Studying for your GCSEs can be a very stressful time for students, and it is only natural that they want to achieve the best grades possible. Here are top tips to help you excel in your GCSEs.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">1. Start Early and Plan Well</h2>
                                <p>
                                    Don't leave revision until the last minute:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Begin revision months before exams</li>
                                    <li>Create a realistic revision timetable</li>
                                    <li>Break down subjects into topics</li>
                                    <li>Allocate time based on difficulty and importance</li>
                                    <li>Review and adjust your plan regularly</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">2. Understand the Exam Format</h2>
                                <p>
                                    Know what to expect:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Familiarize yourself with exam structure</li>
                                    <li>Understand mark schemes and assessment criteria</li>
                                    <li>Know the types of questions asked</li>
                                    <li>Practice with past papers</li>
                                    <li>Time yourself to build exam stamina</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">3. Use Active Revision Techniques</h2>
                                <p>
                                    Passive reading isn't enough:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Create mind maps and summaries</li>
                                    <li>Make flashcards for key facts</li>
                                    <li>Teach concepts to others</li>
                                    <li>Write practice essays and answers</li>
                                    <li>Test yourself regularly</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">4. Practice Past Papers</h2>
                                <p>
                                    Past papers are invaluable:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Practice under exam conditions</li>
                                    <li>Time yourself accurately</li>
                                    <li>Mark your answers using mark schemes</li>
                                    <li>Identify areas needing improvement</li>
                                    <li>Learn from mistakes</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">5. Focus on Weak Areas</h2>
                                <p>
                                    Don't just revise what you know:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Identify your weakest topics</li>
                                    <li>Spend extra time on difficult areas</li>
                                    <li>Seek help from teachers or tutors</li>
                                    <li>Practice until you're confident</li>
                                    <li>Don't avoid challenging topics</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">6. Stay Organized</h2>
                                <p>
                                    Organization improves efficiency:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Keep notes organized by subject and topic</li>
                                    <li>Use folders and binders</li>
                                    <li>Create revision checklists</li>
                                    <li>Track your progress</li>
                                    <li>Maintain a study schedule</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">7. Take Care of Yourself</h2>
                                <p>
                                    Your health affects your performance:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Get 7-9 hours of sleep each night</li>
                                    <li>Eat nutritious meals</li>
                                    <li>Exercise regularly</li>
                                    <li>Take breaks and relax</li>
                                    <li>Manage stress effectively</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">8. Seek Support</h2>
                                <p>
                                    Don't struggle alone:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Ask teachers for help</li>
                                    <li>Consider tutoring for difficult subjects</li>
                                    <li>Form study groups with classmates</li>
                                    <li>Talk to family about stress</li>
                                    <li>Use online resources and revision guides</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">9. Develop Exam Techniques</h2>
                                <p>
                                    Good technique improves performance:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Read questions carefully</li>
                                    <li>Plan answers before writing</li>
                                    <li>Manage time effectively</li>
                                    <li>Answer all questions</li>
                                    <li>Review answers if time allows</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">10. Stay Motivated</h2>
                                <p>
                                    Maintain motivation throughout:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Set clear, achievable goals</li>
                                    <li>Reward yourself for progress</li>
                                    <li>Remember your long-term goals</li>
                                    <li>Stay positive and resilient</li>
                                    <li>Celebrate small victories</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We specialize in GCSE preparation and help students excel in their exams. Our tutors understand the GCSE curriculum and exam requirements, providing targeted support, effective revision strategies, and exam techniques. We work with students to build confidence, improve understanding, and achieve their target grades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Excel in Your GCSEs</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our GCSE tutoring can help you achieve your target grades.
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

