"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const primaryCourses = [
    { name: "Primary Mathematics Tutor", href: "/courses/primary-mathematics" },
    { name: "Primary English Tutoring", href: "/courses/primary-english" },
    { name: "Primary Science Tutoring", href: "/courses/primary-science" },
];

const secondaryCourses = [
    { name: "Secondary Mathematics Tutor", href: "/courses/secondary-mathematics" },
    { name: "Secondary Physics Tutoring", href: "/courses/secondary-physics" },
    { name: "Secondary Biology Tutoring", href: "/courses/secondary-biology" },
    { name: "Secondary Chemistry Tutoring", href: "/courses/secondary-chemistry" },
    { name: "Secondary English Language Tutoring", href: "/courses/secondary-english" },
    { name: "Secondary Business Studies Tutoring", href: "/courses/secondary-business-studies" },
    { name: "Secondary Economics Tutoring", href: "/courses/secondary-economics" },
    { name: "Secondary Psychology Tutoring", href: "/courses/secondary-psychology" },
];

const curriculumSubjects = {
    eyfs: [
        { name: "EYFS Mathematics", href: "/curriculum/eyfs/mathematics" },
        { name: "EYFS English", href: "/curriculum/eyfs/english" },
    ],
    ks1: [
        { name: "KS1 Mathematics", href: "/curriculum/key-stage-1/mathematics" },
        { name: "KS1 English", href: "/curriculum/key-stage-1/english" },
        { name: "KS1 Science", href: "/curriculum/key-stage-1/science" },
    ],
    ks2: [
        { name: "KS2 Mathematics", href: "/curriculum/key-stage-2/mathematics" },
        { name: "KS2 English", href: "/curriculum/key-stage-2/english" },
        { name: "KS2 Science", href: "/curriculum/key-stage-2/science" },
    ],
    ks3: [
        { name: "KS3 Mathematics", href: "/curriculum/key-stage-3/mathematics" },
        { name: "KS3 English", href: "/curriculum/key-stage-3/english" },
        { name: "KS3 Science", href: "/curriculum/key-stage-3/science" },
    ],
    igcse: [
        { name: "GCSE/IGCSE/MYP Mathematics", href: "/curriculum/igcse-gcse-myp/mathematics" },
        { name: "GCSE/IGCSE/MYP Biology", href: "/curriculum/igcse-gcse-myp/biology" },
        { name: "GCSE/IGCSE/MYP Chemistry", href: "/curriculum/igcse-gcse-myp/chemistry" },
        { name: "GCSE/IGCSE/MYP Physics", href: "/curriculum/igcse-gcse-myp/physics" },
        { name: "GCSE/IGCSE/MYP English", href: "/curriculum/igcse-gcse-myp/english" },
        { name: "GCSE/IGCSE/MYP Business Studies", href: "/curriculum/igcse-gcse-myp/business-studies" },
        { name: "GCSE/IGCSE/MYP Economics", href: "/curriculum/igcse-gcse-myp/economics" },
        { name: "GCSE/IGCSE/MYP Psychology", href: "/curriculum/igcse-gcse-myp/psychology" },
    ],
    alevels: [
        { name: "A-Level/IB Mathematics", href: "/curriculum/a-levels-ib/mathematics" },
        { name: "A-Level/IB Biology", href: "/curriculum/a-levels-ib/biology" },
        { name: "A-Level/IB Chemistry", href: "/curriculum/a-levels-ib/chemistry" },
        { name: "A-Level/IB Physics", href: "/curriculum/a-levels-ib/physics" },
        { name: "A-Level/IB English", href: "/curriculum/a-levels-ib/english" },
        { name: "A-Level/IB Business Studies", href: "/curriculum/a-levels-ib/business-studies" },
        { name: "A-Level/IB Economics", href: "/curriculum/a-levels-ib/economics" },
        { name: "A-Level/IB Psychology", href: "/curriculum/a-levels-ib/psychology" },
    ],
};

