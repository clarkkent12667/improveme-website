"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface FormErrors {
    studentName?: string;
    age?: string;
    parentName?: string;
    phone?: string;
    email?: string;
    grade?: string;
}

export function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<FormErrors>({});
    const { ref, isVisible } = useScrollAnimation();

    const validateForm = (formData: FormData): FormErrors => {
        const errors: FormErrors = {};

        const studentName = formData.get('student-name') as string;
        const age = formData.get('age') as string;
        const parentName = formData.get('parent-name') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const grade = formData.get('grade') as string;

        if (!studentName || studentName.trim().length < 2) {
            errors.studentName = 'Please enter a valid student name';
        }

        const ageNum = parseInt(age);
        if (!age || isNaN(ageNum) || ageNum < 3 || ageNum > 18) {
            errors.age = 'Age must be between 3 and 18';
        }

        if (!parentName || parentName.trim().length < 2) {
            errors.parentName = 'Please enter a valid parent/guardian name';
        }

        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!phone || !phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
            errors.phone = 'Please enter a valid phone number';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!grade || grade.trim().length < 1) {
            errors.grade = 'Please enter the current grade/year';
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call - Replace with actual EmailJS or backend integration
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // TODO: Integrate with EmailJS or your backend
            // Example EmailJS integration:
            // await emailjs.send('service_id', 'template_id', {
            //     student_name: formData.get('student-name'),
            //     age: formData.get('age'),
            //     parent_name: formData.get('parent-name'),
            //     phone: formData.get('phone'),
            //     email: formData.get('email'),
            //     grade: formData.get('grade'),
            //     subjects: formData.get('subjects'),
            //     message: formData.get('message'),
            // });

            setSubmitStatus('success');
            e.currentTarget.reset();
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="book-assessment" className="py-20 bg-muted/30 relative overflow-hidden scroll-mt-20">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-cyan/5 to-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container max-w-2xl relative z-10">
                <div
                    ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                                        <Input
                                            id="student-name"
                                            name="student-name"
                                            placeholder="Enter student's full name"
                                            required
                                            aria-required="true"
                                            aria-invalid={!!errors.studentName}
                                            aria-describedby={errors.studentName ? "student-name-error" : undefined}
                                            className={errors.studentName ? "border-destructive" : ""}
                                        />
                                        {errors.studentName && (
                                            <p id="student-name-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.studentName}
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="age" className="text-sm font-semibold text-foreground">
                                            Age *
                                        </label>
                                        <Input
                                            id="age"
                                            name="age"
                                            type="number"
                                            placeholder="Student's age"
                                            required
                                            min="3"
                                            max="18"
                                            aria-required="true"
                                            aria-invalid={!!errors.age}
                                            aria-describedby={errors.age ? "age-error" : undefined}
                                            className={errors.age ? "border-destructive" : ""}
                                        />
                                        {errors.age && (
                                            <p id="age-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.age}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="grid gap-2">
                                        <label htmlFor="parent-name" className="text-sm font-semibold text-foreground">
                                            Parent/Guardian Name *
                                        </label>
                                        <Input
                                            id="parent-name"
                                            name="parent-name"
                                            placeholder="Your full name"
                                            required
                                            aria-required="true"
                                            aria-invalid={!!errors.parentName}
                                            aria-describedby={errors.parentName ? "parent-name-error" : undefined}
                                            className={errors.parentName ? "border-destructive" : ""}
                                        />
                                        {errors.parentName && (
                                            <p id="parent-name-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.parentName}
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid gap-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                                            Phone Number *
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+971 XX XXX XXXX"
                                            required
                                            aria-required="true"
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? "phone-error" : undefined}
                                            className={errors.phone ? "border-destructive" : ""}
                                        />
                                        {errors.phone && (
                                            <p id="phone-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                                        Email Address *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your.email@example.com"
                                        required
                                        aria-required="true"
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className={errors.email ? "border-destructive" : ""}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                                            <AlertCircle className="h-3 w-3" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="grade" className="text-sm font-semibold text-foreground">
                                        Current Grade/Year *
                                    </label>
                                    <Input
                                        id="grade"
                                        name="grade"
                                        placeholder="e.g., Year 7, Grade 10"
                                        required
                                        aria-required="true"
                                        aria-invalid={!!errors.grade}
                                        aria-describedby={errors.grade ? "grade-error" : undefined}
                                        className={errors.grade ? "border-destructive" : ""}
                                    />
                                    {errors.grade && (
                                        <p id="grade-error" className="text-sm text-destructive flex items-center gap-1 mt-1">
                                            <AlertCircle className="h-3 w-3" />
                                            {errors.grade}
                                        </p>
                                    )}
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="subjects" className="text-sm font-semibold text-foreground">
                                        Subjects of Interest
                                    </label>
                                    <Input
                                        id="subjects"
                                        name="subjects"
                                        placeholder="e.g., Mathematics, English, Science"
                                        aria-describedby="subjects-hint"
                                    />
                                    <p id="subjects-hint" className="text-xs text-muted-foreground mt-1">Optional</p>
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="flex min-h-[100px] w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:border-primary transition-all duration-300 hover:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us about any specific learning goals or concerns..."
                                        aria-describedby="message-hint"
                                    />
                                    <p id="message-hint" className="text-xs text-muted-foreground mt-1">Optional</p>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-green-900">Success!</p>
                                            <p className="text-sm text-green-700">Your assessment request has been submitted. We'll contact you within 24 hours.</p>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
                                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-semibold text-red-900">Error</p>
                                            <p className="text-sm text-red-700">Something went wrong. Please try again or contact us directly.</p>
                                        </div>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="gradient"
                                    className="w-full h-12 text-base font-semibold"
                                    size="lg"
                                    disabled={isSubmitting}
                                    aria-busy={isSubmitting}
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
