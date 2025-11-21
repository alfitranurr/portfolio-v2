// components/ProjectsData.tsx
import {
  BarChart3,
  PieChart,
  Brain,
  Code2,
  Database,
  Megaphone,
  Palette,
} from "lucide-react";

export const dataAnalyticsProjects = [
  {
    company: "Client: Retail Chain • Data Insights",
    role: "Customer Behavior Analytics",
    dates: "Jan 2024 - Jun 2024",
    description:
      "Analyzed sales data using Python and SQL to identify purchasing patterns. Implemented predictive models with scikit-learn, improving targeted marketing by 25%.",
    logo: "retail", // Placeholder for logo; replace with actual image src if available
    icon: BarChart3,
  },
  {
    company: "Freelance • E-Commerce Optimization",
    role: "Sales Forecasting Dashboard",
    dates: "Sep 2023 - Dec 2023",
    description:
      "Developed ETL pipelines with Apache Airflow to process terabytes of transaction data. Created reports in Tableau for real-time business decisions.",
    icon: BarChart3,
  },
  {
    company: "Startup: FinTech • Risk Assessment",
    role: "Fraud Detection System",
    dates: "Mar 2023 - Aug 2023",
    description:
      "Built anomaly detection algorithms using machine learning on transaction logs. Reduced false positives by 40% through feature engineering and model tuning.",
    icon: BarChart3,
  },
];

export const dataVisualizationProjects = [
  {
    company: "NGO: Health Organization • Impact Reporting",
    role: "Interactive Health Metrics Viz",
    dates: "Feb 2024 - May 2024",
    description:
      "Designed D3.js visualizations for global health data, including heatmaps and timelines. Deployed on React for stakeholder presentations, reaching 1k+ users.",
    logo: "health", // Placeholder for logo; replace with actual image src if available
    icon: PieChart,
  },
  {
    company: "Corporate: Marketing Agency • Campaign Tracker",
    role: "Multi-Channel Performance Charts",
    dates: "Oct 2023 - Jan 2024",
    description:
      "Created custom Power BI dashboards integrating Google Analytics and CRM data. Enabled A/B testing visualizations for campaign optimization.",
    icon: PieChart,
  },
  {
    company: "Personal • Stock Market Trends",
    role: "Real-Time Portfolio Visualizer",
    dates: "Jun 2023 - Sep 2023",
    description:
      "Built a web app with Plotly for live stock charts and correlation matrices. Incorporated WebSockets for streaming data updates.",
    icon: PieChart,
  },
];

export const artificialIntelligenceProjects = [
  {
    company: "Tech Firm: AI Solutions • Automation",
    role: "NLP Chatbot for Customer Service",
    dates: "Apr 2024 - Present",
    description:
      "Trained BERT-based models on domain-specific data for intent recognition. Integrated with Dialogflow, handling 80% of queries autonomously.",
    logo: "ai-tech", // Placeholder for logo; replace with actual image src if available
    icon: Brain,
  },
  {
    company: "Research Lab • Computer Vision",
    role: "Image Recognition for Medical Diagnostics",
    dates: "Nov 2023 - Mar 2024",
    description:
      "Developed CNN models with TensorFlow for X-ray analysis, achieving 95% accuracy. Collaborated on dataset annotation and model deployment via Flask API.",
    icon: Brain,
  },
  {
    company: "Hackathon Winner • Generative AI",
    role: "Text-to-Image Generator Prototype",
    dates: "Jul 2023",
    description:
      "Prototyped a Stable Diffusion fine-tune for custom art styles. Optimized inference on GPU, demoed with Gradio interface for user interaction.",
    icon: Brain,
  },
];

