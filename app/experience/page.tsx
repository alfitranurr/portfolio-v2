// app/experience/page.tsx
"use client";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  professionalExperience,
  committees,
  education,
} from "@/components/ExperienceData";

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

const descriptionVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: { height: "auto", opacity: 1 },
};

export default function Experience() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<
    "professional" | "committee" | "education"
  >("professional");
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = [
    {
      key: "professional" as const,
      label: "Professional Experience",
      mobileLabel: "Experience",
    },
    {
      key: "committee" as const,
      label: "Committee & Organization",
      mobileLabel: "Committees",
    },
    { key: "education" as const, label: "Education", mobileLabel: "Education" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setExpandedCards(new Set());
  }, [activeTab]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateIndicator = () => {
    const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);
    const button = buttonRefs.current[activeIndex];
    if (button) {
      const { offsetLeft, offsetWidth } = button;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    updateIndicator();
  }, []);

  useEffect(() => {
    updateIndicator();
  }, [activeTab, isMobile]);

  const toggleExpanded = (index: number) => {
    const key = `${activeTab}-${index}`;
    const newSet = new Set(expandedCards);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setExpandedCards(newSet);
  };

  const isExpanded = (index: number) => {
    return expandedCards.has(`${activeTab}-${index}`);
  };

  const renderCards = (items: any[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const expanded = isExpanded(index);
        return (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex flex-col border border-gray-400 dark:border-white/30 dark:hover:border-gray-400 rounded-lg shadow-md hover:shadow-xl transition-all bg-background text-foreground group overflow-hidden cursor-pointer">
              {/* Header */}
              <div
                className="flex items-start p-4 md:p-6 gap-3 md:gap-4 bg-linear-to-br from-primary/5 to-secondary/5 hover:bg-primary/10 transition-colors"
                onClick={() => toggleExpanded(index)}
              >
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  {item.logo ? (
                    <img
                      src={`/logos/${item.logo}.png`} // Assume logos are in public/logos folder
                      alt={`${item.company} logo`}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  ) : (
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-lg font-semibold mb-1 text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                    {item.company}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {item.dates}
                    </p>
                    <ChevronDown
                      className={`w-3 h-3 md:w-4 md:h-4 text-muted-foreground transition-transform duration-300 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
              {/* Description */}
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    variants={descriptionVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0">
                      <p className="text-xs md:text-sm leading-relaxed text-foreground/80">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-0 md:mt-0 w-full mx-auto px-4 md:pl-6 lg:pl-10 md:pr-20 pb-20 md:pb-0"
    >
      {/* ===== Experience Section ===== */}
      <section className="w-full py-0 mt-0 md:mt-8 text-center md:text-left">
        {/* Tabs */}
        <div className="relative w-fit mx-auto md:ml-0 rounded-full bg-white dark:bg-zinc-800 px-4 py-1 flex gap-0 mb-8 overflow-hidden">
          <motion.div
            className="absolute inset-y-2 bg-black dark:bg-white rounded-full z-0"
            style={indicatorStyle}
            initial={false}
            animate={indicatorStyle}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {tabs.map((tab, index) => (
            <button
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative z-10 px-4 py-2 rounded-full font-medium text-xs md:text-sm transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-white dark:text-black"
                  : "text-zinc-600 dark:text-zinc-100"
              }`}
            >
              {isMobile ? tab.mobileLabel : tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-left"
          >
            {activeTab === "professional"
              ? renderCards(professionalExperience)
              : activeTab === "committee"
              ? renderCards(committees)
              : renderCards(education)}
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
