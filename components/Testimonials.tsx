"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const testimonials = [
    {
        name: "AbeedaDxb",
        role: "Parent",
        content: "If you looking for a solid academic and pastoral experience...this is the place! Both my sons have used and overused this place. Results have risen but more importantly their confidence within themselves which is priceless. Thank you to the incredible team 😊 💙",
        rating: 5,
        gradient: "from-primary to-accent-purple",
    },
    {
        name: "Miray Aref Katerji",
        role: "Parent",
        content: "My kids have been going to Improve me during their primary school years and the experience has been exceptional. The Maths and English tutoring is fantastic",
        rating: 5,
        gradient: "from-accent-cyan to-primary",
    },
    {
        name: "Ayse Aktan",
        role: "Parent",
        content: "Improve is a great place for children to learn without being bored and really improve their level.",
        rating: 5,
        gradient: "from-accent-purple to-accent-orange",
    },
    {
        name: "Doaa Kashra",
        role: "Parent",
        content: "Great institute and great teachers. Thank you Mr Aymen for all your help 💯",
        rating: 5,
        gradient: "from-primary to-accent-green",
    },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${
                isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <Card 
                variant="elevated"
                className="bg-muted/30 border-none group hover:bg-muted/50 transition-all duration-300 h-full flex flex-col"
            >
                {/* Gradient accent */}
                <div className={`h-1 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardContent className="pt-6 flex-1">
                    <div className="flex mb-4 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 transition-all duration-300 ${
                                    i < testimonial.rating 
                                        ? "text-yellow-500 fill-yellow-500 group-hover:scale-110" 
                                        : "text-gray-300"
                                }`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            />
                        ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="border-t border-primary/10 pt-4">
                    <div>
                        <p className="font-semibold group-hover:text-primary transition-colors duration-300">
                            {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export function Testimonials() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-purple/5 to-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-cyan/5 to-accent-green/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container relative z-10">
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                            What Our Students Say
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Don't just take our word for it. Hear from our successful graduates.
                    </p>
                    
                    {/* Google Reviews Badge */}
                    <a 
                        href="https://share.google/oIEg0itoxHVB6hMp4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-4xl font-bold text-gray-900">4.8</div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-6 w-6 ${
                                            i < 4 
                                                ? "text-[#FFA500] fill-[#FFA500]" 
                                                : i === 4 
                                                    ? "text-[#FFA500] fill-[#FFA500] opacity-60" 
                                                    : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="h-10 w-px bg-gray-300" />
                        <div className="flex items-center gap-3">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <div className="text-base">
                                <div className="font-semibold text-gray-700 group-hover:text-gray-900">202</div>
                                <div className="text-sm text-gray-500">Google reviews</div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
