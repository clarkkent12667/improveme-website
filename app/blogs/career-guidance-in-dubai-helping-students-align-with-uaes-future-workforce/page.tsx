import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Career Guidance in Dubai: Helping Students Align with UAE's Future Workforce - Improve ME Institute",
    description: "Learn how career guidance helps students in Dubai understand their strengths, explore career options, and align their education with the evolving job market.",
};

export default function CareerGuidanceDubaiPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blogs
                        </Link>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                                Career Guidance
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
                            Career Guidance in Dubai: Helping Students Align with UAE's Future Workforce
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                In today's rapidly evolving job market, career guidance has become more important than ever. For students in Dubai, understanding how to align their education with the UAE's future workforce needs is crucial for long-term success.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">The Importance of Career Guidance</h2>
                                <p>
                                    Career guidance helps students understand their strengths, explore various career options, and set both short-term and long-term goals. In a competitive environment like Dubai, where the job market is constantly evolving, having a clear career path can make all the difference.
                                </p>
                                <p>
                                    Effective career guidance empowers students to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Discover Their Passions:</strong> Identify what truly motivates and interests them.</li>
                                    <li><strong>Understand Their Strengths:</strong> Recognize their natural talents and abilities.</li>
                                    <li><strong>Explore Career Options:</strong> Learn about various industries and professions available in the UAE.</li>
                                    <li><strong>Set Realistic Goals:</strong> Create achievable short-term and long-term career objectives.</li>
                                    <li><strong>Make Informed Decisions:</strong> Choose educational paths that align with their career aspirations.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">The Role of Career Planning Sessions</h2>
                                <p>
                                    Career planning sessions play a crucial role in mapping out a student's future. These structured sessions help students navigate the complex process of career decision-making through several key components:
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Self-Discovery</h3>
                                <p>
                                    Through various assessments and activities, students learn about their personality types, learning styles, interests, and values. This self-awareness forms the foundation for making informed career choices.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Career Exploration</h3>
                                <p>
                                    Students explore different career fields, learning about job requirements, salary expectations, growth prospects, and day-to-day responsibilities. This exploration helps them understand what various careers actually entail.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Goal Setting</h3>
                                <p>
                                    With a better understanding of themselves and available options, students can set realistic and achievable goals. These goals serve as a roadmap for their educational and career journey.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Action Planning</h3>
                                <p>
                                    Students develop concrete action plans outlining the steps they need to take to achieve their career goals. This includes choosing the right subjects, preparing for exams, and building relevant skills.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">University Counseling</h2>
                                <p>
                                    University counseling is essential for navigating the complexities of university applications. The process can be overwhelming, with numerous choices, requirements, and deadlines to manage.
                                </p>
                                <p>
                                    Our university counseling services include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>University Selection:</strong> Helping students identify universities that match their academic profile, interests, and career goals.</li>
                                    <li><strong>Application Support:</strong> Guidance on completing applications, writing personal statements, and preparing required documents.</li>
                                    <li><strong>Entrance Exam Preparation:</strong> Support for standardized tests like SAT, ACT, IELTS, and subject-specific entrance exams.</li>
                                    <li><strong>Scholarship Guidance:</strong> Information about available scholarships and financial aid options.</li>
                                    <li><strong>Interview Preparation:</strong> Practice sessions and tips for university interviews.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Aligning with UAE's Future Workforce</h2>
                                <p>
                                    The UAE is rapidly diversifying its economy, with growing opportunities in sectors such as:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Technology and Innovation:</strong> AI, cybersecurity, software development, and digital transformation.</li>
                                    <li><strong>Healthcare:</strong> Medical research, healthcare technology, and public health.</li>
                                    <li><strong>Renewable Energy:</strong> Solar and wind energy, sustainability, and environmental engineering.</li>
                                    <li><strong>Finance and Fintech:</strong> Banking, investment, and financial technology.</li>
                                    <li><strong>Education:</strong> Teaching, educational technology, and curriculum development.</li>
                                    <li><strong>Tourism and Hospitality:</strong> Event management, hospitality, and tourism development.</li>
                                </ul>
                                <p>
                                    Our career guidance helps students understand these emerging opportunities and align their education accordingly, ensuring they're prepared for the jobs of tomorrow.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Improve ME Institute's Approach</h2>
                                <p>
                                    At Improve ME Institute, we offer comprehensive career guidance services designed to empower students in their career journeys:
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Personalized Guidance</h3>
                                <p>
                                    Every student is unique, and we provide personalized guidance tailored to individual needs, interests, and goals. Our approach recognizes that there's no one-size-fits-all solution to career planning.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Qualified Career Coaches</h3>
                                <p>
                                    Our team consists of experienced career counselors who understand the UAE job market and educational landscape. They stay updated with the latest trends and opportunities to provide relevant advice.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Flexible Sessions</h3>
                                <p>
                                    We offer flexible scheduling to accommodate students' busy academic schedules. Sessions can be conducted one-on-one or in small groups, depending on the student's preference.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Comprehensive University Support</h3>
                                <p>
                                    From initial exploration to final application submission, we provide comprehensive support throughout the university application process. Our goal is to help students find the best fit for their academic and career aspirations.
                                </p>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    Empowering Students for Success
                                </p>
                                <p>
                                    Our dedication to empowering students extends beyond academic support. We believe that with the right guidance, every student can make informed decisions about their future and achieve their career goals. Whether you're exploring career options, preparing for university, or planning your professional path, we're here to support you every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Start Your Career Journey Today
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free career guidance session to explore your options and plan your future.
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Book Your Free Session
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

