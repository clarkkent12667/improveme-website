import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const outfit = Outfit({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-outfit"
});

export const metadata: Metadata = {
    title: "Improve ME Institute",
    description: "Empowering growth and excellence.",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={outfit.variable}>
            <body
                className={`${outfit.className} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
