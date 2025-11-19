"use client";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Users,
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

const professionalExperience = [
  {
    company: "PT. Teknologi Digital Indonesia",
    role: "Full-Stack Developer",
    dates: "Jan 2023 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Developed and maintained web applications using React, Next.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    icon: Briefcase,
  },
  {
    company: "Startup XYZ",
    role: "Frontend Engineer",
    dates: "Jun 2021 - Dec 2022",
    location: "Remote",
    description:
      "Built responsive user interfaces with modern JavaScript frameworks. Optimized performance and accessibility for e-commerce platforms.",
    icon: Briefcase,
  },
  {
    company: "Freelance Projects",
    role: "Web Developer",
    dates: "2019 - 2021",
    location: "Various",
    description:
      "Delivered custom websites and applications for small businesses and individuals, focusing on clean code and user experience.",
    icon: Briefcase,
  },
  {
    company: "University Lab Assistant",
    role: "Research Assistant",
    dates: "2018 - 2019",
    location: "Bandung, Indonesia",
    description:
      "Assisted in software development for academic research projects, gaining early experience in agile methodologies.",
    icon: Briefcase,
  },
];

const committees = [
  {
    company: "IEEE Student Branch ITB",
    role: "Vice Chair",
    dates: "2020 - 2021",
    location: "Bandung, Indonesia",
    description:
      "Led a team of 20+ members in organizing tech workshops and hackathons. Managed event budgets and partnerships with industry sponsors.",
    icon: Users,
  },
  {
    company: "ACM SIGGRAPH Chapter",
    role: "Event Coordinator",
    dates: "2019 - 2020",
    location: "Bandung, Indonesia",
    description:
      "Coordinated graphics and animation seminars, attracting 100+ participants. Collaborated with faculty for guest speaker invitations.",
    icon: Users,
  },
  {
    company: "Coding Club ITB",
    role: "Mentor",
    dates: "2018 - 2019",
    location: "Bandung, Indonesia",
    description:
      "Mentored freshmen in competitive programming and web development. Developed training materials and hosted weekly sessions.",
    icon: Users,
  },
];

const education = [
  {
    company: "Institut Teknologi Bandung",
    role: "Bachelor of Computer Science",
    dates: "2017 - 2021",
    location: "Bandung, Indonesia",
    description:
      "Focused on software engineering, algorithms, and web development. Graduated with honors. Relevant coursework: Data Structures, Operating Systems, Database Systems.",
    icon: GraduationCap,
  },
  {
    company: "Online Certification - Coursera",
    role: "Full-Stack Web Development",
    dates: "2022",
    location: "Online",
    description:
      "Completed specialization in full-stack development with MERN stack, including projects on building scalable web applications.",
    icon: GraduationCap,
  },
  {
    company: "High School - SMA Negeri 1 Bandung",
    role: "High School Diploma",
    dates: "2014 - 2017",
    location: "Bandung, Indonesia",
    description:
      "Excelled in mathematics and sciences, preparing foundation for computer science studies. Active in school coding club.",
    icon: GraduationCap,
  },
];

export default function Experience() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<
    "professional" | "committee" | "education"
  >("professional");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabs = [
    { key: "professional" as const, label: "Professional Experience" },
    { key: "committee" as const, label: "Committee & Organization" },
    { key: "education" as const, label: "Education" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
  }, [activeTab]);

  const renderCards = (items: any[]) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div key={index} variants={itemVariants}>
            <div className="flex flex-col pt-0 pb-6 px-0 border border-gray-400 dark:border-white/30 rounded-lg shadow-md hover:shadow-xl transition-all bg-background text-foreground text-center group min-h-[400px]">
              <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden rounded-t-lg relative">
                <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110 bg-primary/10 relative">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none z-10"></div>
              </div>
              {item.dates && (
                <div className="w-full px-6 flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {item.dates}
                  </span>
                </div>
              )}
              {item.location && (
                <div className="w-full px-6 flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {item.location}
                  </span>
                </div>
              )}
              <div className="w-full px-6 text-center flex-1 flex flex-col justify-end">
                {item.role ? (
                  <>
                    <h3 className="text-lg font-semibold mb-2">{item.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.company}
                    </p>
                  </>
                ) : (
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                )}
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
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
              className={`relative z-10 px-4 py-2 rounded-full font-medium text-sm transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-white dark:text-black"
                  : "text-zinc-600 dark:text-zinc-100"
              }`}
            >
              {tab.label}
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
