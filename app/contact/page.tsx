"use client";

import { motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase"; // Adjust the import path to your Supabase client setup
import {
  Instagram,
  Linkedin,
  MessageCircle,
  Github,
  MessageSquare,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOut },
  },
};

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/rmdhani_ii",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/al-fitra-nur-ramadhani",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/+6285158779239",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/alfitranurr",
  },
  {
    name: "Discord",
    icon: MessageSquare,
    href: "https://discord.com/users/.ramdhani",
  },
];

export default function Contact() {
  const pathname = usePathname();
  const [images, setImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 👉 FIX CACHE di sini
  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = socialLinks.map(async (social) => {
        const { data } = supabase.storage
          .from("Contact Page")
          .getPublicUrl(`${social.name}.png`);

        // ❗ Tambah query param biar selalu fetch gambar baru
        const newUrl = data.publicUrl
          ? `${data.publicUrl}?v=${Date.now()}`
          : "";

        return { name: social.name, url: newUrl };
      });

      const results = await Promise.all(imagePromises);
      const newImages = results.reduce((acc, { name, url }) => {
        acc[name] = url;
        return acc;
      }, {} as { [key: string]: string });

      setImages(newImages);
    };

    fetchImages();
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-0 md:mt-0 w-full mx-auto px-4 md:pl-6 lg:pl-10 md:pr-20 pb-20 md:pb-0"
    >
      {/* ===== Contact Section ===== */}
      <motion.section
        variants={itemVariants}
        className="w-full py-0 mt-0 md:mt-8 text-center md:text-left"
      >
        <h2 className="text-xl font-bold text-foreground text-center md:text-left mb-8">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((social) => {
            const imageSrc = images[social.name];
            const isImage = !!imageSrc;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="flex flex-col items-center pt-0 pb-6 px-0 border border-border dark:border-white/30 rounded-lg shadow-sm hover:shadow-md transition-all bg-background text-foreground text-center group"
              >
                {isImage ? (
                  <>
                    <div className="w-full h-40 overflow-hidden rounded-t-lg mb-4 relative">
                      <img
                        src={imageSrc}
                        alt={`${social.name} Profile Image`}
                        className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none z-10"></div>
                    </div>
                    <div className="w-full px-6 flex items-center justify-center gap-2">
                      <social.icon className="w-5 h-5 text-primary shrink-0" />
                      <h3 className="text-lg font-semibold">{social.name}</h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full h-40 flex items-center justify-center mb-4">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                        <social.icon className="w-16 h-16 text-primary" />
                      </div>
                    </div>
                    <div className="w-full px-6 text-center">
                      <h3 className="text-lg font-semibold mb-2">
                        {social.name}
                      </h3>
                    </div>
                  </>
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}
