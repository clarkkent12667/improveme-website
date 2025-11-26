"use client";

import * as React from "react";
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
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

// --- Helper Component for Hierarchical Menu ---

function HierarchicalMenu({ categories }: { categories: typeof courseCategories | typeof curriculumCategories }) {
    const [activeCategory, setActiveCategory] = React.useState(categories[0]);

    return (
        <div className="flex w-[600px] h-[320px] bg-background rounded-md overflow-hidden">
            {/* Sidebar */}
            <div className="w-[200px] shrink-0 border-r bg-muted/30 p-3 overflow-y-auto">
                <div className="space-y-1">
                    {categories.map((cat) => (
                        <div
                            key={cat.title}
                            onMouseEnter={() => setActiveCategory(cat)}
                            className={cn(
                                "cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                                activeCategory.title === cat.title
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {cat.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary mb-1">{activeCategory.title}</h3>
                    {'description' in activeCategory && (
                        <p className="text-xs text-muted-foreground">{(activeCategory as any).description}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {activeCategory.items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={cn(
                                    "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                            >
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                            </NavigationMenuLink>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [expandedMobile, setExpandedMobile] = React.useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/logo-370x90-1.png"
                        alt="Improve ME Institute"
                        width={180}
                        height={44}
                        className="h-11 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Home
                                    </NavigationMenuLink>
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
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        About Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/faq" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        FAQ
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/blogs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Blogs
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contact Us
                                    </NavigationMenuLink>
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
