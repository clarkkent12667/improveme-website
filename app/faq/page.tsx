import { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "FAQ - Improve ME Institute",
    description: "Frequently asked questions about our tutoring services, courses, assessments, and enrollment process.",
};

export default function FAQPage() {
    const faqs = [
        {
            category: "General Information",
            questions: [
                {
                    question: "What age groups do you cater to?",
                    answer: "We provide tutoring for students aged 3-18, covering Early Years Foundation Stage (EYFS) through A-Levels and IB Diploma. Our programs are divided into Primary (Age 3-11) and Secondary (Age 11-18) education levels."
                },
                {
                    question: "Where is Improve ME Institute located?",
                    answer: "We are located in Dubai, United Arab Emirates. For our exact address and directions, please visit our Contact page or reach out to us directly."
                },
                {
                    question: "What are your operating hours?",
                    answer: "Our institute operates from 10:00 AM to 8:00 PM. We offer flexible scheduling to accommodate different student needs and school timings."
                },
                {
                    question: "Do you offer both in-person and online tutoring?",
                    answer: "Yes, we offer both in-person and online tutoring sessions to accommodate different learning preferences, schedules, and circumstances. You can choose the format that works best for your child."
                }
            ]
        },
        {
            category: "Courses & Subjects",
            questions: [
                {
                    question: "What subjects do you offer?",
                    answer: "We offer comprehensive tutoring across a wide range of subjects including Mathematics, English, Science (Biology, Chemistry, Physics), Business Studies, Economics, Psychology, and Chess. We cover all curriculum stages from EYFS through A-Levels and IB."
                },
                {
                    question: "What curricula do you follow?",
                    answer: "We provide tutoring for various curricula including GCSE, IGCSE, A-Levels, IB Diploma, MYP, and UK National Curriculum (Key Stages 1-3). Our tutors are experienced with multiple exam boards including AQA, Edexcel, OCR, and Cambridge."
                },
                {
                    question: "Do you offer group sessions or one-on-one tutoring?",
                    answer: "We primarily offer small group sessions with 4-5 students per group. This allows for personalized attention while also providing peer learning opportunities. For specific needs, we can discuss individual tutoring options."
                },
                {
                    question: "What is the duration of each tutoring session?",
                    answer: "Our tutoring sessions typically last 60-90 minutes, depending on the subject and level. Session duration may vary based on the specific program and student needs."
                }
            ]
        },
        {
            category: "Assessment & Enrollment",
            questions: [
                {
                    question: "How do I book a free assessment?",
                    answer: "You can book a free assessment by filling out the contact form on our website, calling us directly, or visiting our institute. The assessment helps us understand your child's current level and learning needs."
                },
                {
                    question: "What happens during the free assessment?",
                    answer: "During the free assessment, we evaluate your child's current academic level, identify areas of strength and areas needing improvement, discuss learning goals, and recommend the most suitable program. It's a no-obligation consultation to help you make an informed decision."
                },
                {
                    question: "Are there any prerequisites for enrolling?",
                    answer: "No specific prerequisites are required. We welcome students at all levels, from those needing extra support to those aiming for excellence. Our free assessment helps us place your child in the appropriate program."
                },
                {
                    question: "When can my child start?",
                    answer: "Students can typically start within a week of enrollment, depending on group availability. We work to accommodate your preferred schedule and can discuss start dates during the assessment."
                }
            ]
        },
        {
            category: "Fees & Payment",
            questions: [
                {
                    question: "What are your fees?",
                    answer: "Our fees vary depending on the program, subject, and level. We offer competitive pricing and various payment plans. Please contact us directly for detailed fee information tailored to your child's needs."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept various payment methods including bank transfers, cheques, and cash. Payment plans can be arranged to suit your convenience. Please discuss payment options with us during enrollment."
                },
                {
                    question: "Do you offer any discounts or scholarships?",
                    answer: "We may offer discounts for multiple subjects, siblings, or long-term enrollments. Please contact us to discuss available options and any special offers."
                },
                {
                    question: "What is your refund policy?",
                    answer: "Our refund policy depends on the specific circumstances and timing of cancellation. We recommend discussing this with us directly, and all terms will be clearly outlined during enrollment."
                }
            ]
        },
        {
            category: "Teaching & Learning",
            questions: [
                {
                    question: "Who are your tutors?",
                    answer: "Our tutors are experienced, qualified teachers with expertise in their respective subjects. They are certified educators with proven track records in helping students achieve their academic goals."
                },
                {
                    question: "How do you ensure quality teaching?",
                    answer: "We maintain high standards through careful tutor selection, regular training, and ongoing monitoring of student progress. Our small group sizes ensure personalized attention, and we regularly review and adapt our teaching methods."
                },
                {
                    question: "How do you track student progress?",
                    answer: "We track student progress through regular assessments, homework assignments, and progress reports. Parents receive updates on their child's development, and we work together to address any concerns or celebrate achievements."
                },
                {
                    question: "Do you provide study materials?",
                    answer: "Yes, we provide study materials, practice papers, and resources relevant to your child's curriculum and exam board. These materials are included as part of our tutoring program."
                }
            ]
        },
        {
            category: "Special Programs",
            questions: [
                {
                    question: "Do you offer exam preparation?",
                    answer: "Yes, we offer specialized exam preparation for GCSE, IGCSE, A-Levels, IB, and other major examinations. Our programs include past paper practice, exam technique training, and targeted revision sessions."
                },
                {
                    question: "Do you offer Chess tutoring?",
                    answer: "Yes, we offer Chess tutoring for all levels - beginner, intermediate, and advanced. Our Chess program focuses on strategic thinking, problem-solving skills, and competitive play."
                },
                {
                    question: "Do you offer holiday programs or intensive courses?",
                    answer: "We offer various programs throughout the year, including intensive revision courses during school holidays. Please contact us for information about upcoming programs and schedules."
                },
                {
                    question: "Can you help with university applications?",
                    answer: "While our primary focus is on academic tutoring, we can provide guidance on academic preparation for university applications. For comprehensive university counseling, we recommend discussing your specific needs with us."
                }
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Find answers to common questions about our tutoring services, courses, assessments, and enrollment process.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        {faqs.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="mb-12">
                                <h2 className="text-2xl font-bold mb-6 text-primary">
                                    {category.category}
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {category.questions.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                                            <AccordionTrigger className="text-left">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        If you couldn't find the answer you're looking for, feel free to contact us. We're here to help!
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