const coursesData = {
    primary: primaryCourses,
    secondary: secondaryCourses,
    chess: [{ name: "Chess Tutoring", href: "/courses/chess" }],
};

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
    const [hoveredStage, setHoveredStage] = React.useState<string | null>(null);
    const [hoveredCourseCategory, setHoveredCourseCategory] = React.useState<string | null>(null);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full border-b transition-all duration-300",
            scrolled 
                ? "bg-background backdrop-blur-md shadow-lg border-primary/20" 
                : "bg-background/98 backdrop-blur-md"
        )}>
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/logo-370x90-1.png"
                        alt="Improve ME Institute"
                        width={300}
                        height={72}
                        className="h-16 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:items-center lg:gap-6">
                    <Link href="/" className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105">
                        Home
                    </Link>

                    {/* Our Courses Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('courses')}
                        onMouseLeave={() => {
                            setActiveDropdown(null);
                            setHoveredCourseCategory(null);
                        }}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                            Our Courses
                            <ChevronDown className="h-4 w-4" />
                        </button>

                        {activeDropdown === 'courses' && (
                            <div className="absolute left-0 top-full pt-2 animate-slide-down">
                                <div className="bg-background/98 backdrop-blur-md border-2 border-primary/20 rounded-lg shadow-xl p-2 flex">
                                    {/* Main Categories List */}
                                    <div className="min-w-[200px] pr-4">
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredCourseCategory('primary')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">Primary (Age 3 – 11)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredCourseCategory('secondary')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">Secondary (Age 11 – 18)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredCourseCategory('chess')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">Chess</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>

                                    {/* Courses Submenu */}
                                    {hoveredCourseCategory && (
                                        <div className="border-l-2 border-primary/20 pl-4 min-w-[250px] animate-slide-down">
                                            <ul className="space-y-1">
                                                {coursesData[hoveredCourseCategory as keyof typeof coursesData].map((course, idx) => (
                                                    <li key={course.href}>
                                                        <Link
                                                            href={course.href}
                                                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 block py-1.5 px-2 rounded hover:bg-primary/5 hover:translate-x-1"
                                                            style={{ transitionDelay: `${idx * 30}ms` }}
                                                        >
                                                            {course.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Our Curriculum Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('curriculum')}
                        onMouseLeave={() => {
                            setActiveDropdown(null);
                            setHoveredStage(null);
                        }}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                            Our Curriculum
                            <ChevronDown className="h-4 w-4" />
                        </button>

                        {activeDropdown === 'curriculum' && (
                            <div className="absolute left-0 top-full pt-2 animate-slide-down">
                                <div className="bg-background/98 backdrop-blur-md border-2 border-primary/20 rounded-lg shadow-xl p-2 flex">
                                    {/* Main Stages List */}
                                    <div className="min-w-[200px] pr-4">
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredStage('eyfs')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">EYFS (Age 3-5)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredStage('ks1')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">Key Stage 1 (Ages 5-7)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredStage('ks2')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">Key Stage 2 (Ages 7-11)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredStage('ks3')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">Key Stage 3 (Ages 11-14)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredStage('igcse')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">IGCSE / GCSE / MYP (Ages 14-16)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <div
                                            className="py-1.5 px-2 rounded hover:bg-primary/10 transition-all duration-300 cursor-pointer flex items-center justify-between group"
                                            onMouseEnter={() => setHoveredStage('alevels')}
                                        >
                                            <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-300">A Levels / IB Diploma (Ages 16-18)</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>

                                    {/* Subjects Submenu */}
                                    {hoveredStage && (
                                        <div className="border-l-2 border-primary/20 pl-4 min-w-[220px] animate-slide-down">
                                            <ul className="space-y-1">
                                                {curriculumSubjects[hoveredStage as keyof typeof curriculumSubjects].map((subject, idx) => (
                                                    <li key={subject.href}>
                                                        <Link
                                                            href={subject.href}
                                                            className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 block py-1.5 px-2 rounded hover:bg-primary/5 hover:translate-x-1"
                                                            style={{ transitionDelay: `${idx * 30}ms` }}
                                                        >
                                                            {subject.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/about" className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105">
                        About Us
                    </Link>

                    <Link href="/faq" className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105">
                        FAQ
                    </Link>

                    <Link href="/blogs" className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105">
                        Blogs
                    </Link>

                    <Link href="/contact" className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105">
                        Contact Us
                    </Link>

                    <Link href="#book-assessment">
                        <Button variant="gradient" className="font-semibold">Book Assessment</Button>
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-background/98 backdrop-blur-md">
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 py-2">
                                    Home
                                </Link>
                                <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 py-2">
                                    Our Courses
                                </Link>
                                <div className="flex flex-col gap-2">
                                    <span className="text-lg font-medium">Our Curriculum</span>
                                    <div className="flex flex-col gap-2 pl-4">
                                        <Link href="/curriculum/eyfs" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                                            EYFS (Age 3-5)
                                        </Link>
                                        <Link href="/curriculum/key-stage-1" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                                            Key Stage 1 (Ages 5-7)
                                        </Link>
                                        <Link href="/curriculum/key-stage-2" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                                            Key Stage 2 (Ages 7-11)
                                        </Link>
                                        <Link href="/curriculum/key-stage-3" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                                            Key Stage 3 (Ages 11-14)
                                        </Link>
                                        <Link href="/curriculum/igcse-gcse-myp" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                                            IGCSE / GCSE / MYP (Ages 14-16)
                                        </Link>
                                        <Link href="/curriculum/a-levels-ib" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                                            A Levels / IB Diploma (Ages 16-18)
                                        </Link>
                                    </div>
                                </div>
                                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 py-2">
                                    About Us
                                </Link>
                                <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 py-2">
                                    FAQ
                                </Link>
                                <Link href="/blogs" onClick={() => setIsOpen(false)} className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 py-2">
                                    Blogs
                                </Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 py-2">
                                    Contact Us
                                </Link>
                                <Link href="#book-assessment" onClick={() => setIsOpen(false)}>
                                    <Button variant="gradient" className="mt-4 font-semibold w-full">Book Assessment</Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
