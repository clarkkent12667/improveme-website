import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Blogs - Improve ME Institute",
    description: "Educational insights, tips, and resources from our tutoring experts. Read about early childhood education, career guidance, and educational trends.",
};

export default function BlogsPage() {
    const blogs = [
        {
            title: "Why Early Childhood Education Matters More Than Ever",
            excerpt: "Early childhood education plays a critical role in laying a strong foundation for a child's future. Discover how foundational learning between ages 3 to 6 impacts literacy skills, emotional and social growth, and long-term academic success.",
            date: "November 2024",
            category: "Early Childhood Education",
            slug: "why-early-childhood-education-matters-more-than-ever",
            readTime: "5 min read"
        },
        {
            title: "The Future of Early Childhood Education: Trends to Watch",
            excerpt: "Explore emerging trends in early childhood education, including play-based learning, Montessori and Reggio Emilia approaches, STEM integration, and the growing focus on emotional well-being and personalized support.",
            date: "November 2024",
            category: "Early Childhood Education",
            slug: "the-future-of-early-childhood-education-trends-to-watch",
            readTime: "6 min read"
        },
        {
            title: "Career Guidance in Dubai: Helping Students Align with UAE's Future Workforce",
            excerpt: "Learn how career guidance helps students in Dubai understand their strengths, explore career options, and align their education with the evolving job market. Discover the importance of career planning sessions and university counseling.",
            date: "November 2024",
            category: "Career Guidance",
            slug: "career-guidance-in-dubai-helping-students-align-with-uaes-future-workforce",
            readTime: "7 min read"
        },
        {
            title: "Understanding the Importance of a Tutoring Center in Dubai",
            excerpt: "Discover why tutoring centers are essential for academic success in Dubai. Learn about the benefits of professional tutoring support, comprehensive assessments, and how it can help your child excel in their studies.",
            date: "November 2024",
            category: "Tutoring",
            slug: "understanding-the-importance-of-a-tutoring-center-in-dubai",
            readTime: "6 min read"
        },
        {
            title: "Why Is Education Important? Exploring the Importance of Education in Dubai's Multicultural Society",
            excerpt: "Education shapes your life. It helps you learn new skills, think clearly, and make decisions. Discover why education is crucial in Dubai's multicultural society.",
            date: "November 2024",
            category: "Education",
            slug: "why-is-education-important-exploring-the-importance-of-education-in-dubais-multicultural-society",
            readTime: "6 min read"
        },
        {
            title: "Helping Your Child Transition from Primary to Secondary School in Dubai",
            excerpt: "For your child, going from primary to secondary school is a significant transition. Learn how to help them navigate this important change successfully.",
            date: "November 2024",
            category: "Parenting",
            slug: "helping-your-child-transition-from-primary-to-secondary-school-in-dubai",
            readTime: "7 min read"
        },
        {
            title: "Are British Schools in Dubai Worth the Fees? What Parents Need to Know",
            excerpt: "When looking at schools in Dubai, the British schools fees can be significant. Discover whether British schools are worth the investment and what parents should consider.",
            date: "November 2024",
            category: "School Selection",
            slug: "are-british-schools-in-dubai-worth-the-fees-what-parents-need-to-know",
            readTime: "8 min read"
        },
        {
            title: "From Admissions to Career Guidance: How the Best Educational Consultants in Dubai Support Students",
            excerpt: "For many students, choosing the right school, university, or career can be hard. Learn how educational consultants provide essential support throughout a student's journey.",
            date: "November 2024",
            category: "Educational Consulting",
            slug: "from-admissions-to-career-guidance-how-the-best-educational-consultants-in-dubai-support-students",
            readTime: "7 min read"
        },
        {
            title: "Early Childhood Education Courses in the UAE: What Parents Should Know",
            excerpt: "As parents, we all want to give our children the best start in life. Learn about early childhood education courses in the UAE and what to consider when choosing programs.",
            date: "November 2024",
            category: "Early Childhood Education",
            slug: "early-childhood-education-courses-in-the-uae-what-parents-should-know",
            readTime: "6 min read"
        },
        {
            title: "Home Tuition in Dubai vs Tuition Centres: What's Better for Your Child?",
            excerpt: "In a busy city like Dubai, every parent wants the best education for their child. Compare home tuition and tuition centres to make the best choice for your child's learning needs.",
            date: "November 2024",
            category: "Tutoring",
            slug: "home-tuition-in-dubai-vs-tuition-centres-whats-better-for-your-child",
            readTime: "7 min read"
        },
        {
            title: "British Curriculum Syllabus Explained: What Your Child Will Study in Dubai Schools",
            excerpt: "If you're living in Dubai and looking for the best school curriculum, you've probably heard about the British Curriculum. Learn what your child will study at each stage.",
            date: "November 2024",
            category: "Curriculum",
            slug: "british-curriculum-syllabus-explained-what-your-child-will-study-in-dubai-schools",
            readTime: "8 min read"
        },
        {
            title: "CAT Exam Preparation in Dubai: How the Right Teachers Can Help You Crack CAT",
            excerpt: "If you're living in Dubai and aiming to crack the CAT exam, you're in the right place. Learn how expert CAT preparation can help you achieve your target score.",
            date: "November 2024",
            category: "Exam Preparation",
            slug: "cat-exam-preparation-in-dubai-how-the-right-teachers-can-help-you-crack-cat",
            readTime: "7 min read"
        },
        {
            title: "How a Maths and Physics Tutor Can Transform Your Learning Experience",
            excerpt: "Studying maths and physics can be challenging. Discover how a qualified Maths and Physics tutor can make a transformative difference in your learning.",
            date: "November 2024",
            category: "Tutoring",
            slug: "how-a-maths-and-physics-tutor-can-transform-your-learning-experience",
            readTime: "6 min read"
        },
        {
            title: "Screen Time & Study Time: How to Find the Right Balance for Your Child",
            excerpt: "In today's digital world, screens are everywhere. Learn how to balance screen time and study time for your child with practical tips and strategies.",
            date: "November 2024",
            category: "Parenting",
            slug: "screen-time-study-time-how-to-find-the-right-balance-for-your-child",
            readTime: "6 min read"
        },
        {
            title: "Understanding the Private Teacher Work Permit in Dubai",
            excerpt: "If you're considering hiring a private tutor in Dubai, you may have heard about the private teacher work permit. Learn what it means and why it's important.",
            date: "November 2024",
            category: "Legal & Compliance",
            slug: "understanding-the-private-teacher-work-permit-in-dubai",
            readTime: "5 min read"
        },
        {
            title: "A Week in the Life of a Student at Improve ME",
            excerpt: "Hi! I am a Year 10 student juggling 11 GCSE subjects. Improve ME has helped me manage my subjects with supportive staff and teachers making a real difference.",
            date: "November 2024",
            category: "Student Life",
            slug: "a-week-in-the-life-of-a-student-at-improve-me",
            readTime: "5 min read"
        },
        {
            title: "The Benefits Of Mind Mapping For Students",
            excerpt: "Humans have always learnt through visualisation. Discover how mind mapping remains one of the most effective study techniques for students today.",
            date: "November 2024",
            category: "Study Techniques",
            slug: "the-benefits-of-mind-mapping-for-students",
            readTime: "6 min read"
        },
        {
            title: "How Tutoring Can Help Students Succeed",
            excerpt: "Do you have a child who struggles with certain subjects? Do they lack confidence? Discover how tutoring can help students succeed academically.",
            date: "November 2024",
            category: "Tutoring",
            slug: "how-tutoring-can-help-students-succeed",
            readTime: "6 min read"
        },
        {
            title: "Top 10 Study Tips",
            excerpt: "Effective studying is key to academic success. Discover the top 10 study tips to help you maximize your learning and achieve better results.",
            date: "November 2024",
            category: "Study Tips",
            slug: "top-10-study-tips",
            readTime: "7 min read"
        },
        {
            title: "Top Tips To Manage Exam Stress",
            excerpt: "Even for the most prepared student, exams can be stressful. Learn effective strategies to manage exam stress and stay calm during exam periods.",
            date: "November 2024",
            category: "Exam Preparation",
            slug: "top-tips-to-manage-exam-stress",
            readTime: "6 min read"
        },
        {
            title: "What Are the Best Approaches To Improve Your Problem-Solving Skills?",
            excerpt: "Problem-solving skills play a crucial role in how children learn. Discover the best approaches to improve your problem-solving skills and enhance critical thinking.",
            date: "November 2024",
            category: "Study Skills",
            slug: "what-are-the-best-approaches-to-improve-your-problem-solving-skills",
            readTime: "7 min read"
        },
        {
            title: "Top Tips To Excel In Your GCSEs",
            excerpt: "Studying for your GCSEs can be stressful. Discover top tips to help you excel in your GCSEs and achieve the best grades possible.",
            date: "November 2024",
            category: "GCSE",
            slug: "top-tips-to-excel-in-your-gcses",
            readTime: "8 min read"
        },
        {
            title: "Strategies For Tackling Homework and Submitting It on Time",
            excerpt: "Getting children to complete homework is a challenge every parent faces. Learn effective strategies for completing homework on time and staying organized.",
            date: "November 2024",
            category: "Study Skills",
            slug: "strategies-for-tackling-homework-and-submitting-it-on-time",
            readTime: "6 min read"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                            Educational Blogs
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Insights, tips, and educational resources from our expert tutors. Stay updated with the latest trends in education, early childhood development, and career guidance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                        {blogs.map((blog, index) => (
                            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                                            {blog.category}
                                        </span>
                                        <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                                    </div>
                                    <CardTitle className="text-xl mb-2">{blog.title}</CardTitle>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{blog.date}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <CardDescription className="text-base mb-4 flex-1">
                                        {blog.excerpt}
                                    </CardDescription>
                                    <Link 
                                        href={`/blogs/${blog.slug}`}
                                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                    >
                                        Read More
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stay Updated with Our Latest Insights
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Subscribe to our newsletter or follow us to receive the latest educational tips, insights, and updates from Improve ME Institute.
                    </p>
                    <Link href="/#book-assessment">
                        <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
