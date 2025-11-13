"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // 🪄 Tambah framer-motion buat animasi halus banget
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  Folder,
  Award,
  Mail,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";

// 🧩 Sidebar dengan ultra-smooth toggle
export default function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: Folder },
    { href: "/certificates", label: "Certificates", icon: Award },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = mounted ? theme === "dark" : false;

  return (
    <aside className="fixed left-0 top-0 h-full w-73 bg-background border-r border-border z-50 flex flex-col p-4 pt-10">
      {/* Profile Section */}
      <div className="space-y-2 mb-4 pb-4 pl-20">
        <div className="relative w-20 h-20 overflow-hidden rounded-full">
          <Image
            src="/profile.jpg"
            alt="Al Fitra Nur Ramadhani"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center space-x-1">
            <h1 className="text-lg font-bold leading-tight">Al Fitra Nur R.</h1>
            <Image
              src="/Verified.png"
              alt="Verified"
              width={18}
              height={18}
              className="ml-1"
            />
          </div>
          <p className="text-sm text-gray-500">@rmdhani_ii</p>
        </div>
        {/* 🧾 Garis bawah profile disamakan dengan yang di atas toggle */}
        <div className="border-t border-border w-[calc(100%-0.1rem)] mt-4 ml-[-0.6rem]" />
      </div>

      {/* Menu Utama */}
      <nav className="flex flex-col space-y-1 pl-20 -mt-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center justify-between w-full pr-3 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer group relative -ml-3 pl-3",
                  isActive
                    ? isDark
                      ? "bg-gray-800 text-white shadow-inner"
                      : "bg-gray-200 text-gray-900 shadow-inner"
                    : isDark
                    ? "text-gray-400 hover:bg-gray-800 hover:text-gray-100"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors",
                      isActive
                        ? isDark
                          ? "text-white"
                          : "text-gray-900"
                        : isDark
                        ? "text-gray-400 group-hover:text-gray-100"
                        : "text-gray-500 group-hover:text-gray-900"
                    )}
                  />
                  <span>{item.label}</span>
                </div>

                {/* 👇 Arrow muncul saat aktif atau hover */}
                <ChevronRight
                  className={cn(
                    "h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5",
                    isActive && "opacity-80"
                  )}
                />
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Section Theming */}
      <div className="mt-auto pt-4 pl-20 pr-1">
        {/* 🔧 Garis digeser sedikit ke kiri biar sejajar */}
        <div className="border-t border-border w-[calc(100%-0.1rem)] mb-3 ml-[-0.6rem]" />
        <div
          className={cn(
            "flex items-center justify-between w-full px-2 py-2 rounded-xl text-sm font-medium -ml-3 pl-3 select-none",
            isDark ? "text-gray-300" : "text-gray-600"
          )}
        >
          {/* Label & Icon (non-clickable) */}
          <div className="flex items-center space-x-2 pointer-events-none select-none">
            {isDark ? (
              <Moon className="h-4 w-4" /> // ikon diganti Moon saat dark
            ) : (
              <Sun className="h-4 w-4" /> // ikon diganti Sun saat light
            )}
            <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
          </div>

          {/* 🔘 Toggle Slicer — super smooth pakai motion */}
          <div
            onClick={toggleDarkMode}
            className={cn(
              "relative w-10 h-5 flex items-center rounded-full cursor-pointer transition-colors duration-300",
              isDark ? "bg-gray-600" : "bg-gray-300"
            )}
          >
            <motion.div
              layout
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow-md"
              animate={{
                x: isDark ? 20 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
