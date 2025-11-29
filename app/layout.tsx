import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evera Cabs - Premium cab & Car Rental Services",
  description: "Book reliable, safe, and affordable cab services with Evera Cabs. Premium car rentals, airport transfers, and city rides available 24/7.",
  keywords: "cab, cab, car rental, airport transfer, ride booking, mobility, mobility, Evera Cabs",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
