"use client";

import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollAnimation();

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-bold mb-2">
            {count}{suffix}
        </span>
    );
}

export function Stats() {
    const stats = [
        { value: 500, suffix: "+", label: "Students Developed" },
        { value: 3, suffix: "+", label: "Years of Excellence" },
        { value: 15, suffix: "+", label: "Subjects Covered" },
        { value: 100, suffix: "%", label: "Personalised Learning" },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-primary via-accent-purple to-primary text-primary-foreground relative overflow-hidden">
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-accent-purple/90 to-primary/90 animate-gradient opacity-100" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { left: 15, top: 20, delay: 0, duration: 6 },
                    { left: 85, top: 15, delay: 1.5, duration: 5 },
                    { left: 45, top: 80, delay: 3, duration: 7 },
                    { left: 70, top: 50, delay: 4.5, duration: 5.5 },
                    { left: 25, top: 65, delay: 2, duration: 6.5 },
                    { left: 60, top: 30, delay: 5, duration: 4.5 },
                ].map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-glow"
                        >
                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white">
                                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <span className="text-sm md:text-base opacity-90 font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
