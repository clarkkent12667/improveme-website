import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Are British Schools in Dubai Worth the Fees? What Parents Need to Know - Improve ME Institute",
    description: "Discover whether British schools in Dubai are worth the fees. Learn about the benefits, costs, and what parents should consider when choosing a British curriculum school.",
};

export default function BritishSchoolsDubaiFeesPage() {
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
                                School Selection
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
                            Are British Schools in Dubai Worth the Fees? What Parents Need to Know
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                When looking at schools in Dubai, the British schools fees can be significant. Some schools charge substantial amounts, making parents wonder: Are British schools in Dubai worth the investment?
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Understanding British School Fees in Dubai</h2>
                                <p>
                                    British schools in Dubai typically charge higher fees compared to other curriculum options. These fees reflect various factors including:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Quality of facilities and resources</li>
                                    <li>Qualified British-trained teachers</li>
                                    <li>Comprehensive curriculum and extracurricular activities</li>
                                    <li>International recognition and accreditation</li>
                                    <li>Smaller class sizes and personalized attention</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Benefits of British Schools</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Internationally Recognized Curriculum</h3>
                                <p>
                                    The British curriculum (GCSE, A-Levels) is recognized worldwide, making it easier for students to transition to universities globally. This international recognition is particularly valuable in Dubai's expatriate community.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">High-Quality Education</h3>
                                <p>
                                    British schools typically offer:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Rigorous academic standards</li>
                                    <li>Well-structured curriculum</li>
                                    <li>Strong focus on critical thinking</li>
                                    <li>Comprehensive assessment methods</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Qualified Teachers</h3>
                                <p>
                                    British schools employ qualified teachers, often with UK teaching qualifications and experience. This ensures high-quality instruction and support for students.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Excellent Facilities</h3>
                                <p>
                                    Many British schools in Dubai offer state-of-the-art facilities including modern classrooms, science laboratories, sports facilities, libraries, and technology resources.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">What Parents Should Consider</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Financial Planning</h3>
                                <p>
                                    Consider the long-term financial commitment:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Annual tuition fees</li>
                                    <li>Additional costs (uniforms, books, activities)</li>
                                    <li>Fee increases over time</li>
                                    <li>Multiple children attending</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Your Child's Needs</h3>
                                <p>
                                    Evaluate whether a British school aligns with:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your child's learning style</li>
                                    <li>Future educational plans</li>
                                    <li>University aspirations</li>
                                    <li>Career goals</li>
                                </ul>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">School Quality</h3>
                                <p>
                                    Not all British schools are equal. Research:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>School ratings and inspections</li>
                                    <li>Academic results and achievements</li>
                                    <li>Teacher qualifications and turnover</li>
                                    <li>Student support services</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Alternatives and Supplements</h2>
                                <p>
                                    If British school fees are a concern, consider:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Tutoring Support:</strong> Supplement your child's education with quality tutoring to enhance their learning.</li>
                                    <li><strong>Scholarships:</strong> Some schools offer scholarships or financial aid programs.</li>
                                    <li><strong>Curriculum Support:</strong> Additional support can help your child excel regardless of school choice.</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We understand the investment parents make in their children's education. Whether your child attends a British school or another curriculum, we provide quality tutoring support that complements their school education. Our experienced tutors are familiar with the British curriculum and can help students excel while maximizing the value of their educational investment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Maximize Your Educational Investment</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our tutoring support can help your child excel in their British curriculum studies.
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

