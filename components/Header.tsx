"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// --- Lazy loaded components for performance ---
const HierarchicalMenu = dynamic(() => import('./HierarchicalMenu').then(mod => ({ default: mod.HierarchicalMenu })), {
  loading: () => <div className="p-4">Loading...</div>,
  ssr: false
});

// --- Data Definitions ---

const courseCategories = [
    {
        title: "Primary (Age 3 – 11)",
        items: [
            { name: "Primary Mathematics Tutor", href: "/courses/primary-mathematics" },
            { name: "Primary English Tutoring", href: "/courses/primary-english" },
            { name: "Primary Science Tutoring", href: "/courses/primary-science" },
        ],
    },
    {
        title: "Secondary (Age 11 – 18)",
        items: [
            { name: "Secondary Mathematics Tutor", href: "/courses/secondary-mathematics" },
            { name: "Secondary Physics Tutoring", href: "/courses/secondary-physics" },
            { name: "Secondary Biology Tutoring", href: "/courses/secondary-biology" },
            { name: "Secondary Chemistry Tutoring", href: "/courses/secondary-chemistry" },
            { name: "Secondary English Language Tutoring", href: "/courses/secondary-english" },
            { name: "Secondary Business Studies Tutoring", href: "/courses/secondary-business" },
            { name: "Secondary Economics Tutoring", href: "/courses/secondary-economics" },
            { name: "Secondary Psychology Tutoring", href: "/courses/secondary-psychology" },
        ],
    },
    {
        title: "Specialized Programs",
        items: [
            { name: "Chess", href: "/courses/chess" },
        ],
    },
];

const curriculumCategories = [
    {
        title: "EYFS (Age 3-5)",
        description: "Early Years Foundation Stage",
        items: [
            { name: "English", href: "/curriculum/eyfs/english" },
            { name: "Mathematics", href: "/curriculum/eyfs/mathematics" },
        ],
    },
    {
        title: "Key Stage 1 (Age 5-7)",
        description: "Years 1-2",
        items: [
            { name: "English", href: "/curriculum/key-stage-1/english" },
            { name: "Mathematics", href: "/curriculum/key-stage-1/mathematics" },
            { name: "Science", href: "/curriculum/key-stage-1/science" },
        ],
    },
    {
        title: "Key Stage 2 (Age 7-11)",
        description: "Years 3-6",
        items: [
            { name: "English", href: "/curriculum/key-stage-2/english" },
            { name: "Mathematics", href: "/curriculum/key-stage-2/mathematics" },
            { name: "Science", href: "/curriculum/key-stage-2/science" },
        ],
    },
    {
        title: "Key Stage 3 (Age 11-14)",
        description: "Years 7-9",
        items: [
            { name: "English", href: "/curriculum/key-stage-3/english" },
            { name: "Mathematics", href: "/curriculum/key-stage-3/mathematics" },
            { name: "Science", href: "/curriculum/key-stage-3/science" },
        ],
    },
    {
        title: "IGCSE/GCSE/MYP (Age 14-16)",
        description: "Years 10-11",
        items: [
            { name: "Biology", href: "/curriculum/igcse-gcse-myp/biology" },
            { name: "Business Studies", href: "/curriculum/igcse-gcse-myp/business-studies" },
            { name: "Chemistry", href: "/curriculum/igcse-gcse-myp/chemistry" },
            { name: "Economics", href: "/curriculum/igcse-gcse-myp/economics" },
            { name: "English", href: "/curriculum/igcse-gcse-myp/english" },
            { name: "Mathematics", href: "/curriculum/igcse-gcse-myp/mathematics" },
            { name: "Physics", href: "/curriculum/igcse-gcse-myp/physics" },
            { name: "Psychology", href: "/curriculum/igcse-gcse-myp/psychology" },
        ],
    },
    {
        title: "A-Levels/IB (Age 16-18)",
        description: "Years 12-13",
        items: [
            { name: "Biology", href: "/curriculum/a-levels-ib/biology" },
            { name: "Business Studies", href: "/curriculum/a-levels-ib/business-studies" },
            { name: "Chemistry", href: "/curriculum/a-levels-ib/chemistry" },
            { name: "Economics", href: "/curriculum/a-levels-ib/economics" },
            { name: "English", href: "/curriculum/a-levels-ib/english" },
            { name: "Mathematics", href: "/curriculum/a-levels-ib/mathematics" },
            { name: "Physics", href: "/curriculum/a-levels-ib/physics" },
            { name: "Psychology", href: "/curriculum/a-levels-ib/psychology" },
        ],
    },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [expandedMobile, setExpandedMobile] = React.useState<string | null>(null);

    return (
        <header 
            className="sticky top-0 z-50 w-full border-b border-white/30 shadow-lg shadow-black/5"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)'
            }}
        >
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/logo-370x90-1.png"
                        alt="Improve ME Institute"
                        width={280}
                        height={68}
                        className="h-16 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" className={navigationMenuTriggerStyle()}>
                                    Home
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Our Courses</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <HierarchicalMenu categories={courseCategories} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Our Curriculum</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <HierarchicalMenu categories={curriculumCategories} />
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" className={navigationMenuTriggerStyle()}>
                                    About Us
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/faq" className={navigationMenuTriggerStyle()}>
                                    FAQ
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/blogs" className={navigationMenuTriggerStyle()}>
                                    Blogs
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contact" className={navigationMenuTriggerStyle()}>
                                    Contact Us
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Link href="/#book-assessment">
                        <Button>Book Assessment</Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] overflow-y-auto">
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    Home
                                </Link>

                                {/* Our Courses - Expandable */}
                                <div>
                                    <button
                                        onClick={() => setExpandedMobile(expandedMobile === 'courses' ? null : 'courses')}
                                        className="text-lg font-medium flex items-center justify-between w-full"
                                    >
                                        Our Courses
                                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobile === 'courses' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedMobile === 'courses' && (
                                        <div className="ml-4 mt-2 space-y-4 border-l-2 pl-4">
                                            {courseCategories.map((cat) => (
                                                <div key={cat.title}>
                                                    <p className="text-sm font-semibold text-primary mb-2">{cat.title}</p>
                                                    <div className="space-y-2">
                                                        {cat.items.map((item) => (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block text-sm text-muted-foreground hover:text-foreground"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Our Curriculum - Expandable */}
                                <div>
                                    <button
                                        onClick={() => setExpandedMobile(expandedMobile === 'curriculum' ? null : 'curriculum')}
                                        className="text-lg font-medium flex items-center justify-between w-full"
                                    >
                                        Our Curriculum
                                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobile === 'curriculum' ? 'rotate-180' : ''}`} />
                                    </button>
                                    {expandedMobile === 'curriculum' && (
                                        <div className="ml-4 mt-2 space-y-4 border-l-2 pl-4">
                                            {curriculumCategories.map((cat) => (
                                                <div key={cat.title}>
                                                    <p className="text-sm font-semibold text-primary mb-1">{cat.title}</p>
                                                    {'description' in cat && (
                                                        <p className="text-xs text-muted-foreground mb-2">{(cat as any).description}</p>
                                                    )}
                                                    <div className="space-y-2">
                                                        {cat.items.map((item) => (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block text-sm text-muted-foreground hover:text-foreground"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    About Us
                                </Link>
                                <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    FAQ
                                </Link>
                                <Link href="/blogs" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    Blogs
                                </Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                                    Contact Us
                                </Link>
                                <Link href="/#book-assessment" onClick={() => setIsOpen(false)}>
                                    <Button className="mt-4 w-full">Book Assessment</Button>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
