"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { ref, isVisible } = useScrollAnimation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <section id="book-assessment" className="py-20 bg-muted/30 relative overflow-hidden scroll-mt-20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-cyan/5 to-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container max-w-2xl relative z-10">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <Card variant="elevated" className="border-2 border-primary/10">
                        <CardHeader className="relative overflow-hidden">
                            {/* Gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                            <CardTitle className="text-2xl text-center pt-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                                    Book Your Free Assessment
                                </span>
                            </CardTitle>
                            <p className="text-center text-muted-foreground mt-2">
                                Fill out the form below and we'll get back to you within 24 hours to schedule your assessment.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label htmlFor="student-name" className="text-sm font-semibold text-foreground">
                                            Student Name *
                                        </label>
                                        <Input id="student-name" placeholder="Enter student's full name" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="age" className="text-sm font-semibold text-foreground">
                                            Age *
                                        </label>
                                        <Input id="age" type="number" placeholder="Student's age" required />
                                    </div>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label htmlFor="parent-name" className="text-sm font-semibold text-foreground">
                                            Parent/Guardian Name *
                                        </label>
                                        <Input id="parent-name" placeholder="Your full name" required />
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                                            Phone Number *
                                        </label>
                                        <Input id="phone" type="tel" placeholder="+971 XX XXX XXXX" required />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                                        Email Address *
                                    </label>
                                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="grade" className="text-sm font-semibold text-foreground">
                                        Current Grade/Year *
                                    </label>
                                    <Input id="grade" placeholder="e.g., Year 7, Grade 10" required />
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="subjects" className="text-sm font-semibold text-foreground">
                                        Subjects of Interest
                                    </label>
                                    <Input id="subjects" placeholder="e.g., Mathematics, English, Science" />
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[100px] w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary transition-all duration-300 hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us about any specific learning goals or concerns..."
                                    />
                                </div>

                                <Button 
                                    type="submit" 
                                    variant="gradient" 
                                    className="w-full h-12 text-base font-semibold" 
                                    size="lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="animate-spin">⏳</span>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Submit Assessment Request"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
