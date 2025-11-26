import { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
    title: "Contact Us - Improve ME Institute",
    description: "Get in touch with us and book your free assessment.",
};

export default function ContactPage() {
    return (
        <div className="container py-20">
            <div className="flex justify-center mb-8">
                <Image
                    src="/images/logo-370x90-1.png"
                    alt="Improve ME Institute Logo"
                    width={370}
                    height={90}
                    className="h-20 w-auto"
                    priority
                />
            </div>
            <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Book a free assessment or reach out to us directly.
            </p>

            <div className="grid gap-12 lg:grid-cols-3 mb-16">
                <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm">
                        Suite – 3010-3017 Building 3<br />
                        Gold and Diamond Park<br />
                        Sheikh Zayed Road Dubai<br />
                        United Arab Emirates
                    </p>
                </div>
                <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">contact@improvemeinstitute.com</p>
                </div>
                <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                        <p>+971 4 380 5525 (Landline)</p>
                        <p>+971-50 185 2505 (Primary)</p>
                        <p>+971-58 533 4989 (Central)</p>
                        <p>+971-58 547 1457 (Senior)</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-[400px] mb-16 rounded-lg overflow-hidden border bg-muted">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Improve%20ME%20Institute%2C%20Gold%20and%20Diamond%20Park%2C%20Building%203%2C%20Dubai&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                    style={{ border: 0 }}
                ></iframe>
            </div>

            <BookingForm />
        </div>
    );
}
