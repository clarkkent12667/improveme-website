import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Top Tips To Manage Exam Stress - Improve ME Institute",
    description: "Learn effective strategies to manage exam stress. Discover tips for staying calm, focused, and confident during exam periods.",
};

export default function TopTipsToManageExamStressPage() {
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
                                Exam Preparation
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
                            Top Tips To Manage Exam Stress
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                Even for the most prepared student, exams can be a stressful time. Whether GCSEs, A-Levels, or even just an end-of-term paper, they are an inevitable part of academic life. Here are top tips to help you manage exam stress effectively.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">1. Prepare Well in Advance</h2>
                                <p>
                                    Good preparation is the foundation of stress management:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Start revision early, not the night before</li>
                                    <li>Create a realistic study schedule</li>
                                    <li>Break down topics into manageable chunks</li>
                                    <li>Review regularly rather than cramming</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">2. Practice Relaxation Techniques</h2>
                                <p>
                                    Learn techniques to calm your mind:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Deep Breathing:</strong> Take slow, deep breaths to calm your nervous system</li>
                                    <li><strong>Meditation:</strong> Practice mindfulness or meditation</li>
                                    <li><strong>Progressive Muscle Relaxation:</strong> Tense and relax different muscle groups</li>
                                    <li><strong>Visualization:</strong> Imagine yourself succeeding in the exam</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">3. Maintain a Healthy Routine</h2>
                                <p>
                                    Your physical health affects your mental state:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Sleep Well:</strong> Aim for 7-9 hours of quality sleep</li>
                                    <li><strong>Eat Well:</strong> Nutritious meals fuel your brain</li>
                                    <li><strong>Exercise:</strong> Physical activity reduces stress and improves mood</li>
                                    <li><strong>Stay Hydrated:</strong> Drink plenty of water</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">4. Take Regular Breaks</h2>
                                <p>
                                    Don't study continuously for hours:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Take short breaks every 25-30 minutes</li>
                                    <li>Use breaks to move around, stretch, or relax</li>
                                    <li>Schedule longer breaks for meals and rest</li>
                                    <li>Balance study with enjoyable activities</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">5. Stay Organized</h2>
                                <p>
                                    Organization reduces anxiety:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Know your exam schedule and locations</li>
                                    <li>Prepare materials the night before</li>
                                    <li>Keep notes and resources organized</li>
                                    <li>Create checklists for revision topics</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">6. Practice Past Papers</h2>
                                <p>
                                    Familiarity reduces anxiety:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Practice with past exam papers</li>
                                    <li>Time yourself to simulate exam conditions</li>
                                    <li>Review answers and learn from mistakes</li>
                                    <li>Build confidence through practice</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">7. Talk About Your Feelings</h2>
                                <p>
                                    Don't keep stress bottled up:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Talk to family, friends, or teachers</li>
                                    <li>Share concerns and seek support</li>
                                    <li>Remember you're not alone in feeling stressed</li>
                                    <li>Consider speaking to a counselor if needed</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">8. Focus on What You Can Control</h2>
                                <p>
                                    Worrying about things beyond your control increases stress:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Focus on your preparation and effort</li>
                                    <li>Don't compare yourself to others</li>
                                    <li>Accept that perfection isn't necessary</li>
                                    <li>Concentrate on doing your best</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">9. Use Positive Self-Talk</h2>
                                <p>
                                    Your thoughts affect your stress levels:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Replace negative thoughts with positive ones</li>
                                    <li>Remind yourself of past successes</li>
                                    <li>Use affirmations like "I am prepared" or "I can do this"</li>
                                    <li>Believe in your abilities</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">10. On Exam Day</h2>
                                <p>
                                    Stay calm on the day:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Arrive early to avoid rushing</li>
                                    <li>Read instructions carefully</li>
                                    <li>Take deep breaths if you feel anxious</li>
                                    <li>Manage your time effectively</li>
                                    <li>Stay focused on the task at hand</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We understand that exam stress is real and can affect performance. Our tutors not only help with academic preparation but also provide support and strategies for managing exam stress. We help students build confidence, develop effective study habits, and prepare thoroughly - all of which reduce stress and improve performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Prepare Confidently for Exams</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our exam preparation support can help you manage stress and achieve success.
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

