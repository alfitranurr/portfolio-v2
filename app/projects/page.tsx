// app/projects/page.tsx
"use client";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import {
  dataAnalyticsProjects,
  dataVisualizationProjects,
  artificialIntelligenceProjects,
  webDevProjects,
  dataModelingProjects,
  digitalMarketingProjects,
  graphicDesignProjects,
} from "@/components/ProjectsData";

const MotionImage = motion(Image);

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

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Projects() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<
    | "data-analytics"
    | "data-visualization"
    | "artificial-intelligence"
    | "web-dev"
    | "data-modeling"
    | "digital-marketing"
    | "graphic-design"
  >("data-analytics");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabs = [
    {
      key: "data-analytics" as const,
      label: "Data Analytics",
      mobileLabel: "Analytics",
    },
    {
      key: "data-visualization" as const,
      label: "Data Visualization",
      mobileLabel: "Visualization",
    },
    {
      key: "artificial-intelligence" as const,
      label: "Artificial Intelligence",
      mobileLabel: "AI",
    },
    {
      key: "web-dev" as const,
      label: "Web Dev",
      mobileLabel: "Web Dev",
    },
    {
      key: "data-modeling" as const,
      label: "Data Modeling & Simulation",
      mobileLabel: "Modeling",
    },
    {
      key: "digital-marketing" as const,
      label: "Digital Marketing",
      mobileLabel: "Marketing",
    },
    {
      key: "graphic-design" as const,
      label: "Graphic Design",
      mobileLabel: "Design",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  // Scroll listener for arrow states and indicator update
  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container || !isMobile) return;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1); // tolerance for floating point
      updateIndicator();
    };
    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initial state
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile, activeTab]); // Add activeTab to deps to re-init on tab change
  const updateIndicator = () => {
    const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);
    const button = buttonRefs.current[activeIndex];
    if (button) {
      const { offsetLeft, offsetWidth } = button;
      const container = tabsContainerRef.current;
      const scrollLeft = container ? container.scrollLeft : 0;
      setIndicatorStyle({ left: offsetLeft - scrollLeft, width: offsetWidth });
    }
  };
  useEffect(() => {
    // Use layout effect for more precise timing on resize/tab change
    const timeoutId = setTimeout(updateIndicator, 0);
    return () => clearTimeout(timeoutId);
  }, [activeTab, isMobile]);
  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);
    const button = buttonRefs.current[activeIndex];
    const container = tabsContainerRef.current;
    if (button && container && isMobile) {
      const { offsetLeft, offsetWidth } = button;
      const center = offsetLeft + offsetWidth / 2 - container.clientWidth / 2;
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({
        left: Math.max(0, Math.min(center, maxScroll)),
        behavior: "smooth",
      });
      // Update indicator after scroll settles
      const scrollTimeout = setTimeout(updateIndicator, 300);
      return () => clearTimeout(scrollTimeout);
    }
  }, [activeTab, isMobile]);
  const renderCards = (items: any[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <Card className="relative h-72 md:h-96 overflow-hidden border-2 border-border dark:border-white/25 ring-1 ring-white/10 dark:ring-black/10 w-full mx-auto md:mx-0 group gradient-bg cursor-pointer">
            <MotionImage
              src={item.image || "/profile.jpg"} // Ganti dengan image dari public atau Supabase; fallback ke default
              alt={item.title || item.role}
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
              <h3 className="font-semibold text-xl">
                {item.title || item.role}
              </h3>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-0 md:mt-0 w-full mx-auto px-4 md:pl-6 lg:pl-10 md:pr-20 pb-20 md:pb-0"
    >
      {/* ===== Projects Section ===== */}
      <section className="w-full py-0 mt-0 md:mt-8 text-center md:text-left">
        {/* Tabs */}
        <div
          className={`relative ${
            isMobile ? "w-full" : "w-fit mx-auto md:ml-0"
          } rounded-full bg-white dark:bg-zinc-800 px-4 py-1 mb-8 overflow-hidden`}
        >
          <motion.div
            className="absolute inset-y-2 bg-black dark:bg-white rounded-full z-0"
            style={indicatorStyle}
            initial={false}
            animate={indicatorStyle}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div
            ref={tabsContainerRef}
            className={
              isMobile ? "flex overflow-x-auto scrollbar-hide" : "flex"
            }
          >
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
                {tab.label}
              </button>
            ))}
          </div>
          {isMobile && (
            <>
              <button
                onClick={() => {
                  if (!isAtStart) {
                    tabsContainerRef.current?.scrollBy({
                      left: -100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`absolute left-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-6 h-6 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground transition-all shadow-md ${
                  isAtStart
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "hover:text-foreground hover:bg-accent"
                }`}
              >
                <ChevronLeft className="w-3 h-3" />
              </button>
              <button
                onClick={() => {
                  if (!isAtEnd) {
                    tabsContainerRef.current?.scrollBy({
                      left: 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`absolute right-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-6 h-6 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground transition-all shadow-md ${
                  isAtEnd
                    ? "opacity-50 cursor-not-allowed pointer-events-none"
                    : "hover:text-foreground hover:bg-accent"
                }`}
              >
                <ChevronRight className="w-3 h-3" />
              </button>
            </>
          )}
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
            {activeTab === "data-analytics"
              ? renderCards(dataAnalyticsProjects)
              : activeTab === "data-visualization"
              ? renderCards(dataVisualizationProjects)
              : activeTab === "artificial-intelligence"
              ? renderCards(artificialIntelligenceProjects)
              : activeTab === "web-dev"
              ? renderCards(webDevProjects)
              : activeTab === "data-modeling"
              ? renderCards(dataModelingProjects)
              : activeTab === "digital-marketing"
              ? renderCards(digitalMarketingProjects)
              : renderCards(graphicDesignProjects)}
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  );
}
