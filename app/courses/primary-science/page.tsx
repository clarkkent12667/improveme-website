import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Microscope, Atom, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Science Tutor For Primary Students | Improve ME Institute",
    description: "Looking for a professional Science Tutor? Improve ME Institute offers expert Science Tuition, including Biology, Chemistry, & Physics for primary students.",
};

const topics = [
    {
        icon: Microscope,
        title: "Living Things and Their Habitats",
        description: "Learning about animals, plants, and their environments with a focus from a biology tutor to strengthen biological understanding."
    },
    {
        icon: Atom,
        title: "Basic Chemistry",
        description: "Understanding states of matter—solids, liquids, and gases—and simple chemical reactions. A chemistry tutor helps simplify these essential topics."
    },
    {
        icon: Zap,
        title: "Electricity and Forces",
        description: "Introduction to basic electrical circuits, magnets, gravity, and other forces with support from a qualified physics tutor."
    },
    {
        icon: Globe,
        title: "Earth and Space",
        description: "Exploring the solar system and learning about Earth's place in the universe, enhanced by engaging science tuition sessions."
    }
];

export default function PrimarySciencePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                            Science Tuition for Ages 10-11 | Expert Science Tutor
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Ignite Your Child's Curiosity for Science! Our Primary science tuition program is tailored for students aged 10-11 (Year 6), introducing them to the wonders of science and helping them build a strong foundation for future learning.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our lessons are designed to be hands-on, interactive, and fun, making complex ideas easy to understand. With guidance from an experienced science tutor, students develop confidence and critical thinking.
                        </p>
                        <Link href="/#book-assessment">
                            <Button size="lg" className="h-12 px-8 text-lg">
                                Book Your Free Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <Card className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300">
                            <CardHeader className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 pb-6">
                                <CardTitle className="text-3xl mb-2">Year 6 Science Tutoring (Ages 10-11)</CardTitle>
                                <CardDescription className="text-xl font-semibold text-green-600">
                                    Exploring the World of Science!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    In Year 6, our science tuition program helps students understand key concepts in biology, chemistry, and physics. Our science tutor provides personalised attention and expert guidance.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {topics.map((topic, index) => (
                                        <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 flex-shrink-0">
                                                <topic.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold mb-2">{topic.title}</h3>
                                                <p className="text-sm text-muted-foreground">{topic.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-4 rounded-lg bg-green-500/10 border-l-4 border-green-600">
                                    <p className="text-sm leading-relaxed">
                                        <span className="font-semibold">Our Approach: </span>
                                        Our lessons are designed to encourage curiosity, foster hands-on learning, and make science fun. Students engage in simple experiments, discussions, and problem-solving activities to help them understand how science shapes the world around us. Whether working with a biology tutor, chemistry tutor, or physics tutor, your child receives focused, effective support.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get a Free Assessment for Your Child!
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to ignite your child's passion for science? Book a free session with our expert science tutor and discover how our hands-on science tuition can boost your child's understanding and confidence.
                    </p>
                    <Link href="/#book-assessment">
                        <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                            Book Your Free Assessment
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Choose Our Science Tuition?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Hands-On Learning</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Interactive experiments and activities make science concepts come alive and easy to understand.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Expert Science Tutors</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Our experienced science tutors specialize in biology, chemistry, and physics for primary students.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Building Critical Thinking</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We develop problem-solving skills and scientific thinking through engaging discussions and activities.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Strong Foundation</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Prepare your child for secondary school science with a solid understanding of core concepts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
