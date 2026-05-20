import { Icons } from "@/components/icons";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { HomeIcon, Mail } from "lucide-react";
import { FileText } from "lucide-react"
import {
  Code,
  FileCode,
  Database,
  Server,
  Github,
  Cpu,
  Layers,
} from "lucide-react";


export const DATA = {
  name: "Dishant Bhere",
  initials: "DV",
  url: "https://dillion.io",
  location: "Navi Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Navi_Mumbai",
  description:
    "Software engineer Obsessed with Building,Allergic to mediocrity. Playing the game by my own rules.",
  summary:
  "I build fast and learn faster. With a [Bachelor's in Information Technology](#education) and [6+ hackathons](#hackathons) under my belt, I've learned that the best way to get good at something is to ship it. Currently open to opportunities and side projects worth pursuing.",
  avatarUrl: "/me.jpeg",
skills: [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
],

 navbar: [
  { href: "/", icon: HomeIcon, label: "Home" },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=bheredishant3@gmail.com",
    icon: Mail,
    label: "Get in Touch",
    target: "_blank",
  },
],
contact: {
  social: {
    Resume: {
      name: "Resume",
      url: "https://drive.google.com/file/d/1x0X10bSQrGqjP-g1ZSExDyBxQJ33ZVdM/view?usp=drive_link",
      icon: Icons.resume,
      navbar: true,
    },
    GitHub: {
      name: "GitHub",
      url: "https://github.com/DishantBhere",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dishant-bhere/",
      icon: Icons.linkedin,
      navbar: true,
    },
    email: {
      name: "Send Email",
      url: "#",
      icon: Icons.email,
      navbar: false,
    },
  },
},
  work: [
   
    {
      company: "Alpha Dye Private Limited",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer Intern",
      logoUrl: "/alpha.png",
      start: "Jul 2025",
      end: "Dec 2025",
      description:
        "Worked as a Software Engineer, Fixing Bugs, upgrading outdated systems, & supporting staff in using the platform efficiently.",
    },
     {
      company: "Elevance Skills",
      href: "https://www.elevanceskills.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Developer Intern",
      logoUrl: "/elevance.jpg",
      start: "Jan 2026",
      end: "Jul 2026",
      description:
        "Worked as a Full Stack Web Development Intern, Building & Contributing to Real-World Web Applications. Gained hands on Experience in both Frontend & Backend Development.",
    },
  ],
  education: [
   {
  school: "Theem College of Engineering",
  href: "https://theemcoe.org/",
  degree: "Bachelor's Degree of Information Technology (BSC.IT)",
  logoUrl: "/theemLogo.png",
  start: "2023",
  end: "2026",
},
  ],
  projects: [
    {
      title: "Mirova",
      href: "https://mirova-two.vercel.app/",
      dates: "March 2026 - April 2026",
      active: true,
      description:
        "Built an AI image authenticity detection platform that identifies whether an image is AI-generated or real, using a custom-trained deep learning model",
      technologies: [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  "Deep Learning",
  "Computer Vision",
  "TailwindCSS",
],
      links: [
        {
          type: "Website",
          href: "https://mirova-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/DishantBhere/Mirova/raw/main/ai_generated_food_images_fooling_restaurants__miro.mp4",
    },
    {
      title: "FOODRUSH.IO",
      href: "https://github.com/DishantBhere/Foodrush",
      dates: "January 2026 - March 2026",
      active: true,
      description:
        "Designed & developed a full-stack food ordering platform with a modern UI, cart management, and Razorpay payment integration.",
      technologies: [
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "Shadcn UI",
  "Razorpay",
  "React",
  "Prisma",
],
      links: [
        {
          type: "Source",
          href: "https://github.com/DishantBhere/Foodrush",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://raw.githubusercontent.com/DishantBhere/Foodrush/master/Video%20Project%202.mp4",
    },
    {
      title: "Urban Water Insights (Hackathon Project)",
      href: "https://urban-water-insights.vercel.app/",
      dates: "January 2026 - February 2026",
      active: true,
      description:
        "A smart city water planning dashboard that forecasts short term urban water demand based on real-world parameters like temperature, rainfall, & population. Automatically detects potential shortages and delivers actionable alerts,built & shipped within a hackathon deadline.",
      technologies: [
  "React",
  "TypeScript",
  "TailwindCSS",
  "FastAPI",
  "Python",
  "Pandas",
  "SARIMAX",
  "Vite",
  "REST API",
],
      links: [
        {
          type: "Website",
          href: "https://urban-water-insights.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/DishantBhere/Urban-Water-Insights",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"https://raw.githubusercontent.com/DishantBhere/urban-water-insights/main/Video%20Project%204.mp4",
    },
    {
      title: "AI Data Analyst Agent",
      href: "https://github.com/DishantBhere/AI-Data-Analyst",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "An AI-powered tool that lets anyone upload a CSV or Excel file and ask questions about their data in plain English. Returns instant insights, summaries, and statistics removing the need for manual data exploration or SQL knowledge.",
      technologies: [
  "Python",
  "Streamlit",
  "Gemini API",
  "Pandas",
  "HTML/CSS",
  "Machine Learning",
  "Data Analysis",
],
      links: [
        {
          type: "Source",
          href: "https://github.com/DishantBhere/AI-Data-Analyst",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://raw.githubusercontent.com/DishantBhere/AI-Data-Analyst/main/Video%20Project%203.mp4",
    },
  ],
  hackathons: [
    {
      title: "BuildIT ~ College Hackathon ",
      dates: "June 9th - 10th, 2024",
      location: "Betegaon, Palghar",
      description:
        "Secured 1st place at BuildIT 2024 (College Hackathon) by developing an AI Data Analyst Agent using Streamlit & Gemini API.Built a system that enables users to upload CSV/Excel datasets & obtain AI-generated insights through natural language queries",
      icon: "public",
      image:
        "/theemLogo.png",
      links: [
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/DishantBhere/AI-Data-Analyst",
        },
      ],
    },
    {
      title: "Smart India Hackathon",
      dates: "September 24th - 25th, 2025",
      location: "Palghar, Mumbai",
      description:
        "Led team to build offline P2P messaging app. Designed UI with radar detection, connection requests, encrypted chat, and user profiles. Managed workflow, features, and presentation.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
       links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://media.licdn.com/dms/image/v2/D4D2DAQGjnRxq8_yPdA/profile-treasury-image-shrink_1280_1280/B4DZwhtJEoIYAQ-/0/1770092011821?e=1775718000&v=beta&t=rIayub8WPRE3b5dcAkZs5MrOjUElfn6DodBys5CNMFU",
        },
      ],
    },
    {
      title: "IEEE TECHITHON ~ HACKDECK2.0",
      dates: "January 28th - 29th, 2026",
      location: "Malad, Mumbai",
      description:
        "A smart web app that predicts urban water demand using interactive scenario simulation. Adjust factors like weather, population, and industry to see real-time impact, alerts, and insights.",
      image:
        "https://imgs.search.brave.com/RtSbVJW5J0CtByqUyxRRiTNN9TdwPc09Ymej_MgKKbc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdGhh/cnZhdW5pdmVyc2l0/eS5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDgvQVVN/LUVOR0xJU0gtRk9V/TkRFUi1DSEFOQ0VM/TE9SLnBuZw",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1x0X10bSQrGqjP-g1ZSExDyBxQJ33ZVdM/view?usp=sharing",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/DishantBhere/urban-water-insights",
        },
         
      ],
    },
    {
      title: "SPIT Blockchain Hackathon",
      dates: "February 21st - 22nd, 2026",
      location: "Andheri West, Mumbai",
      description:
        "A blockchain based solution to enhance transparency & security in campus processes by removing manual verification.Leverages decentralized technology and smart contracts to ensure trust, data integrity, and reliability.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-695d561ae83bd_csi_logo.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/fb6a9089-015c-41bd-9ff0-d81a11b7e96d",
        },
        {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ayushpimple30/SPIT",
        },
      ],
    },
    {
      title: "ARIVOLIO 2K'26",
      dates: "February 11th - 12th, 2026",
      location: " Online, Unstop",
      description:
        "Participated in a hackathon style coding challenge focused on solving real-time programming problems under time constraints.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6979d3dca8668_alpg.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/7b9f9cae-a857-4d35-b476-f6a9a27bc8b2",
        },
      ],
    },
      {
      title: "Webathon 2026",
      dates: "February 04, 2026",
      location: "Boisar, Palghar",
      description: "Explains complex topics in simple terms using an offline-friendly AI system for fast, accessible learning. Built with: React, AI/NLP logic, Offline support (PWA/Local processing)",
      image:
        "https://img.freepik.com/premium-vector/blue-stork-logo-with-gradient-style_501861-174.jpg?w=500",
      links: [
         {
          title: "Project",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/e3ad06eb-3767-4d00-906e-3c34fc7ae6a0",
        },
      ],
    },
    {
      title: "Nerds AI Clash – Valentine Edition",
      dates: "February 20th, 2026",
      location: "Vishveshwarya Group of Institutions (VGI),Uttar Pradesh",
      description:
        "Participated in an AI based hackathon focused on problem-solving & core AI concepts. Competed in a timed, real-time format testing technical knowledge and quick thinking.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6979c9f09be66_nerds_room_logo.jpg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://unstop.com/certificate-preview/e3ad06eb-3767-4d00-906e-3c34fc7ae6a0",
        },
      ],
    },
    
    

  ],
};
