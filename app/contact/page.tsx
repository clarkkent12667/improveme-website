import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-accent-purple/5 to-accent-cyan/10 py-16">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                            Contact Us
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                        Get in touch with us. We're here to help you on your learning journey.
                    </p>
                </div>
            </div>

            <div className="container py-20">
                {/* Contact Information Grid */}
                <div className="grid gap-8 md:grid-cols-3 mb-16">
                    {/* Phone Numbers */}
                    <Card variant="elevated" className="border-2 border-primary/10 hover:shadow-xl transition-all duration-300">
                        <CardHeader className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                            <div className="flex items-center gap-3 pt-2">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent-purple/20">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">Phone</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div>
                                    <a href="tel:+971501852505" className="text-foreground hover:text-primary transition-all duration-300 font-medium flex flex-col group">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">+971 50 185 2505</span>
                                        <span className="text-xs text-muted-foreground mt-1">(Primary)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="tel:+971585334989" className="text-foreground hover:text-primary transition-all duration-300 font-medium flex flex-col group">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">+971 58 533 4989</span>
                                        <span className="text-xs text-muted-foreground mt-1">(Central)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="tel:+971585471457" className="text-foreground hover:text-primary transition-all duration-300 font-medium flex flex-col group">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">+971 58 547 1457</span>
                                        <span className="text-xs text-muted-foreground mt-1">(Senior)</span>
                                    </a>
                                </div>
                                <div>
                                    <a href="tel:+97143805525" className="text-foreground hover:text-primary transition-all duration-300 font-medium flex flex-col group">
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">+971 4 380 5525</span>
                                        <span className="text-xs text-muted-foreground mt-1">(Landline)</span>
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-6 pt-6 border-t border-primary/10">
                                <p className="text-sm font-semibold text-muted-foreground mb-3">Follow Us</p>
                                <div className="flex items-center gap-3">
                                    <a 
                                        href="https://facebook.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-md"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="h-5 w-5 text-primary" />
                                    </a>
                                    <a 
                                        href="https://instagram.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-md"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="h-5 w-5 text-primary" />
                                    </a>
                                    <a 
                                        href="https://youtube.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-md"
                                        aria-label="YouTube"
                                    >
                                        <Youtube className="h-5 w-5 text-primary" />
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Email */}
                    <Card variant="elevated" className="border-2 border-primary/10 hover:shadow-xl transition-all duration-300">
                        <CardHeader className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                            <div className="flex items-center gap-3 pt-2">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent-cyan/20">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">Email</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <a 
                                href="mailto:contact@improvemeinstitute.com" 
                                className="text-foreground hover:text-primary transition-all duration-300 font-medium text-lg break-all group inline-block"
                            >
                                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                    contact@improvemeinstitute.com
                                </span>
                            </a>
                        </CardContent>
                    </Card>

                    {/* Quick Contact Info */}
                    <Card variant="elevated" className="border-2 border-primary/10 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent-purple/5">
                        <CardHeader className="relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                            <CardTitle className="text-xl pt-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                                    Get In Touch
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We're here to help you on your learning journey. Reach out to us via phone, email, or visit us at our location in Dubai.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Visit Us Section */}
                <Card variant="elevated" className="border-2 border-primary/10 hover:shadow-xl transition-all duration-300">
                    <CardHeader className="relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                        <div className="flex items-center gap-3 pt-2">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent-purple/20">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                                    Visit Us
                                </span>
                            </CardTitle>
                        </div>
                        <p className="text-muted-foreground mt-3 text-sm">
                            A leading teaching institute in Dubai offering innovative and scientific methods to boost children's abilities in core subjects.
                        </p>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Address */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10 mt-1 flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3 text-foreground">Address</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Suite – 3010-3017 Building 3 Gold and Diamond Park,<br />
                                            Sheikh Zayed Road Dubai,<br />
                                            United Arab Emirates
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10 mt-1 flex-shrink-0">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-3 text-foreground">Opening Hours</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center py-2 border-b border-primary/10">
                                                <span className="text-muted-foreground font-medium">Mon – Fri</span>
                                                <span className="text-foreground font-semibold">10:00 AM – 8:00 PM</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-primary/10">
                                                <span className="text-muted-foreground font-medium">Saturday</span>
                                                <span className="text-foreground font-semibold">9:00 AM – 7:00 PM</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-muted-foreground font-medium">Sunday</span>
                                                <span className="text-destructive font-semibold">Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
