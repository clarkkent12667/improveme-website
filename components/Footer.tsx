import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t-2 border-primary/20 bg-muted/40 relative overflow-hidden">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
            
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container pt-10 md:pt-16 pb-4 md:pb-6 relative z-10">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Company Info */}
                    <div className="flex flex-col gap-4 lg:col-span-2">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo-370x90-1.png"
                                alt="Improve ME Institute"
                                width={200}
                                height={48}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-md">
                            Empowering individuals and organizations to achieve excellence through continuous growth and development.
                        </p>
                        <div className="text-sm text-muted-foreground">
                            <p className="font-medium mb-2">Contact Us</p>
                            <p className="mb-3">
                                Suite – 3016-3017 Building 3<br />
                                Gold and Diamond Park, Sheikh Zayed Road<br />
                                Dubai, United Arab Emirates
                            </p>
                            <div className="space-y-1">
                                <p><a href="tel:+971501852505" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">+971-50 185 2505</a> <span className="text-xs">(Primary)</span></p>
                                <p><a href="tel:+971585334989" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">+971-58 533 4989</a> <span className="text-xs">(Central)</span></p>
                                <p><a href="tel:+971585471457" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">+971-58 547 1457</a> <span className="text-xs">(Senior)</span></p>
                                <p><a href="tel:+97143805525" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">+971 4 380 5525</a> <span className="text-xs">(Landline)</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Home
                            </Link>
                            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                About Us
                            </Link>
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Contact Us
                            </Link>
                            <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                FAQ
                            </Link>
                            <Link href="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Blogs
                            </Link>
                        </div>
                    </div>

                    {/* Our Courses */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold">Our Courses</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/courses/primary-mathematics" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Primary Mathematics
                            </Link>
                            <Link href="/courses/primary-english" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Primary English
                            </Link>
                            <Link href="/courses/primary-science" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Primary Science
                            </Link>
                            <Link href="/courses/secondary-mathematics" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Secondary Mathematics
                            </Link>
                            <Link href="/courses/secondary-physics" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Secondary Physics
                            </Link>
                            <Link href="/courses/secondary-chemistry" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Secondary Chemistry
                            </Link>
                            <Link href="/courses/secondary-biology" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Secondary Biology
                            </Link>
                            <Link href="/courses/chess" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Chess Tutoring
                            </Link>
                        </div>
                    </div>

                    {/* Curriculum */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold">Curriculum</h3>
                        <div className="flex flex-col gap-2">
                            <Link href="/curriculum/eyfs" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                EYFS (Age 3-5)
                            </Link>
                            <Link href="/curriculum/key-stage-1" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Key Stage 1
                            </Link>
                            <Link href="/curriculum/key-stage-2" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Key Stage 2
                            </Link>
                            <Link href="/curriculum/key-stage-3" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                Key Stage 3
                            </Link>
                            <Link href="/curriculum/igcse-gcse-myp" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                IGCSE/GCSE/MYP
                            </Link>
                            <Link href="/curriculum/a-levels-ib" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                                A-Levels/IB
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Improve ME Institute. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
