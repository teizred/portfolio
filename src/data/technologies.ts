import {
  UsersThree,
  Lightbulb,
  GraduationCap,
  ChatCircleText,
} from "phosphor-react";
import apiIcon from "../assets/icons/api.png";
import openaiIcon from "../assets/icons/openai.svg";

export interface TechItem {
  name: string;
  icon?: string;
  invert?: boolean;
  component?: React.ElementType;
}

export const TECHNOLOGIES: Record<string, TechItem> = {
  // Frontend
  html: { name: "HTML", icon: "https://svgl.app/library/html5.svg" },
  css: {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  javascript: {
    name: "JavaScript",
    icon: "https://svgl.app/library/javascript.svg",
  },
  react: {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://svgl.app/library/typescript.svg",
  },
  nextjs: {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: "https://svgl.app/library/tailwindcss.svg",
  },

  // Backend
  nodejs: { name: "Node.js", icon: "https://svgl.app/library/nodejs.svg" },
  expressjs: {
    name: "ExpressJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invert: true,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "https://svgl.app/library/postgresql.svg",
  },
  supabase: { name: "Supabase", icon: "https://svgl.app/library/supabase.svg" },
  api: { name: "API", icon: apiIcon },
  transcript: { 
    name: "Transcript", 
    icon: openaiIcon
  },

  // Outils & Workflow
  git: { name: "Git", icon: "https://svgl.app/library/git.svg" },
  github: {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  vscode: {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  figma: { name: "Figma", icon: "https://svgl.app/library/figma.svg" },
  docker: { name: "Docker", icon: "https://svgl.app/library/docker.svg" },
  railway: { name: "Railway", icon: "https://svgl.app/library/railway.svg", invert: true },

  // Soft Skills
  teamwork: { name: "Travail d'équipe", component: UsersThree },
  problem_solving: { name: "Résolution de problèmes", component: Lightbulb },
  learning: { name: "Apprentissage continu", component: GraduationCap },
  communication: { name: "Communication", component: ChatCircleText },
};
