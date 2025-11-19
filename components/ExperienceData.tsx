// components/ExperienceData.tsx
import { Briefcase, Users, GraduationCap } from "lucide-react";

export const professionalExperience = [
  {
    company: "xD Android OSS • Tulungagung, East Java, Indonesia",
    role: "Android Developer",
    dates: "Jan 2021 - Present",
    description:
      "Developed and maintained Android applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality mobile solutions.",
    logo: "xd", // Placeholder for logo; replace with actual image src if available
    icon: Briefcase,
  },
  {
    company: "PT Lintas Total Technology • Surabaya, East Java, Indonesia",
    role: "Android Developer",
    dates: "Feb 2022 - Dec 2022",
    description:
      "Built responsive Android apps with focus on performance and user experience. Integrated backend services and optimized for various devices.",
    logo: "itt", // Placeholder for logo; replace with actual image src if available
    icon: Briefcase,
  },
  {
    company: "Infotech UMM • Malang, East Java, Indonesia",
    role: "Lead of Information System",
    dates: "Jan 2024 - Present",
    description:
      "Led information systems development and management. Oversaw team projects, ensuring alignment with business goals and technological best practices.",
    logo: "labit", // Placeholder for logo; replace with actual image src if available
    icon: Briefcase,
  },
];

export const committees = [
  {
    company: "IEEE Student Branch ITB • Bandung, Indonesia",
    role: "Vice Chair",
    dates: "2020 - 2021",
    description:
      "Led a team of 20+ members in organizing tech workshops and hackathons. Managed event budgets and partnerships with industry sponsors.",
    icon: Users,
  },
  {
    company: "ACM SIGGRAPH Chapter • Bandung, Indonesia",
    role: "Event Coordinator",
    dates: "2019 - 2020",
    description:
      "Coordinated graphics and animation seminars, attracting 100+ participants. Collaborated with faculty for guest speaker invitations.",
    icon: Users,
  },
  {
    company: "Coding Club ITB • Bandung, Indonesia",
    role: "Mentor",
    dates: "2018 - 2019",
    description:
      "Mentored freshmen in competitive programming and web development. Developed training materials and hosted weekly sessions.",
    icon: Users,
  },
];

export const education = [
  {
    company: "Institut Teknologi Bandung • Bandung, Indonesia",
    role: "Bachelor of Computer Science",
    dates: "2017 - 2021",
    description:
      "Focused on software engineering, algorithms, and web development. Graduated with honors. Relevant coursework: Data Structures, Operating Systems, Database Systems.",
    icon: GraduationCap,
  },
  {
    company: "Online Certification - Coursera",
    role: "Full-Stack Web Development",
    dates: "2022",
    description:
      "Completed specialization in full-stack development with MERN stack, including projects on building scalable web applications.",
    icon: GraduationCap,
  },
  {
    company: "High School - SMA Negeri 1 Bandung • Bandung, Indonesia",
    role: "High School Diploma",
    dates: "2014 - 2017",
    description:
      "Excelled in mathematics and sciences, preparing foundation for computer science studies. Active in school coding club.",
    icon: GraduationCap,
  },
];
