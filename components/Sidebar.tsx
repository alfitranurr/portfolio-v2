"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // 🪄 Tambah framer-motion buat animasi halus banget
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  Coffee,
  Award,
  Mail,
  Moon,
  Sun,
  ChevronRight,
  MoreVertical,
} from "lucide-react";

// 🧩 Sidebar dengan ultra-smooth toggle
export default function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/experience", label: "Experience", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: Coffee },
    { href: "/certificates", label: "Certificates", icon: Award },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = mounted ? theme === "dark" : false;

  return (
    <aside
      className={cn(
        "fixed z-50 border-border p-4 flex",
        isMobile
          ? `bottom-4 left-1/2 -translate-x-1/2 w-80 h-14 items-center rounded-full shadow-xl p-1 ${
              isDark ? "bg-zinc-800" : "bg-white"
            }`
          : "left-4 top-0 h-full w-73 flex-col border-r pt-10 bg-background"
      )}
    >
      {isMobile ? (
        <>
          <div className="flex items-center justify-between w-full px-1">
            <div className="flex-1 flex justify-evenly items-center">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex flex-col items-center space-y-0 p-0.5 rounded-lg transition-all cursor-pointer group flex-1",
                      isActive
                        ? isDark
                          ? "bg-zinc-800 text-white"
                          : "bg-zinc-200 text-zinc-900"
                        : isDark
                        ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    )}
                  >
                    <motion.div
                      className="flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 transition-colors",
                          isActive
                            ? isDark
                              ? "text-white"
                              : "text-zinc-900"
                            : isDark
                            ? "text-zinc-400 group-hover:text-zinc-100"
                            : "text-zinc-500 group-hover:text-zinc-900"
                        )}
                      />
                    </motion.div>
                    <span className="text-[10px] font-medium">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={cn(
                "p-1.5 rounded-lg transition-all cursor-pointer group shrink-0",
                isDark
                  ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MoreVertical
                  className={cn(
                    "h-4 w-4 transition-colors",
                    isDark
                      ? "text-zinc-400 group-hover:text-zinc-100"
                      : "text-zinc-600 group-hover:text-zinc-900"
                  )}
                />
              </motion.div>
            </button>
          </div>
          {showMenu && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={cn(
                  "fixed bottom-20 right-4 border border-border rounded-xl shadow-xl p-2 w-52 z-50 bg-background",
                  isDark ? "bg-zinc-800" : "bg-white"
                )}
              >
                <div className="space-y-2">
                  {/* Profile Section */}
                  <div className="space-y-1 text-center">
                    <div className="relative mx-auto w-12 h-12 overflow-hidden rounded-full">
                      <Image
                        src="/profile.jpg"
                        alt="Al Fitra Nur Ramadhani"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-center space-x-1">
                        <h1 className="text-xs font-bold leading-tight text-foreground">
                          Al Fitra Nur R.
                        </h1>
                        <Image
                          src="/Verified.png"
                          alt="Verified"
                          width={10}
                          height={10}
                          className="ml-1"
                        />
                      </div>
                      <p
                        className={cn(
                          "text-[10px]",
                          isDark ? "text-zinc-400" : "text-zinc-500"
                        )}
                      >
                        @rmdhani_ii
                      </p>
                    </div>
                  </div>

                  {/* Section Theming */}
                  <div className="pt-1">
                    <div className="border-t border-border w-full mb-1" />
                    <div
                      className={cn(
                        "flex items-center justify-between w-full px-2 py-1.5 rounded-xl text-[10px] font-medium select-none",
                        isDark ? "text-zinc-300" : "text-zinc-600"
                      )}
                    >
                      {/* Label & Icon (non-clickable) */}
                      <div className="flex items-center space-x-2 pointer-events-none select-none group">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          {isDark ? (
                            <Moon className="h-3 w-3" /> // ikon diganti Moon saat dark
                          ) : (
                            <Sun className="h-3 w-3" /> // ikon diganti Sun saat light
                          )}
                        </motion.div>
                        <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
                      </div>

                      {/* 🔘 Toggle Slicer — super smooth pakai motion */}
                      <div
                        onClick={toggleDarkMode}
                        className={cn(
                          "relative w-9 h-4 flex items-center rounded-full cursor-pointer transition-colors duration-300",
                          isDark ? "bg-zinc-600" : "bg-zinc-300"
                        )}
                      >
                        <motion.div
                          layout
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-white shadow-md"
                          animate={{
                            x: isDark ? 18 : 0,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </>
      ) : (
        <>
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
                <h1 className="text-lg font-bold leading-tight text-foreground">
                  Al Fitra Nur R.
                </h1>
                <Image
                  src="/Verified.png"
                  alt="Verified"
                  width={18}
                  height={18}
                  className="ml-1"
                />
              </div>
              <p className="text-sm text-zinc-500">@rmdhani_ii</p>
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
                          ? "bg-zinc-800 text-white shadow-inner"
                          : "bg-zinc-200 text-zinc-900 shadow-inner"
                        : isDark
                        ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                    )}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Icon
                          className={cn(
                            "h-4 w-4 transition-colors",
                            isActive
                              ? isDark
                                ? "text-white"
                                : "text-zinc-900"
                              : isDark
                              ? "text-zinc-400 group-hover:text-zinc-100"
                              : "text-zinc-500 group-hover:text-zinc-900"
                          )}
                        />
                      </motion.div>
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
                isDark ? "text-zinc-300" : "text-zinc-600"
              )}
            >
              {/* Label & Icon (non-clickable) */}
              <div className="flex items-center space-x-2 pointer-events-none select-none group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {isDark ? (
                    <Moon className="h-4 w-4" /> // ikon diganti Moon saat dark
                  ) : (
                    <Sun className="h-4 w-4" /> // ikon diganti Sun saat light
                  )}
                </motion.div>
                <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
              </div>

              {/* 🔘 Toggle Slicer — super smooth pakai motion */}
              <div
                onClick={toggleDarkMode}
                className={cn(
                  "relative w-10 h-5 flex items-center rounded-full cursor-pointer transition-colors duration-300",
                  isDark ? "bg-zinc-600" : "bg-zinc-300"
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
        </>
      )}
    </aside>
  );
}
