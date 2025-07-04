import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
          DEFAULT: "hsl(var(--primary))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // LifeOS AI brand colors - simplified palette
        lifeos: {
          primary: "#2B7FFF",
          secondary: "#155DFC",
          dark: "#18181B",
          gray: {
            400: "#71717B",
            600: "#E4E4E7",
            800: "#D4D4D8",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "scroll-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fire-gentle": {
          "0%": { 
            transform: "scale(1) rotate(0deg)",
            opacity: "0.2"
          },
          "50%": { 
            transform: "scale(1.05) rotate(-1deg)",
            opacity: "0.3"
          },
          "100%": { 
            transform: "scale(1) rotate(0deg)",
            opacity: "0.2"
          },
        },
        "fire-flow": {
          "0%": { 
            transform: "scale(1) rotate(0deg)",
            opacity: "0.3"
          },
          "50%": { 
            transform: "scale(1.08) rotate(-1deg)",
            opacity: "0.4"
          },
          "100%": { 
            transform: "scale(1) rotate(0deg)",
            opacity: "0.3"
          },
        },
        "fire-pulse": {
          "0%": { 
            transform: "scale(1)",
            opacity: "0.2"
          },
          "50%": { 
            transform: "scale(1.1)",
            opacity: "0.35"
          },
          "100%": { 
            transform: "scale(1)",
            opacity: "0.2"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-right": "scroll-right 30s linear infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "fire-gentle": "fire-gentle 2.5s ease-in-out infinite",
        "fire-flow": "fire-flow 2s ease-in-out infinite",
        "fire-pulse": "fire-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