export const webDevProjects = [
  {
    company: "Agency: Digital Agency • E-Commerce",
    role: "Full-Stack Online Store",
    dates: "Jan 2024 - Apr 2024",
    description:
      "Built a scalable Next.js site with Stripe integration and headless CMS (Strapi). Optimized for SEO and mobile responsiveness, boosting conversions by 30%.",
    logo: "agency", // Placeholder for logo; replace with actual image src if available
    icon: Code2,
  },
  {
    company: "Freelance • SaaS Platform",
    role: "User Management Dashboard",
    dates: "Aug 2023 - Dec 2023",
    description:
      "Developed backend with Node.js/Express and frontend in Vue.js. Implemented JWT auth and real-time updates via Socket.io for collaborative features.",
    icon: Code2,
  },
  {
    company: "Open Source • Tooling",
    role: "Progressive Web App Boilerplate",
    dates: "May 2023 - Jul 2023",
    description:
      "Created a PWA template with Workbox for offline caching and Tailwind for styling. Contributed to npm, with 200+ downloads in first month.",
    icon: Code2,
  },
];

export const dataModelingProjects = [
  {
    company: "Consulting: Data Firm • Supply Chain",
    role: "Simulation Model for Logistics",
    dates: "Mar 2024 - Jun 2024",
    description:
      "Modeled supply chain dynamics using AnyLogic simulation software. Optimized routing algorithms, reducing delivery times by 15% in scenario testing.",
    logo: "logistics", // Placeholder for logo; replace with actual image src if available
    icon: Database,
  },
  {
    company: "Academic • Climate Research",
    role: "Predictive Climate Model",
    dates: "Oct 2023 - Feb 2024",
    description:
      "Built agent-based models in NetLogo for ecosystem simulations. Incorporated GIS data for spatial analysis and uncertainty quantification.",
    icon: Database,
  },
  {
    company: "Startup • Product Recommendation",
    role: "User Preference Modeling",
    dates: "Apr 2023 - Sep 2023",
    description:
      "Developed Bayesian networks with PyMC3 for personalized recommendations. Integrated into a recommendation engine, improving click-through rates.",
    icon: Database,
  },
];

export const digitalMarketingProjects = [
  {
    company: "Brand: Lifestyle Brand • Campaign Launch",
    role: "Social Media Strategy & Analytics",
    dates: "Feb 2024 - May 2024",
    description:
      "Planned and executed Instagram/TikTok campaigns using Hootsuite. Analyzed engagement metrics with Google Analytics, growing followers by 50k.",
    logo: "brand", // Placeholder for logo; replace with actual image src if available
    icon: Megaphone,
  },
  {
    company: "Agency • SEO Optimization",
    role: "Content Marketing Funnel",
    dates: "Sep 2023 - Jan 2024",
    description:
      "Optimized website for search with Ahrefs audits and keyword research. Created email nurture sequences in Mailchimp, increasing leads by 35%.",
    icon: Megaphone,
  },
  {
    company: "E-Commerce Client • Ad Management",
    role: "PPC Advertising Setup",
    dates: "Jun 2023 - Aug 2023",
    description:
      "Managed Google Ads and Facebook campaigns with A/B testing. Tracked ROI using UTM parameters, achieving 3x return on ad spend.",
    icon: Megaphone,
  },
];

export const graphicDesignProjects = [
  {
    company: "Studio: Design Studio • Branding",
    role: "Corporate Identity Package",
    dates: "Jan 2024 - Mar 2024",
    description:
      "Designed logos, business cards, and style guides in Adobe Illustrator. Delivered vector assets and mockups for print/digital use across platforms.",
    logo: "studio", // Placeholder for logo; replace with actual image src if available
    icon: Palette,
  },
  {
    company: "Freelance • UI/UX Prototyping",
    role: "Mobile App Interface Redesign",
    dates: "Nov 2023 - Dec 2023",
    description:
      "Created wireframes and high-fidelity mocks in Figma for a fitness app. Focused on user flows and accessibility, iterating based on feedback.",
    icon: Palette,
  },
  {
    company: "Event Organizer • Promotional Materials",
    role: "Poster & Flyer Series",
    dates: "Jul 2023 - Aug 2023",
    description:
      "Illustrated thematic posters in Photoshop for a tech conference. Ensured brand consistency and scalability for various print sizes.",
    icon: Palette,
  },
];
