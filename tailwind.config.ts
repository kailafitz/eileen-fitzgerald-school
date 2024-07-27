import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        "appear": {
          "0%": {
            opacity: "0"
          },
          "99%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "bouncing": {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(10px)" }
        },
        "slide-out-container": {
          "0%": { height: "100vh" },
          "90%": { height: "100vh" },
          "100%": { height: "0" }
        },
        "circle": {
          "0%": { opacity: "1", top: "10%", left: "20%", width: "200px", height: "200px" },
          "10%": { opacity: "1", top: "60%", left: "80%", width: "450px", height: "450px" },
          "20%": { opacity: "1", top: "80%", left: "15%", width: "290px", height: "290px" },
          "30%": { opacity: "1", top: "25%", left: "90%", width: "250px", height: "250px" },
          "40%": { opacity: "1", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "60%": { opacity: "1", top: "calc(50% - 104px)", left: "calc(50% - 104px)", width: "208px", height: "208px" },
          "70%": { opacity: "1", top: "calc(50% - 250px)", left: "calc(50% - 250px)", width: "500px", height: "500px" },
          "95%": { opacity: "1", top: "calc(50% - 250px)", left: "calc(50% - 250px)", width: "500px", height: "500px" },
          "100%": { opacity: "0", top: "calc(50% - 250px)", left: "calc(50% - 250px)", width: "500px", height: "500px" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade .5s ease-in",
        "fade-out": "fade .5s ease 1.5s reverse forwards",
        "bouncing": "bouncing 1s ease infinite alternate",
        "slide-out-container": "slide-out-container 6s linear forwards",
        "logo": "appear 3.5s linear, fade 1s ease reverse forwards 5s",
        "circle": "circle 5s ease-in-out forwards",
        "name": "appear 3.5s linear, fade 1s ease reverse forwards 5s"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config