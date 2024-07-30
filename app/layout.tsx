import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/custom/navigationBar";
import Footer from "@/components/custom/footer";
import OpeningAnimation from "@/components/custom/openingAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Eileen Fitzgerald School of Speech and Drama",
  description: "The Eileen Fitzgerald School of Speech and Drama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen flex scroll-smooth">
      <body
        className={`${inter.className} flex-1 flex flex-col justify-between relative overflow-x-hidden`}
      >
        {/* <OpeningAnimation /> */}
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
