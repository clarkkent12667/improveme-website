import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Trophy, Target, Brain, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Chess Classes at Improve ME Institute | Expert Chess Coaching Dubai",
    description: "Master Chess with Expert Chess Classes at Improve ME Institute. Structured Training for Beginners, Intermediate & Advanced Players (4-5 Students per Group).",
};

const levels = [
    {
        title: "Beginner Level",
        subtitle: "Foundation Building",
        topics: [
            "Understanding the chessboard and notation in our beginner-level chess classes",
            "Learning the movement and function of each piece",
            "Basic principles of openings, middlegame, and endgame strategies",
            "Introduction to simple tactics such as forks, pins, and skewers through interactive chess coaching"
        ]
    },
    {
        title: "Intermediate Level",
        subtitle: "Strategic Development",
        topics: [
            "Mastering strategic concepts like positional play and piece coordination",
            "Advanced opening theories and counter-attacks included in the chess programme",
            "Developing calculation skills through practical exercises in the chess classes",
            "Learning defensive techniques and attack formations with expert chess coaching"
        ]
    },
    {
        title: "Advanced Level",
        subtitle: "Competitive Excellence",
        topics: [
            "Deep understanding of endgame techniques and advanced tactics",
            "Recognising chess patterns and setting up complex strategies",
            "Analysing grandmaster games and decision-making under pressure",
            "Training for competitive tournaments and speed chess with focused chess coaching"
        ]
    }
];

const benefits = [
    {
        icon: Brain,
        title: "Enhances Problem-Solving Skills",
        description: "Chess sharpens logical thinking and strategic planning abilities."
    },
    {
        icon: Target,
        title: "Improves Focus & Memory",
        description: "Playing chess develops concentration and recall ability through regular practice."
    },
    {
        icon: Trophy,
        title: "Boosts Academic Performance",
        description: "Chess has been linked to improved mathematical and reading skills."
    },
    {
        icon: Zap,
        title: "Teaches Patience & Sportsmanship",
        description: "Encourages discipline, patience, and resilience in decision-making."
    }
];

export default function ChessPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-500/10 via-background to-gray-500/10">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-gray-700">
                            Master Chess with Expert Chess Classes at Improve ME Institute
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Structured Training for Beginners, Intermediate & Advanced Players
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Small group sessions with 4-5 students per group for personalized attention
                        </p>
                        <Link href="/#book-assessment">
                            <Button size="lg" className="h-12 px-8 text-lg">
                                Book Your Free Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Comprehensive Chess Coaching for All Levels</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            At Improve ME Institute, we provide structured chess coaching designed for students of all skill levels. Our interactive sessions focus on teaching fundamental strategies, improving tactical thinking, and enhancing gameplay skills.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Whether you're just starting or aiming for tournament play, our expert coaches provide personalised guidance to help you excel in chess. We integrate a professional chess programme that ensures progress for every student. From opening principles to endgame techniques, our chess coaching helps players grasp deeper understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programme Structure Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Programme Structure</h2>
                        <div className="space-y-8">
                            {levels.map((level, index) => (
                                <Card key={index} className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <CardHeader className="bg-gradient-to-r from-slate-500/5 to-gray-500/5 pb-6">
                                        <CardTitle className="text-3xl mb-2">{level.title}</CardTitle>
                                        <CardDescription className="text-xl font-semibold text-slate-700">
                                            {level.subtitle}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <ul className="space-y-3">
                                            {level.topics.map((topic, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-slate-700 mt-2 flex-shrink-0"></div>
                                                    <p className="text-muted-foreground">{topic}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Benefits of Chess Training</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-lg bg-slate-500/10 flex items-center justify-center text-slate-700 mb-4">
                                            <benefit.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-700 via-slate-600 to-gray-700 text-white">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Enhance Your Chess Skills Today
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Ready to master the game of chess? Book a free assessment and discover how our expert chess coaching can help you develop strategic thinking, improve your gameplay, and achieve your chess goals.
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
                            Why Choose Our Chess Programme?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-slate-700 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Expert Chess Coaches</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Learn from experienced chess coaches who understand the game at all levels.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-slate-700 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Small Group Sessions</h3>
                                    <p className="text-sm text-muted-foreground">
                                        4-5 students per group ensures personalized attention and effective learning.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-slate-700 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Structured Curriculum</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Progressive learning from basics to advanced tournament preparation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-slate-700 font-bold">✓</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Practical Approach</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Interactive sessions with practical exercises and game analysis.
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
