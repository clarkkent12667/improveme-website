"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const programs = [
    {
        title: "Primary (Age 3 - 11)",
        description: "Strong academic foundation in Maths and English. Engaging, hands-on learning activities to develop essential skills.",
        subjects: ["Mathematics", "English Language", "Science", "CAT Prep"],
        icon: BookOpen,
        gradient: "from-primary to-accent-purple",
    },
    {
        title: "Secondary (Age 11 - 18)",
        description: "Specialised tutoring for Year 7 to Year 13. Preparation for GCSE, IGCSE, A-Levels, and IB.",
        subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology", "Business Studies", "Economics", "Computer Science"],
        icon: GraduationCap,
        gradient: "from-accent-cyan to-primary",
    },
];

function FeatureCard({ program, index }: { program: typeof programs[0]; index: number }) {
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
                className="border-none shadow-lg hover:shadow-xl group relative overflow-hidden h-full"
            >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <program.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {program.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                        {program.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h4 className="font-semibold mb-3">Subjects Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, i) => (
                            <span 
                                key={i} 
                                className="inline-flex items-center rounded-md bg-gradient-to-r from-secondary to-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground border border-primary/10 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent-purple/10 transition-all duration-300"
                            >
                                {subject}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export function Features() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

    return (
        <section className="py-20 bg-muted/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-cyan/5 to-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container relative z-10">
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${
                        headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                            Comprehensive Afterschool Tutoring
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tailored learning for excellence across all age groups and grades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {programs.map((program, index) => (
                        <FeatureCard key={index} program={program} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
