"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export function CTA() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="py-20 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan text-primary-foreground relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan animate-gradient opacity-100" />
            
            {/* Floating decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s', animationDuration: '8s' }} />
            
            <div 
                ref={ref}
                className={`container text-center relative z-10 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white drop-shadow-lg">
                    Book Your Free Assessment
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 font-medium">
                    Book a free academic assessment at our trusted Tutoring Center in Dubai. Our team will identify learning needs, suggest tailored afterschool tutoring, and match your child with expert tutors in Dubai at our leading Coaching Institute in Dubai.
                </p>
                <a href="#book-assessment">
                    <Button 
                        size="lg" 
                        variant="secondary" 
                        className="h-14 px-10 text-lg bg-white text-primary hover:bg-white/90 hover:scale-110 hover:shadow-2xl transition-all duration-300 font-semibold"
                    >
                        Book a Free Assessment
                    </Button>
                </a>
            </div>
        </section>
    );
}
