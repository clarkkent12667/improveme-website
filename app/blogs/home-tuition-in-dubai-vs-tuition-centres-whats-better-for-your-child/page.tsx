import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Home Tuition in Dubai vs Tuition Centres: What's Better for Your Child? - Improve ME Institute",
    description: "Compare home tuition and tuition centres in Dubai. Learn the pros and cons of each option to make the best choice for your child's learning needs.",
};

export default function HomeTuitionVsTuitionCentresPage() {
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
                                Tutoring
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
                            Home Tuition in Dubai vs Tuition Centres: What's Better for Your Child?
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                In a busy city like Dubai, every parent wants the best education for their child. Whether your child is in primary or secondary school, one question often arises: Should you choose home tuition or a tuition centre? Both options have their advantages.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Home Tuition: Pros and Cons</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Advantages</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Convenience:</strong> Learning takes place in your home, saving travel time</li>
                                    <li><strong>One-on-One Attention:</strong> Complete focus on your child's needs</li>
                                    <li><strong>Flexible Scheduling:</strong> Sessions can be arranged around your family's schedule</li>
                                    <li><strong>Comfortable Environment:</strong> Your child learns in familiar surroundings</li>
                                    <li><strong>Personalized Pace:</strong> Learning can proceed at your child's exact pace</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Disadvantages</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Higher Cost:</strong> Typically more expensive per hour</li>
                                    <li><strong>Limited Social Interaction:</strong> No peer learning opportunities</li>
                                    <li><strong>Quality Varies:</strong> Depends heavily on finding the right tutor</li>
                                    <li><strong>Home Distractions:</strong> Potential interruptions at home</li>
                                    <li><strong>Less Structure:</strong> May lack the structure of a formal learning environment</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Tuition Centres: Pros and Cons</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Advantages</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Structured Environment:</strong> Professional learning atmosphere</li>
                                    <li><strong>Small Group Learning:</strong> Benefits of peer interaction while maintaining attention</li>
                                    <li><strong>Qualified Tutors:</strong> Vetted, experienced educators</li>
                                    <li><strong>Cost-Effective:</strong> Generally more affordable than one-on-one home tuition</li>
                                    <li><strong>Resources:</strong> Access to learning materials, past papers, and resources</li>
                                    <li><strong>Consistency:</strong> Regular schedule and structured program</li>
                                    <li><strong>Social Benefits:</strong> Interaction with other students</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Disadvantages</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Travel Required:</strong> Need to commute to the centre</li>
                                    <li><strong>Less Flexibility:</strong> Fixed schedules and group timings</li>
                                    <li><strong>Group Dynamics:</strong> May need to accommodate other students' pace</li>
                                    <li><strong>Less Individual Attention:</strong> Shared attention in small groups</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Which Is Better for Your Child?</h2>
                                <p>
                                    The best choice depends on several factors:
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Choose Home Tuition If:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your child needs intensive one-on-one support</li>
                                    <li>You have a very busy schedule and need flexibility</li>
                                    <li>Your child is easily distracted in group settings</li>
                                    <li>You prefer learning in a familiar environment</li>
                                    <li>Budget is not a primary concern</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Choose Tuition Centres If:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You want structured, professional learning</li>
                                    <li>Your child benefits from peer interaction</li>
                                    <li>You prefer cost-effective options</li>
                                    <li>You want access to comprehensive resources</li>
                                    <li>Your child thrives in a learning-focused environment</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Hybrid Approach</h2>
                                <p>
                                    Some families find success with a combination approach:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Regular tuition centre sessions for structured learning</li>
                                    <li>Occasional home tuition for specific topics or exam preparation</li>
                                    <li>This approach combines the benefits of both options</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We offer tuition centre programs with small group sessions (4-5 students) that provide personalized attention while benefiting from peer learning. Our structured approach, qualified tutors, and comprehensive resources make us an excellent choice for families seeking quality, cost-effective tutoring support. We also understand that some students may benefit from additional one-on-one support, which we can discuss based on individual needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the Right Solution for Your Child</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to discuss which option works best for your child's learning needs.
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

