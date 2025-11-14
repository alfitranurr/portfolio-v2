"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import FeaturedSection from "@/components/FeaturedSection";
import TechStacks from "@/components/TechStacks";
import { ArrowRight } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const {
  data: { publicUrl },
} = supabase.storage.from("cv").getPublicUrl("cv.pdf");

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

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-0 md:mt-0 w-full mx-auto px-4 md:pl-6 lg:pl-10 md:pr-20"
    >
      {/* ===== About Section ===== */}
      <motion.section
        variants={itemVariants}
        className="w-full py-0 mt-0 md:-mt-8 text-center md:text-left"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <h2 className="text-xl font-bold text-foreground text-center md:text-left">
            About Me
          </h2>
          <a
            href={publicUrl}
            download
            className="flex items-center justify-center md:justify-start gap-2 px-4 py-2 rounded-full border border-border dark:border-white/20 shadow-sm hover:shadow-md transition bg-background text-foreground text-sm font-medium w-full md:w-auto"
          >
            <span>✨</span> Download My CV
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-base leading-relaxed text-foreground text-justify md:text-left">
          An Informatics undergraduate at the University of Muhammadiyah Malang,
          currently in the 7th semester, showcasing a strong passion and
          aptitude for data analytics, data science, data engineering, machine
          learning, and research. Possessing a robust background in mathematics
          and programming, complemented by effective communication abilities.
          Well-versed in handling big data and proficient in Python, SQL, Excel,
          and Tableau. Actively seeking opportunities to apply my knowledge and
          skills in a dynamic professional environment. Committed to continuous
          learning and personal growth, with a future objective of contributing
          to innovative projects and advancing in the realm of data-related
          technologies.
        </p>
      </motion.section>

      {/* ===== Featured Section ===== */}
      <motion.div variants={itemVariants} className="w-full">
        <FeaturedSection />
      </motion.div>

      {/* ===== Tech Stacks ===== */}
      <TechStacks />
    </motion.div>
  );
}
