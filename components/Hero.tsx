"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative overflow-hidden bg-background pt-12 pb-20 md:pt-20 md:pb-28">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-purple/5 to-accent-cyan/5 animate-gradient pointer-events-none" />

            <div className="container relative z-10 flex flex-col items-center text-center">
                <div
                    className={`inline-flex items-center rounded-full border-2 border-primary/20 px-4 py-2 text-sm font-medium text-primary mb-6 bg-primary/10 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                        }`}
                >
                    <span>Top-Rated Tutoring Center in Dubai</span>
                    <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
                </div>

                <h1
                    className={`text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="text-primary">
                        Leading Tutoring Center and Coaching Institute
                    </span>
                </h1>

                <p
                    className={`text-xl text-muted-foreground max-w-3xl mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    Exceptional afterschool tutoring programs for both primary and secondary students. We offer personalised academic support across all major subjects to elevate your child's performance.
                </p>

                <div
                    className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <Link href="#book-assessment">
                        <Button size="lg" variant="gradient" className="h-12 px-8 text-lg">
                            Book Free Assessment
                        </Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg border-2">
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Floating background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-purple rounded-full blur-3xl" />
            </div>
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-15 pointer-events-none animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-primary rounded-full blur-3xl" />
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] opacity-10 pointer-events-none animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-purple rounded-full blur-3xl" />
            </div>
        </section>
    );
}
