// app/certificates/page.tsx
"use client";

import { motion, easeOut } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { supabase } from "@/lib/supabase"; // Adjust the import path to your Supabase client setup
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { categories } from "@/components/CertificatesData";

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

export default function Experience() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [images, setImages] = useState<{ [key: string]: string }>({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    name: string;
  } | null>(null);

  const isDark = mounted ? theme === "dark" : false;

  const currentCertificates = categories[activeCategory].certificates;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Fetch all images from Supabase storage with cache busting
  useEffect(() => {
    const fetchImages = async () => {
      // Collect all unique image filenames across all categories
      const allImages = new Set(
        categories.flatMap((cat) => cat.certificates.map((cert) => cert.image))
      );

      const imagePromises = Array.from(allImages).map(async (imageName) => {
        const { data } = supabase.storage
          .from("Certificates Page") // Bucket name
          .getPublicUrl(imageName);

        // Add query param to bust cache and always fetch fresh image
        const newUrl = data.publicUrl
          ? `${data.publicUrl}?v=${Date.now()}`
          : "";

        return { image: imageName, url: newUrl };
      });

      const results = await Promise.all(imagePromises);
      const newImages = results.reduce((acc, { image, url }) => {
        acc[image] = url;
        return acc;
      }, {} as { [key: string]: string });

      setImages(newImages);
    };

    fetchImages();
  }, []);

  // Reset current index when active category changes
  useEffect(() => {
    setCurrent(0);
  }, [activeCategory]);

  const prev = () => {
    setCurrent(
      (c) => (c - 1 + currentCertificates.length) % currentCertificates.length
    );
  };

  const next = () => {
    setCurrent((c) => (c + 1) % currentCertificates.length);
  };

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  };

  const handleImageClick = (url: string, name: string) => {
    setSelectedImage({ url, name });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-0 md:mt-0 w-full mx-auto px-4 md:pl-6 lg:pl-10 md:pr-20 pb-20 md:pb-0"
    >
      {/* ===== Certificates Section ===== */}
      <section className="w-full py-0 mt-0 md:mt-8 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-xl font-bold text-foreground text-center mb-0"
        >
          {categories[activeCategory].name}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="relative w-full h-[300px] md:h-[500px] mx-auto overflow-hidden mt-4"
          style={{ perspective: "1000px" }}
        >
          {currentCertificates.map((cert, i) => {
            const imageSrc = images[cert.image];
            const diff =
              ((i - current + currentCertificates.length) %
                currentCertificates.length) -
              1; // Normalize diff to -1, 0, 1
            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            if (!isCenter && !isLeft && !isRight) return null;

            const scale = isCenter ? 1 : 0.8;
            const translateX = diff * 60; // Adjust offset for overlap
            const rotateY = diff * -20; // Slight 3D tilt (negative for natural perspective)
            const zIndex = isCenter ? 3 : isLeft ? 2 : 1;
            const opacity = isCenter ? 1 : 0.7;
            const filter = isCenter ? "blur(0px)" : "blur(2px)";

            return (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex }}
                initial={false}
                animate={{
                  scale,
                  x: `${translateX}%`,
                  rotateY,
                  opacity,
                  filter,
                }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                {imageSrc ? (
                  <div className="w-full max-w-2xl h-full p-4 border-4 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-lg cursor-pointer">
                    <img
                      src={imageSrc}
                      alt={`${cert.certName} Certificate`}
                      className="w-full h-full object-contain"
                      onClick={() => handleImageClick(imageSrc, cert.certName)}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted rounded-lg">
                    <span className="w-24 h-24 flex items-center justify-center bg-muted rounded-lg">
                      Loading...
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center mt-4"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-background border border-gray-400 dark:border-white/30 hover:bg-accent transition-colors cursor-pointer"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <span className="px-3 py-1 bg-background border border-gray-400 dark:border-white/30 rounded-full text-sm font-medium text-foreground">
              {current + 1} / {currentCertificates.length}
            </span>
            <button
              onClick={next}
              className="p-3 rounded-full bg-background border border-gray-400 dark:border-white/30 hover:bg-accent transition-colors cursor-pointer"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Category Tabs - At the bottom */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-2 mt-8"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === index
                  ? isDark
                    ? "bg-zinc-800 text-white shadow-inner"
                    : "bg-zinc-200 text-zinc-900 shadow-inner"
                  : isDark
                  ? "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Zoom Modal */}
      {selectedImage && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-10 p-2 rounded-full bg-white/90 dark:bg-black/90 hover:bg-white dark:hover:bg-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.name}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-zoom-in"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
