import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      body: ["var(--font-open-sans)"],
      heading: ["var(--font-alegreya-sans)"]
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionProperty: {
        "height": "height",
        "background-color": "background-color"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "height": {
          to: { height: "0" },
          from: { height: "100%" }
        },
        "bouncing": {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(10px)" }
        },
        "slide-out-container": {
          "0%": { height: "100vh" },
          "100%": { height: "0vh" }
        },
        "spotlight": {
          "0%": { opacity: "1", top: "10%", left: "10%", width: "200px", height: "200px" },
          "20%": { opacity: "1", top: "60%", left: "80%", width: "450px", height: "450px" },
          "35%": { opacity: "1", top: "80%", left: "15%", width: "290px", height: "290px" },
          "75%": { opacity: "1", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "85%": { opacity: "1", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "100%": { opacity: "0", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
        },
        "disable-scroll": {
          from: { overflow: "hidden" },
          to: { overflow: "scroll" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade .5s ease-in",
        "fade-out": "fade .5s ease 1.5s reverse forwards",
        "bouncing": "bouncing 1s ease infinite alternate",
        "slide-out-container": "slide-out-container 1.3s linear 5.7s both",
        "logo": "fade 1s linear 1.99s both, fade 1.3s linear reverse forwards 4s",
        "spotlight": "spotlight 3s ease-in-out forwards",
        "disable-scroll": "disable-scroll .5s linear 7s both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config