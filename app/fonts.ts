import { Alegreya_Sans, Open_Sans } from "next/font/google";

export const alegreya = Alegreya_Sans({
    weight: ["300", "400", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-alegreya-sans",
});

export const open = Open_Sans({
    weight: ["300", "400", "600", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-open-sans",
});