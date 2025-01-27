import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        category: {
          // Core Web Technologies
          web: "rgb(37, 99, 235)", // blue-600
          typescript: "rgb(59, 130, 246)", // blue-500
          javascript: "rgb(234, 179, 8)", // yellow-500
          react: "rgb(34, 211, 238)", // cyan-400
          nextjs: {
            light: "rgb(24, 24, 27)", // zinc-900
            dark: "rgb(255, 255, 255)", // white
          },
          css: "rgb(99, 102, 241)", // indigo-500

          // Backend & Infrastructure
          backend: "rgb(5, 150, 105)", // emerald-600
          database: "rgb(245, 158, 11)", // amber-500
          api: "rgb(139, 92, 246)", // violet-500
          cloud: "rgb(56, 189, 248)", // sky-400

          // Development & Architecture
          architecture: "rgb(244, 63, 94)", // rose-500
          tools: "rgb(115, 115, 115)", // neutral-500
          frontend: "rgb(236, 72, 153)", // pink-500
          programming: "rgb(192, 38, 211)", // fuchsia-500
          practices: "rgb(13, 148, 136)", // teal-600

          // DevOps & Security
          devops: "rgb(249, 115, 22)", // orange-500
          security: "rgb(220, 38, 38)", // red-600
          testing: "rgb(34, 197, 94)", // green-500
          networking: "rgb(8, 145, 178)", // cyan-600
          cybersecurity: "rgb(239, 68, 68)", // red-500

          // Design & UX
          design: "rgb(192, 132, 252)", // purple-400
          mobile: "rgb(129, 140, 248)", // indigo-400

          // AI & Data
          ai: "rgb(147, 51, 234)", // purple-600
          ml: "rgb(124, 58, 237)", // violet-600
          data: "rgb(101, 163, 13)", // lime-600
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
