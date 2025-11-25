"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
        }, 2000);
    };

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
                <div className="grid gap-12 lg:grid-cols-2 mb-16">
                    {/* Request A Call Back Form */}
                    <div>
                        <Card variant="elevated" className="border-2 border-primary/10">
                            <CardHeader className="relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                                <CardTitle className="text-2xl pt-2">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                                        Request A Call Back
                                    </span>
                                </CardTitle>
                                <p className="text-muted-foreground mt-2">
                                    If you would like us to call you back just fill the form below and we will call you back within a day.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div className="grid gap-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-foreground">
                                                Name *
                                            </label>
                                            <Input id="name" placeholder="Your full name" required />
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
                                        <label htmlFor="message" className="text-sm font-semibold text-foreground">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            className="flex min-h-[100px] w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary transition-all duration-300 hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                                            placeholder="Tell us how we can help you..."
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
                                            "Request Call Back"
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Phone Numbers */}
                        <Card variant="elevated" className="border-2 border-primary/10">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Phone</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <a href="tel:+971501852505" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                                            <span>+971 50 185 2505</span>
                                            <span className="text-xs text-muted-foreground">(Primary)</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="tel:+971585334989" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                                            <span>+971 58 533 4989</span>
                                            <span className="text-xs text-muted-foreground">(Central)</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="tel:+971585471457" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                                            <span>+971 58 547 1457</span>
                                            <span className="text-xs text-muted-foreground">(Senior)</span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="tel:+97143805525" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
                                            <span>+971 4 380 5525</span>
                                            <span className="text-xs text-muted-foreground">(Landline)</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media Links */}
                                <div className="mt-6 pt-6 border-t">
                                    <div className="flex items-center gap-4">
                                        <a 
                                            href="https://facebook.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                            aria-label="Facebook"
                                        >
                                            <Facebook className="h-5 w-5 text-primary" />
                                        </a>
                                        <a 
                                            href="https://instagram.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="h-5 w-5 text-primary" />
                                        </a>
                                        <a 
                                            href="https://youtube.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                            aria-label="YouTube"
                                        >
                                            <Youtube className="h-5 w-5 text-primary" />
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Email */}
                        <Card variant="elevated" className="border-2 border-primary/10">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Email</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <a 
                                    href="mailto:contact@improvemeinstitute.com" 
                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                >
                                    contact@improvemeinstitute.com
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Visit Us Section */}
                <Card variant="elevated" className="border-2 border-primary/10">
                    <CardHeader className="relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                        <div className="flex items-center gap-3 pt-2">
                            <div className="p-2 rounded-lg bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-purple">
                                    Visit Us
                                </span>
                            </CardTitle>
                        </div>
                        <p className="text-muted-foreground mt-2">
                            A leading teaching institute in Dubai offering innovative and scientific methods to boost children's abilities in core subjects.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Address */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                                        <p className="text-muted-foreground">
                                            Suite – 3010-3017 Building 3 Gold and Diamond Park,<br />
                                            Sheikh Zayed Road Dubai,<br />
                                            United Arab Emirates
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                                        <div className="space-y-2 text-muted-foreground">
                                            <div className="flex justify-between">
                                                <span>Mon – Fri</span>
                                                <span>10:00 AM – 8:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Saturday</span>
                                                <span>9:00 AM – 7:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sunday</span>
                                                <span className="text-destructive">Closed</span>
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
