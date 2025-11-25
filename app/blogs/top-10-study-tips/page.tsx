import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Top 10 Study Tips - Improve ME Institute",
    description: "Discover the top 10 study tips to improve your academic performance. Learn effective study strategies, time management, and exam preparation techniques.",
};

export default function Top10StudyTipsPage() {
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
                                Study Tips
                            </span>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>November 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>7 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Top 10 Study Tips
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                Effective studying is key to academic success. Here are the top 10 study tips to help you maximize your learning and achieve better results.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">1. Stay Focused on Priorities</h2>
                                <p>
                                    Staying focused is essential, especially on your priorities. When completing a task, you should assess your preferences and use the most effective approach. Identify what's most important and tackle those tasks first. This ensures you're spending time on what matters most for your academic success.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">2. Create a Study Schedule</h2>
                                <p>
                                    Plan your study time in advance. A well-structured schedule helps you:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Allocate time for each subject</li>
                                    <li>Avoid last-minute cramming</li>
                                    <li>Balance study with other activities</li>
                                    <li>Stay organized and on track</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">3. Find Your Ideal Study Environment</h2>
                                <p>
                                    Choose a study space that:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Is quiet and free from distractions</li>
                                    <li>Has good lighting</li>
                                    <li>Is comfortable but not too comfortable</li>
                                    <li>Has all necessary materials nearby</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">4. Use Active Learning Techniques</h2>
                                <p>
                                    Engage actively with material:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Take notes in your own words</li>
                                    <li>Ask questions and seek answers</li>
                                    <li>Teach concepts to others</li>
                                    <li>Create summaries and mind maps</li>
                                    <li>Practice with past papers</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">5. Take Regular Breaks</h2>
                                <p>
                                    Your brain needs rest to process information effectively. Follow techniques like the Pomodoro Method:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Study for 25-30 minutes</li>
                                    <li>Take a 5-minute break</li>
                                    <li>After 4 sessions, take a longer break</li>
                                    <li>Use breaks to move around and refresh</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">6. Review Regularly</h2>
                                <p>
                                    Regular review is more effective than cramming:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Review notes within 24 hours of learning</li>
                                    <li>Schedule weekly reviews</li>
                                    <li>Use spaced repetition techniques</li>
                                    <li>Test yourself regularly</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">7. Stay Organized</h2>
                                <p>
                                    Organization improves efficiency:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Keep notes organized by subject</li>
                                    <li>Use folders and binders</li>
                                    <li>Maintain a calendar for deadlines</li>
                                    <li>Keep your study space tidy</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">8. Get Enough Sleep</h2>
                                <p>
                                    Sleep is crucial for learning:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Aim for 7-9 hours of sleep</li>
                                    <li>Sleep helps consolidate memories</li>
                                    <li>Well-rested students perform better</li>
                                    <li>Avoid all-nighters before exams</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">9. Practice Past Papers</h2>
                                <p>
                                    Practice exams are invaluable:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Familiarize yourself with exam format</li>
                                    <li>Identify knowledge gaps</li>
                                    <li>Practice time management</li>
                                    <li>Build exam confidence</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">10. Stay Motivated</h2>
                                <p>
                                    Maintain motivation by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Setting clear, achievable goals</li>
                                    <li>Rewarding yourself for progress</li>
                                    <li>Remembering your long-term objectives</li>
                                    <li>Staying positive and resilient</li>
                                    <li>Seeking support when needed</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We help students develop effective study habits and techniques. Our tutors teach these study strategies and provide support to help students implement them successfully. Whether you need help with study skills, subject knowledge, or exam preparation, we're here to support your academic success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Master Effective Study Techniques</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to learn how our tutoring can help you develop effective study habits and improve your academic performance.
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

