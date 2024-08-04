import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/custom/navigationBar";
import Footer from "@/components/custom/footer";
import { alegreya, open } from "./fonts";
// import OpeningAnimation from "@/components/custom/openingAnimation";

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
        className={`${open.variable} ${alegreya.variable} bg-background font-body flex-1 flex flex-col justify-between relative overflow-x-hidden w-full`}
      >
        {/* <OpeningAnimation /> */}
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
