import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "From Admissions to Career Guidance: How the Best Educational Consultants in Dubai Support Students - Improve ME Institute",
    description: "Learn how educational consultants in Dubai support students from school admissions through career guidance, helping them make informed decisions about their future.",
};

export default function EducationalConsultantsDubaiPage() {
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
                                Educational Consulting
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
                            From Admissions to Career Guidance: How the Best Educational Consultants in Dubai Support Students
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                For many students, choosing the right school, university, or career can be hard. In Dubai, it can feel even harder because there are so many options available. Educational consultants provide essential support throughout a student's educational journey.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">School Admissions Support</h2>
                                <p>
                                    Educational consultants help families navigate the complex school admissions process in Dubai:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>School Selection:</strong> Identifying schools that match your child's needs, learning style, and family values.</li>
                                    <li><strong>Application Guidance:</strong> Assistance with completing applications, preparing required documents, and meeting deadlines.</li>
                                    <li><strong>Entrance Exam Preparation:</strong> Support for school entrance assessments and interviews.</li>
                                    <li><strong>Curriculum Advice:</strong> Understanding different curricula (British, American, IB, etc.) and choosing the right fit.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Academic Support and Tutoring</h2>
                                <p>
                                    Beyond admissions, consultants provide ongoing academic support:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Connecting students with qualified tutors</li>
                                    <li>Academic planning and goal setting</li>
                                    <li>Study skills development</li>
                                    <li>Exam preparation support</li>
                                    <li>Progress monitoring and adjustment</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">University Counseling</h2>
                                <p>
                                    Educational consultants guide students through university selection and applications:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>University Research:</strong> Identifying universities that match academic profile and career goals.</li>
                                    <li><strong>Application Support:</strong> Guidance on personal statements, essays, and application forms.</li>
                                    <li><strong>Entrance Exam Preparation:</strong> Support for SAT, ACT, IELTS, and other standardized tests.</li>
                                    <li><strong>Scholarship Guidance:</strong> Information about financial aid and scholarship opportunities.</li>
                                    <li><strong>Interview Preparation:</strong> Practice sessions and tips for university interviews.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Career Guidance</h2>
                                <p>
                                    Career guidance helps students make informed decisions about their future:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Self-Assessment:</strong> Identifying interests, strengths, and values.</li>
                                    <li><strong>Career Exploration:</strong> Learning about various career options and pathways.</li>
                                    <li><strong>Goal Setting:</strong> Creating short-term and long-term career goals.</li>
                                    <li><strong>Market Insights:</strong> Understanding job market trends and opportunities in the UAE.</li>
                                    <li><strong>Action Planning:</strong> Developing steps to achieve career objectives.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Comprehensive Student Support</h2>
                                <p>
                                    The best educational consultants provide holistic support:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Personalized guidance tailored to individual needs</li>
                                    <li>Regular check-ins and progress reviews</li>
                                    <li>Parent communication and involvement</li>
                                    <li>Crisis support during challenging times</li>
                                    <li>Long-term relationship building</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Why Choose Professional Educational Consultants</h2>
                                <p>
                                    Professional educational consultants offer:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Expertise:</strong> Deep knowledge of Dubai's educational landscape</li>
                                    <li><strong>Experience:</strong> Years of helping students succeed</li>
                                    <li><strong>Network:</strong> Connections with schools, universities, and educational institutions</li>
                                    <li><strong>Objectivity:</strong> Unbiased advice based on student needs</li>
                                    <li><strong>Time-Saving:</strong> Streamlined processes and efficient guidance</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We provide comprehensive educational consulting services from school admissions through career guidance. Our experienced consultants understand Dubai's educational landscape and help students make informed decisions at every stage of their educational journey. We support students and families with personalized guidance, expert advice, and ongoing support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Expert Educational Guidance</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free consultation to see how our educational consulting services can support your child's journey from admissions to career success.
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

