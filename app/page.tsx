"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import FeaturedSection from "@/components/FeaturedSection";
import {
  ArrowRight,
  Code,
  Atom,
  Palette,
  Database,
  Braces,
  Server,
  Box,
  Image as ImageIcon,
  PenTool,
  BarChart3,
  Settings,
  Coffee,
  FileSpreadsheet,
  Presentation,
  BarChart2,
} from "lucide-react";
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
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 md:mt-2 pl-2 sm:pl-4 md:pl-6 lg:pl-10 pr-20"
    >
      {/* ===== About Section ===== */}
      <motion.section variants={itemVariants} className="w-full py-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-foreground">About Me</h2>
          <a
            href={publicUrl}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border dark:border-white/20 shadow-sm hover:shadow-md transition bg-background text-foreground text-sm font-medium"
          >
            <span>✨</span> Download My CV
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-base leading-relaxed text-foreground">
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
      <motion.section variants={itemVariants} className="pt-10 pb-10 w-full">
        <h2 className="text-xl font-bold mb-6 text-left text-foreground">
          Tech Stacks that I have used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Code className="w-4 h-4 shrink-0" />
            <span>Next.js</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Atom className="w-4 h-4 shrink-0" />
            <span>React</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Palette className="w-4 h-4 shrink-0" />
            <span>Tailwind</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Database className="w-4 h-4 shrink-0" />
            <span>Supabase</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Braces className="w-4 h-4 shrink-0" />
            <span>TypeScript</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Server className="w-4 h-4 shrink-0" />
            <span>Node.js</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Box className="w-4 h-4 shrink-0" />
            <span>Docker</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <ImageIcon className="w-4 h-4 shrink-0" />
            <span>Canva</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <PenTool className="w-4 h-4 shrink-0" />
            <span>Figma</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Code className="w-4 h-4 shrink-0" />
            <span>Python</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <BarChart3 className="w-4 h-4 shrink-0" />
            <span>Looker Studio</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Settings className="w-4 h-4 shrink-0" />
            <span>DBeaver</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Database className="w-4 h-4 shrink-0" />
            <span>PostgreSQL</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Code className="w-4 h-4 shrink-0" />
            <span>Google Colab</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Coffee className="w-4 h-4 shrink-0" />
            <span>JavaScript</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Database className="w-4 h-4 shrink-0" />
            <span>MySQL</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <BarChart2 className="w-4 h-4 shrink-0" />
            <span>Tableau</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Database className="w-4 h-4 shrink-0" />
            <span>BigQuery</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <FileSpreadsheet className="w-4 h-4 shrink-0" />
            <span>Ms. Excel</span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center gap-2 p-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground"
          >
            <Presentation className="w-4 h-4 shrink-0" />
            <span>Ms. PowerPoint</span>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
