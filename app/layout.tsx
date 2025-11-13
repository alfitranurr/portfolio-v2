import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes"; // Import ini
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Fitra Nur R | Data Science",
  description: "Data Science Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class" // Tambah class 'dark' ke <html> untuk Tailwind
          defaultTheme="system" // Default ikut OS (light/dark)
          enableSystem // Enable system theme detection
          disableTransitionOnChange // Opsional: Hilangkan transisi saat switch tema (lebih smooth)
        >
          <Sidebar />
          <main className="ml-64 p-8 min-h-screen">
            {" "}
            {/* Offset untuk sidebar */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
