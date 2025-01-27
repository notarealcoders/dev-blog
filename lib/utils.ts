import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  FaGlobe,
  FaCode,
  FaServer,
  FaMicrochip,
  FaTerminal,
  FaCloud,
  FaDatabase,
  FaLaptopCode,
  FaCubes,
  FaCog,
  FaFile,
  FaPalette,
  FaRobot,
  FaMobile,
  FaShieldAlt,
  FaNetworkWired,
  FaBrain,
  FaChartLine,
  FaBookReader,
  FaReact,
  FaJs,
  FaCss3,
  FaLock,
  FaVial,
  FaPlug,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCategoryIcon = (category: string) => {
  const icons: Record<string, any> = {
    // Core Web Technologies
    "web development": { icon: FaGlobe, color: "text-blue-600" },
    typescript: { icon: FaCode, color: "text-blue-500" },
    javascript: { icon: FaJs, color: "text-yellow-500" },
    react: { icon: FaReact, color: "text-cyan-400" },
    "next.js": { icon: SiNextdotjs, color: "text-zinc-900 dark:text-white" },
    css: { icon: FaCss3, color: "text-indigo-500" },

    // Backend & Infrastructure
    backend: { icon: FaServer, color: "text-emerald-600" },
    database: { icon: FaDatabase, color: "text-amber-500" },
    "api design": { icon: FaPlug, color: "text-violet-500" },
    cloud: { icon: FaCloud, color: "text-sky-400" },

    // Development & Architecture
    "software architecture": { icon: FaCubes, color: "text-rose-500" },
    "development tools": { icon: FaCog, color: "text-neutral-500" },
    "frontend development": { icon: FaLaptopCode, color: "text-pink-500" },
    programming: { icon: FaCode, color: "text-fuchsia-500" },
    "best practices": { icon: FaBookReader, color: "text-teal-600" },

    // DevOps & Security
    devops: { icon: FaMicrochip, color: "text-orange-500" },
    security: { icon: FaLock, color: "text-red-600" },
    testing: { icon: FaVial, color: "text-green-500" },
    networking: { icon: FaNetworkWired, color: "text-cyan-600" },
    cybersecurity: { icon: FaShieldAlt, color: "text-red-500" },

    // Design & UX
    "ui/ux design": { icon: FaPalette, color: "text-purple-400" },
    "mobile development": { icon: FaMobile, color: "text-indigo-400" },

    // AI & Data
    "artificial intelligence": { icon: FaBrain, color: "text-purple-600" },
    "machine learning": { icon: FaRobot, color: "text-violet-600" },
    "data science": { icon: FaChartLine, color: "text-lime-600" },

    // Fallback
    default: { icon: FaFile, color: "text-slate-400" },
  };

  const key = category.toLowerCase();
  return icons[key] || icons.default;
};

export function createCategorySlug(category: string) {
  return encodeURIComponent(category.toLowerCase().trim());
}

export function decodeCategorySlug(slug: string) {
  return decodeURIComponent(slug);
}

/**
 * Helper function to ensure proper static generation
 * @param data Any data that needs to be serialized for static generation
 */
export function serializeForStatic<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}
