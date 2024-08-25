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
        "bg": "background-color",
        "opacity": "opacity"
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
          from: { height: "100vh" },
          to: { height: "0vh" }
        },
        "opening-spotlight": {
          "0%": { opacity: "1", top: "10%", left: "10%", width: "200px", height: "200px" },
          "20%": { opacity: "1", top: "30%", left: "70%", width: "350px", height: "350px" },
          "35%": { opacity: "1", top: "60%", left: "15%", width: "290px", height: "290px" },
          "75%": { opacity: "1", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "85%": { opacity: "1", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "100%": { opacity: "0", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
        },
        "disable-scroll": {
          from: { overflow: "hidden" },
          to: { overflow: "scroll" }
        },
        "home-spotlight": {
          "0%": { top: "0%", left: "-10%", width: "200px", height: "200px" },
          "20%": { top: "30%", left: "70%", width: "500px", height: "500px" },
          "40%": { top: "50%", left: "15%", width: "350px", height: "350px" },
          "60%": { top: "70%", left: "60%", width: "450px", height: "450px" },
          "80%": { top: "90%", left: "2%", width: "250px", height: "250px" },
          "100%": { top: "88%", left: "80%", width: "250px", height: "250px" }
        },
        "logo": {
          "0%": { top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "70%": { top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "100%": { top: "2.5%", left: "calc(50% - 64px)", width: "128px", height: "128px" }
        },
        "logo-mobile": {
          "0%": { top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "70%": { top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "100%": { top: "20px", left: "40px", width: "64px", height: "64px" }
        },
        "transform-up": {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade .5s ease-in both",
        "fade-out": "fade .5s ease-in reverse both",
        "logo": "fade 1s linear 2.8s both, logo 3s linear 2.5s forwards",
        "logo-mobile": "fade 1s linear 2.8s both, logo-mobile 3s linear 2.5s forwards",
        "opening-container": "height 1s linear 5s both",
        "opening-spotlight": "opening-spotlight 4s ease-in-out forwards",
        "opening-text": "fade .5s ease-in 3s forwards, fade 1s ease-in 4.3s reverse forwards",
        "disable-scroll": "disable-scroll .5s linear 6.5s both",
        "home-spotlight": "home-spotlight 15s ease-in infinite alternate",
        "nav-links": "fade .4s linear 5s both, transform-up .4s linear 5s both",
        "home-content": "fade .4s linear 5.5s both, transform-up .4s linear 5.5s both",
        "stationary-logo": "fade .1s linear 5.8s both"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config