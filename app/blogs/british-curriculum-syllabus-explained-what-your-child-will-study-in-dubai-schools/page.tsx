import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "British Curriculum Syllabus Explained: What Your Child Will Study in Dubai Schools - Improve ME Institute",
    description: "Understand the British curriculum syllabus used in Dubai schools. Learn what your child will study at each stage from Early Years through A-Levels.",
};

export default function BritishCurriculumSyllabusExplainedPage() {
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
                                Curriculum
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
                            British Curriculum Syllabus Explained: What Your Child Will Study in Dubai Schools
                        </h1>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        <div className="space-y-8 text-muted-foreground leading-relaxed">
                            <p className="text-xl font-medium text-foreground">
                                If you're living in Dubai and looking for the best school curriculum for your child, you've probably heard about the British Curriculum. But one simple question often comes up: What exactly will your child study?
                            </p>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Early Years Foundation Stage (EYFS)</h2>
                                <p>
                                    Ages 3-5: The foundation stage focuses on learning through play and developing key skills:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Communication and Language:</strong> Speaking, listening, and understanding</li>
                                    <li><strong>Physical Development:</strong> Gross and fine motor skills</li>
                                    <li><strong>Personal, Social and Emotional Development:</strong> Self-awareness, relationships, and managing feelings</li>
                                    <li><strong>Literacy:</strong> Reading and writing foundations</li>
                                    <li><strong>Mathematics:</strong> Numbers, shapes, space, and measures</li>
                                    <li><strong>Understanding the World:</strong> People, places, and technology</li>
                                    <li><strong>Expressive Arts and Design:</strong> Creativity and imagination</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Key Stage 1 (KS1)</h2>
                                <p>
                                    Ages 5-7 (Years 1-2): Building on foundation skills:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>English:</strong> Reading, writing, speaking, listening, phonics, grammar, and spelling</li>
                                    <li><strong>Mathematics:</strong> Number, measurement, geometry, and statistics</li>
                                    <li><strong>Science:</strong> Plants, animals, materials, and seasonal changes</li>
                                    <li><strong>Computing:</strong> Basic computer skills and digital literacy</li>
                                    <li><strong>Art and Design, Design and Technology, Geography, History, Music, PE:</strong> Foundation subjects</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Key Stage 2 (KS2)</h2>
                                <p>
                                    Ages 7-11 (Years 3-6): Developing advanced skills:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>English:</strong> Advanced reading comprehension, creative writing, grammar, and vocabulary</li>
                                    <li><strong>Mathematics:</strong> Fractions, decimals, percentages, algebra introduction, and problem-solving</li>
                                    <li><strong>Science:</strong> Living things, materials, forces, light, sound, and Earth and space</li>
                                    <li><strong>Foundation Subjects:</strong> Continued study of all foundation subjects with increased depth</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Key Stage 3 (KS3)</h2>
                                <p>
                                    Ages 11-14 (Years 7-9): Preparing for GCSEs:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Core Subjects:</strong> English, Mathematics, Science (Biology, Chemistry, Physics)</li>
                                    <li><strong>Foundation Subjects:</strong> History, Geography, Modern Foreign Languages, Art, Design and Technology, Music, PE, Computing, Citizenship</li>
                                    <li><strong>Focus:</strong> Building knowledge and skills across all subjects</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">GCSE/IGCSE</h2>
                                <p>
                                    Ages 14-16 (Years 10-11): Students typically study 8-10 subjects:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Compulsory:</strong> English Language, English Literature, Mathematics, Science (combined or separate)</li>
                                    <li><strong>Optional:</strong> History, Geography, Modern Languages, Art, Music, Drama, Business Studies, Economics, Psychology, Computer Science, PE, and more</li>
                                    <li><strong>Assessment:</strong> Mix of coursework and final examinations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">A-Levels</h2>
                                <p>
                                    Ages 16-18 (Years 12-13): Advanced study in 3-4 subjects:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Students choose subjects based on interests and career goals</li>
                                    <li>Subjects include: Mathematics, Sciences, Humanities, Languages, Arts, Business, Economics, and more</li>
                                    <li>In-depth study with emphasis on critical thinking and analysis</li>
                                    <li>Assessment through examinations at the end of Year 13</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-4 mt-8">Key Features of British Curriculum</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Progressive Structure:</strong> Builds knowledge and skills systematically</li>
                                    <li><strong>Broad and Balanced:</strong> Covers academic, creative, and physical development</li>
                                    <li><strong>Assessment:</strong> Regular assessment to track progress</li>
                                    <li><strong>International Recognition:</strong> Recognized by universities worldwide</li>
                                    <li><strong>Flexibility:</strong> Allows choice in later years</li>
                                </ul>
                            </div>

                            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                                <p className="text-lg font-semibold text-foreground mb-2">
                                    At Improve ME Institute
                                </p>
                                <p>
                                    We provide comprehensive support for students following the British curriculum at all stages. Our tutors are experienced with the British syllabus and help students excel in their studies, from Early Years through A-Levels. We understand the curriculum requirements and provide targeted support aligned with what students are learning in school.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Excel in the British Curriculum</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Book a free assessment to see how our British curriculum tutoring can help your child succeed.
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

