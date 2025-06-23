import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "../components";

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "EUROASIA | Testing, Inspection & Certification Services",
  description: "Explore our comprehensive range of testing, inspection, audit, and certification services. We ensure safety, quality, and compliance for businesses across industries.",
  keywords: "testing, inspection, audit, certification, quality assurance, compliance, safety, consulting, Euroasia, gururgram, delhi ncr",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased min-h-screen flex flex-col`}
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
