import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evera Cabs - Premium Taxi & Car Rental Services",
  description: "Book reliable, safe, and affordable taxi services with Evera Cabs. Premium car rentals, airport transfers, and city rides available 24/7.",
  keywords: "taxi, cab, car rental, airport transfer, ride booking, transportation",
  authors: [{ name: "E-Prakriti" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
