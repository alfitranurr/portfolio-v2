import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tambahan: Override font default Tailwind ke Poppins
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        // Shades untuk primary (hitam), secondary (abu-abu), accent (putih) - no duplicate
        primary: {
          50: "#f9f9f9",
          500: "#000000", // Hitam base untuk gradient
          600: "#333333",
          DEFAULT: "hsl(var(--primary))", // Mapping ke CSS var
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          500: "#808080", // Abu-abu sedang base
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          500: "#ffffff", // Putih base
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Top-level CSS vars (untuk shadcn-like components)
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-modern":
          "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(128, 128, 128, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)", // Transparan hitam-abu-putih elegan
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
