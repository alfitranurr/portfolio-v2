import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Fitra Nur R - Data Science",
  description: "Data Scientist Portfolio",
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
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <main className="ml-[calc(16rem+1rem)] px-4 md:px-6 lg:px-8 mx-auto max-w-6xl min-h-screen">
            {" "}
            {/* Adjust ml untuk + padding sidebar, px sama untuk simetri kanan */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
