import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Early Childhood Education Courses in the UAE: What Parents Should Know - Improve ME Institute",
    description: "Learn about early childhood education courses in the UAE. Discover what parents should know when choosing early learning programs for their children.",
};

export default function EarlyChildhoodEducationCoursesUAEPage() {
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
                                Early Childhood Education
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
                            Early Childhood Education Courses in the UAE: What Parents Should Know
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                As parents, we all want to give our children the best start in life. One of the biggest decisions you'll make is how your child begins their educational journey. Early childhood education courses in the UAE offer various options for parents to consider.
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Understanding Early Childhood Education</h2>
                                <p>
                                    Early childhood education focuses on children from birth to age 8, with particular emphasis on ages 3-6. These formative years are crucial for developing foundational skills, social abilities, and a love for learning.
                                </p>
                                <p>
                                    Quality early childhood education programs in the UAE typically include:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Age-appropriate learning activities</li>
                                    <li>Social and emotional development</li>
                                    <li>Language and literacy skills</li>
                                    <li>Numeracy and problem-solving</li>
                                    <li>Creative expression and play</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Types of Early Childhood Programs</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Nursery Programs</h3>
                                <p>
                                    Nurseries typically cater to children aged 0-4 years, providing care and early learning in a nurturing environment. They focus on play-based learning and social development.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Foundation Stage Programs</h3>
                                <p>
                                    Foundation Stage (FS1 and FS2) programs prepare children aged 3-5 for formal schooling. These programs balance structured learning with play-based activities.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Early Years Tutoring</h3>
                                <p>
                                    Early years tutoring provides additional support to complement nursery or school programs, focusing on specific skill development and preparation for primary school.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">What to Look For</h2>
                                
                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Qualified Educators</h3>
                                <p>
                                    Ensure programs are led by qualified early years teachers who understand child development and early learning principles.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Appropriate Curriculum</h3>
                                <p>
                                    Look for programs with well-structured curricula that balance learning and play, addressing all areas of development.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Safe Environment</h3>
                                <p>
                                    The learning environment should be safe, clean, and designed for young children with appropriate resources and facilities.
                                </p>

                                <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">Small Class Sizes</h3>
                                <p>
                                    Small groups ensure personalized attention and allow educators to respond to each child's individual needs.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Benefits of Early Childhood Education</h2>
                                <p>
                                    Quality early childhood education provides:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Academic Foundation:</strong> Strong preparation for primary school</li>
                                    <li><strong>Social Skills:</strong> Development of communication and collaboration</li>
                                    <li><strong>Confidence:</strong> Building self-esteem and independence</li>
                                    <li><strong>Love for Learning:</strong> Creating positive attitudes toward education</li>
                                    <li><strong>Emotional Development:</strong> Learning to manage feelings and relationships</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We offer early childhood education courses designed to give your child the best start. Our programs combine play-based learning with structured activities, led by qualified early years educators. We focus on developing foundational skills while nurturing your child's natural curiosity and love for learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Give Your Child the Best Start</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our early childhood education courses can benefit your child.
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

