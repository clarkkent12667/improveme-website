import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Screen Time & Study Time: How to Find the Right Balance for Your Child - Improve ME Institute",
    description: "Learn how to balance screen time and study time for your child. Get practical tips for managing digital devices while maintaining academic focus.",
};

export default function ScreenTimeStudyTimeBalancePage() {
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
                                Parenting
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
                            Screen Time & Study Time: How to Find the Right Balance for Your Child
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                In today's digital world, screens are everywhere, used for learning, socializing, and entertainment. But as a parent, you've likely asked yourself: How much screen time is too much? How do we balance screen time with study time?
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Understanding Screen Time</h2>
                                <p>
                                    Screen time includes all time spent on digital devices:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Educational apps and online learning</li>
                                    <li>Social media and messaging</li>
                                    <li>Entertainment (games, videos, streaming)</li>
                                    <li>Homework and research</li>
                                    <li>Communication with friends and family</li>
                                </ul>
                                <p>
                                    Not all screen time is equal - educational and productive screen time differs from passive entertainment.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">The Challenge of Balance</h2>
                                <p>
                                    Finding the right balance is challenging because:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Screens are integrated into modern education</li>
                                    <li>Social connections happen online</li>
                                    <li>Entertainment is easily accessible</li>
                                    <li>Children need both digital skills and offline study time</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Strategies for Finding Balance</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Set Clear Boundaries</h3>
                                <p>
                                    Establish clear rules about when and how screens can be used:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Designated screen-free study times</li>
                                    <li>Screen-free zones (bedroom, dinner table)</li>
                                    <li>Time limits for entertainment screen time</li>
                                    <li>Clear distinction between educational and recreational use</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Prioritize Study Time</h3>
                                <p>
                                    Ensure study time comes before recreational screen time:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Complete homework and study first</li>
                                    <li>Use screen time as a reward for completed work</li>
                                    <li>Create a study schedule that includes screen breaks</li>
                                    <li>Set specific study goals before screen access</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Quality Over Quantity</h3>
                                <p>
                                    Focus on the quality of screen time:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Encourage educational apps and learning platforms</li>
                                    <li>Limit passive consumption (endless scrolling)</li>
                                    <li>Promote interactive and creative activities</li>
                                    <li>Use screens for research and skill-building</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Create a Schedule</h3>
                                <p>
                                    Develop a balanced daily schedule:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Allocate specific times for study</li>
                                    <li>Include breaks and recreational screen time</li>
                                    <li>Ensure adequate sleep and physical activity</li>
                                    <li>Balance online and offline activities</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Using Screens for Learning</h2>
                                <p>
                                    Screens can be powerful learning tools when used effectively:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Educational Apps:</strong> Interactive learning platforms</li>
                                    <li><strong>Online Resources:</strong> Videos, tutorials, and educational content</li>
                                    <li><strong>Research:</strong> Access to vast information and resources</li>
                                    <li><strong>Collaboration:</strong> Working with classmates on projects</li>
                                    <li><strong>Practice:</strong> Online exercises and quizzes</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Signs of Imbalance</h2>
                                <p>
                                    Watch for signs that screen time is affecting study:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Declining academic performance</li>
                                    <li>Difficulty focusing on non-screen activities</li>
                                    <li>Resistance to study time</li>
                                    <li>Sleep disturbances</li>
                                    <li>Reduced physical activity</li>
                                    <li>Social withdrawal</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Practical Tips</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Lead by Example:</strong> Model balanced screen use yourself</li>
                                    <li><strong>Use Technology Tools:</strong> Parental controls and screen time apps</li>
                                    <li><strong>Encourage Alternatives:</strong> Reading, hobbies, outdoor activities</li>
                                    <li><strong>Open Communication:</strong> Discuss the importance of balance</li>
                                    <li><strong>Regular Reviews:</strong> Adjust rules as your child grows</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We understand the challenges of balancing screen time and study time. Our tutoring programs incorporate both traditional learning methods and technology-enhanced approaches, helping students develop effective study habits while making productive use of digital tools. We work with families to create balanced learning environments that support academic success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the Right Balance</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free consultation to discuss strategies for balancing screen time and study time for your child.
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Book Your Free Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

