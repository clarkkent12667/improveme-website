"use client";

import dynamic from "next/dynamic";
import { BookingForm } from "@/components/BookingForm";

// Lazy load components for better performance
const Hero = dynamic(() => import("@/components/Hero").then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
  ssr: true
});

const Features = dynamic(() => import("@/components/Features").then(mod => ({ default: mod.Features })), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>
});

const Stats = dynamic(() => import("@/components/Stats").then(mod => ({ default: mod.Stats })), {
  loading: () => <div className="h-64 flex items-center justify-center">Loading...</div>
});

const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>
});

const CTA = dynamic(() => import("@/components/CTA").then(mod => ({ default: mod.CTA })), {
  loading: () => <div className="h-64 flex items-center justify-center">Loading...</div>
});

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <Stats />
            <Testimonials />
            <CTA />
            <BookingForm />
        </div>
    );
}
