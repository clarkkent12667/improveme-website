import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Helping Your Child Transition from Primary to Secondary School in Dubai - Improve ME Institute",
    description: "Learn how to help your child successfully transition from primary to secondary school in Dubai. Get tips on preparation, support, and managing this important change.",
};

export default function TransitionPrimaryToSecondaryPage() {
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
                                <span>7 min read</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Helping Your Child Transition from Primary to Secondary School in Dubai
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                For your child, going from primary to secondary school is a significant transition. Everything seems fresh. New school rules, new books, new friends, and new expectations. As a parent, you play a crucial role in helping your child navigate this important change successfully.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Understanding the Transition</h2>
                                <p>
                                    The move from primary to secondary school represents one of the biggest changes in a child's educational journey. Students face increased academic demands, more subjects, different teaching styles, and greater independence. Understanding these changes helps parents provide appropriate support.
                                </p>
                                <p>
                                    Key differences include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>More subjects and specialized teachers</li>
                                    <li>Increased homework and study requirements</li>
                                    <li>Greater emphasis on independent learning</li>
                                    <li>New social dynamics and peer groups</li>
                                    <li>More complex organizational skills needed</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Preparing Your Child</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Academic Preparation</h3>
                                <p>
                                    Help your child prepare academically by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Reviewing key concepts from primary school</li>
                                    <li>Introducing organizational skills and study habits</li>
                                    <li>Encouraging reading and independent learning</li>
                                    <li>Building confidence in core subjects like Maths and English</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Social Preparation</h3>
                                <p>
                                    Support social readiness by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Discussing what to expect in secondary school</li>
                                    <li>Encouraging participation in activities and clubs</li>
                                    <li>Helping develop communication and friendship skills</li>
                                    <li>Building resilience and coping strategies</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Managing New Challenges</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Increased Academic Demands</h3>
                                <p>
                                    Secondary school brings more challenging coursework. Help your child by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Establishing a regular study routine</li>
                                    <li>Creating a dedicated study space at home</li>
                                    <li>Teaching time management skills</li>
                                    <li>Providing support with homework when needed</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Organizational Skills</h3>
                                <p>
                                    Help your child develop organizational skills:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Using planners and calendars for assignments</li>
                                    <li>Organizing school materials and books</li>
                                    <li>Preparing school bags the night before</li>
                                    <li>Keeping track of deadlines and important dates</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Supporting Your Child Emotionally</h2>
                                <p>
                                    Emotional support is crucial during this transition:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Open Communication:</strong> Create a safe space for your child to express concerns and ask questions.</li>
                                    <li><strong>Encouragement:</strong> Celebrate small successes and provide reassurance during challenges.</li>
                                    <li><strong>Patience:</strong> Understand that adjustment takes time and be patient with the process.</li>
                                    <li><strong>Active Listening:</strong> Listen to your child's experiences and validate their feelings.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Building Independence</h2>
                                <p>
                                    Secondary school requires greater independence. Help your child develop this by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Encouraging them to advocate for themselves</li>
                                    <li>Teaching problem-solving skills</li>
                                    <li>Allowing them to make age-appropriate decisions</li>
                                    <li>Gradually increasing responsibilities</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Staying Connected with School</h2>
                                <p>
                                    Maintain communication with your child's school:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Attend parent-teacher meetings</li>
                                    <li>Stay informed about school events and policies</li>
                                    <li>Communicate with teachers about concerns</li>
                                    <li>Engage with the school community</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We offer specialized support for students transitioning to secondary school. Our programs help students build confidence, develop study skills, and prepare academically for the increased demands of secondary education. We work closely with families to ensure a smooth and successful transition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Your Child's Transition</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how we can help your child successfully transition to secondary school.
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

