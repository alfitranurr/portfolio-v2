import { Card } from "./ui/Card";
import Image, { type ImageProps } from "next/image";
import { motion, easeOut, Variants, useInView } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOut },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

const featuredItems = [
  {
    title: "Featured Project 1",
    description: "Deskripsi singkat project ini.",
    image: "/profile.jpg", // Ganti dengan image dari public atau Supabase
    date: "November 2024",
  },
  {
    title: "Featured Project 2",
    description: "Deskripsi singkat project kedua ini.",
    image: "/profile.jpg", // Ganti dengan image dari public atau Supabase
    date: "October 2024",
  },
  {
    title: "Featured Project 3",
    description: "Deskripsi singkat project ketiga ini.",
    image: "/profile.jpg", // Ganti dengan image dari public atau Supabase
    date: "September 2024",
  },
];

export default function FeaturedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-8 w-full mx-auto text-center md:text-left">
      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-xl font-bold mb-6 text-foreground"
      >
        Featured
      </motion.h2>
      <motion.div
        className="flex flex-row md:grid md:grid-cols-3 gap-4 w-full mx-auto overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {featuredItems.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="shrink-0 w-full md:w-auto md:flex-1 snap-start md:snap-none"
          >
            <Card className="relative h-72 md:h-96 overflow-hidden border-2 border-border dark:border-white/25 ring-1 ring-white/10 dark:ring-black/10 w-full mx-auto md:mx-0 group gradient-bg">
              <MotionImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm mb-1 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs">{item.date}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
