import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Strategies For Tackling Homework and Submitting It on Time - Improve ME Institute",
    description: "Learn effective strategies for completing homework on time. Discover tips for organization, time management, and staying motivated.",
};

export default function StrategiesForTacklingHomeworkPage() {
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
                                Study Skills
                            </span>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>November 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>6 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Strategies For Tackling Homework and Submitting It on Time
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                Getting your children to complete their homework is a challenge that every parent will have faced at some point. With so many distractions at home, completing homework on time can be difficult. Here are effective strategies to help tackle homework and submit it on time.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">1. Create a Dedicated Study Space</h2>
                                <p>
                                    A proper study environment is essential:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Choose a quiet, well-lit area</li>
                                    <li>Remove distractions (phones, TV, games)</li>
                                    <li>Keep all materials organized and accessible</li>
                                    <li>Ensure comfortable seating and workspace</li>
                                    <li>Make it a consistent location</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">2. Establish a Routine</h2>
                                <p>
                                    Consistency helps build good habits:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Set a regular homework time each day</li>
                                    <li>Start homework at the same time</li>
                                    <li>Create a predictable schedule</li>
                                    <li>Build it into daily routine</li>
                                    <li>Make it non-negotiable</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">3. Break Tasks Down</h2>
                                <p>
                                    Large assignments can be overwhelming:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Break large tasks into smaller steps</li>
                                    <li>Create a checklist of tasks</li>
                                    <li>Tackle one part at a time</li>
                                    <li>Celebrate completing each step</li>
                                    <li>Make progress visible</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">4. Prioritize Tasks</h2>
                                <p>
                                    Not all homework is equally urgent:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Identify deadlines and due dates</li>
                                    <li>Start with most urgent or difficult tasks</li>
                                    <li>Use a priority system</li>
                                    <li>Focus on one task at a time</li>
                                    <li>Don't procrastinate on difficult work</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">5. Use Time Management Techniques</h2>
                                <p>
                                    Manage time effectively:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Estimate how long each task will take</li>
                                    <li>Set time limits for tasks</li>
                                    <li>Use timers to stay focused</li>
                                    <li>Take short breaks between tasks</li>
                                    <li>Avoid spending too long on one task</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">6. Minimize Distractions</h2>
                                <p>
                                    Create a distraction-free environment:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Put phones away or on silent</li>
                                    <li>Close unnecessary browser tabs</li>
                                    <li>Let family know homework time is important</li>
                                    <li>Use website blockers if needed</li>
                                    <li>Focus on one task at a time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">7. Start Early</h2>
                                <p>
                                    Don't wait until the last minute:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Begin homework as soon as possible</li>
                                    <li>Don't wait for motivation to strike</li>
                                    <li>Start with easier tasks to build momentum</li>
                                    <li>Avoid procrastination</li>
                                    <li>Create buffer time before deadlines</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">8. Stay Organized</h2>
                                <p>
                                    Organization prevents missed deadlines:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Use a planner or calendar</li>
                                    <li>Write down all assignments and due dates</li>
                                    <li>Keep materials organized</li>
                                    <li>Check assignments daily</li>
                                    <li>Review upcoming deadlines regularly</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">9. Seek Help When Needed</h2>
                                <p>
                                    Don't struggle alone:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Ask teachers for clarification</li>
                                    <li>Use tutoring support for difficult subjects</li>
                                    <li>Form study groups with classmates</li>
                                    <li>Use online resources and guides</li>
                                    <li>Ask parents for help when appropriate</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">10. Review Before Submission</h2>
                                <p>
                                    Always check work before submitting:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Review for completeness</li>
                                    <li>Check for errors</li>
                                    <li>Ensure requirements are met</li>
                                    <li>Verify formatting and presentation</li>
                                    <li>Submit on time or early</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We help students develop effective homework strategies and study habits. Our tutors provide support with homework completion, teach time management skills, and help students stay organized. We work with students to build independence and responsibility, ensuring they can tackle homework effectively and submit it on time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Homework Management</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our tutoring can help your child develop effective homework strategies.
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

