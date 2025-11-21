import { motion, easeOut, Variants, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import {
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

const itemVariants = {
  hidden: { y: 50, opacity: 0, filter: "blur(8px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easeOut },
  },
};

const rtlVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const ltrVariants: Variants = {
  animate: {
    x: ["-100%", "0%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const techItems = [
  { icon: Code, label: "Google Colab" },
  { icon: Presentation, label: "Ms. Power Point" },
  { icon: FileSpreadsheet, label: "Ms. Excel" },
  { icon: Database, label: "Google BigQuery" },
  { icon: Braces, label: "TypeScript" },
  { icon: Atom, label: "React" },
  { icon: Palette, label: "Tailwind" },
  { icon: Coffee, label: "JavaScript" },
  { icon: Settings, label: "DBeaver" },
  { icon: Database, label: "PostgreSQL" },
  { icon: Box, label: "Docker" },
  { icon: Server, label: "n8n" },
  { icon: Server, label: "Node.js" },
  { icon: Code, label: "Next.js" },
  { icon: BarChart2, label: "Tableau" },
  { icon: BarChart3, label: "Looker Studio" },
  { icon: BarChart2, label: "Power BI" },
  { icon: ImageIcon, label: "Canva" },
  { icon: PenTool, label: "Figma" },
  { icon: Code, label: "Python" },
  { icon: Database, label: "MySQL" },
  { icon: Database, label: "Supabase" },
  { icon: Server, label: "Flask" },
  { icon: Code, label: "Streamlit" },
  { icon: Braces, label: "TensorFlow" },
  { icon: Code, label: "SciPy" },
  { icon: Code, label: "Scikit-learn" },
  { icon: Code, label: "PyTorch" },
  { icon: FileSpreadsheet, label: "Pandas" },
  { icon: Code, label: "NumPy" },
  { icon: Settings, label: "MLflow" },
  { icon: BarChart3, label: "Matplotlib" },
  { icon: Code, label: "Keras" },
];

export default function TechStacks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const totalItemsPerRow = useMemo(() => techItems.length * 2, []);
  const totalItems = useMemo(() => 3 * totalItemsPerRow, [totalItemsPerRow]);
  const shuffledDelays = useMemo(() => {
    const baseDelays = Array.from({ length: totalItems }, (_, i) => i * 0.02);
    return [...baseDelays].sort(() => Math.random() - 0.5);
  }, [totalItems]);

  const maskStyle = {
    maskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
  };

  return (
    <section ref={ref} className="pt-2 pb-10 w-full">
      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="text-xl font-bold mb-6 text-center md:text-left text-foreground"
      >
        Tech Stacks that I have used
      </motion.h2>
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, rowIndex) => {
          const staggerDelay = 0.03 + rowIndex * 0.01;
          return (
            <motion.div
              key={rowIndex}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="overflow-hidden relative"
              style={maskStyle}
            >
              <motion.div
                className="flex"
                variants={rowIndex % 2 === 0 ? rtlVariants : ltrVariants}
                animate="animate"
              >
                {[...techItems, ...techItems].map((item, index) => {
                  const globalIndex = rowIndex * totalItemsPerRow + index;
                  const currentDelay = shuffledDelays[globalIndex];
                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        filter: "blur(8px)",
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              filter: "blur(0px)",
                            }
                          : {
                              opacity: 0,
                              filter: "blur(8px)",
                            }
                      }
                      transition={{
                        duration: 0.3,
                        ease: easeOut,
                        delay: currentDelay,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-border dark:border-white/20 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition bg-background text-foreground shrink-0 mx-2"
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
