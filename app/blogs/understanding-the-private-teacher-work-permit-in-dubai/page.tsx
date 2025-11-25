import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Understanding the Private Teacher Work Permit in Dubai - Improve ME Institute",
    description: "Learn about the private teacher work permit in Dubai. Understand what it means for hiring private tutors and ensuring compliance with regulations.",
};

export default function PrivateTeacherWorkPermitDubaiPage() {
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
                                Legal & Compliance
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
                            Understanding the Private Teacher Work Permit in Dubai
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                If you're considering hiring a private tutor in Dubai for your child, you may have heard about the private teacher work permit. But what exactly does it mean, and why is it important?
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">What Is a Private Teacher Work Permit?</h2>
                                <p>
                                    A private teacher work permit is a legal authorization required for individuals who provide private tutoring services in Dubai. This permit ensures that tutors are qualified, registered, and compliant with UAE regulations.
                                </p>
                                <p>
                                    The permit is issued by relevant authorities and indicates that the tutor has met certain requirements including qualifications, background checks, and registration.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Why It Matters</h2>
                                <p>
                                    Understanding and verifying work permits is important for several reasons:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Legal Compliance:</strong> Ensures you're working with legally authorized tutors</li>
                                    <li><strong>Quality Assurance:</strong> Indicates tutors have met qualification standards</li>
                                    <li><strong>Safety:</strong> Background checks provide security and peace of mind</li>
                                    <li><strong>Accountability:</strong> Registered tutors are accountable to regulatory bodies</li>
                                    <li><strong>Professional Standards:</strong> Demonstrates commitment to professional tutoring</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Requirements for Tutors</h2>
                                <p>
                                    To obtain a private teacher work permit, tutors typically need:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Relevant educational qualifications</li>
                                    <li>Teaching experience or certifications</li>
                                    <li>Background checks and clearances</li>
                                    <li>Registration with appropriate authorities</li>
                                    <li>Compliance with UAE labor laws</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">What Parents Should Know</h2>
                                <p>
                                    When hiring a private tutor, parents should:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Verify Permits:</strong> Ask to see work permit documentation</li>
                                    <li><strong>Check Qualifications:</strong> Verify educational and professional credentials</li>
                                    <li><strong>Use Reputable Services:</strong> Work with established tutoring centers that ensure compliance</li>
                                    <li><strong>Understand Regulations:</strong> Be aware of legal requirements for private tutoring</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Benefits of Working with Licensed Tutors</h2>
                                <p>
                                    Choosing tutors with proper work permits provides:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Assurance of qualified, professional tutors</li>
                                    <li>Legal protection and compliance</li>
                                    <li>Access to regulated, quality services</li>
                                    <li>Peace of mind regarding safety and standards</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    All our tutors are properly qualified and work in compliance with UAE regulations. We ensure that all our staff meet the highest standards of qualification, professionalism, and legal compliance. When you work with us, you can be confident that you're receiving services from qualified, registered professionals who prioritize your child's education and safety.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work with Qualified, Compliant Tutors</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment with our qualified tutors who meet all regulatory requirements.
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

