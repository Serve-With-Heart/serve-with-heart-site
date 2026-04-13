import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serve With Heart | Community Outreach Austin",
  description:
    "Serve With Heart is a nonprofit dedicated to serving the homeless and underserved communities across the Austin metro area. Join us to volunteer, donate, or get involved.",
  keywords: "volunteer Austin, serve homeless Austin, nonprofit Austin, community service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-navy`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
