"use client";
import React from "react";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { Badge } from "@/components/ui/badge";
// Import your icons as before:
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiOpenjdk,
  SiGo,
  SiRust,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiGit,
  SiLinux,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiVite,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiJest,
  SiCypress,
  SiStorybook,
  SiFramer,
  SiSass,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { 
  Monitor, 
  Server, 
  Database, 
  Code, 
  Cloud, 
  Wrench 
} from "lucide-react";

// --------- DATA STRUCTURE ---------
interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
}

interface SkillCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Monitor,
    color: "#61DAFB",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "#339933",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    color: "#47A248",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    name: "Languages",
    icon: Code,
    color: "#3776AB",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Rust", icon: SiRust, color: "#000000" },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: Cloud,
    color: "#FF9900",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: SiAmazon, color: "#FF9900" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    ],
  },
  {
    name: "Tools & Others",
    icon: Wrench,
    color: "#F05032",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
      { name: "Prettier", icon: SiPrettier, color: "#F7B93E" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    ],
  },
];

// --------- COMPONENTS ---------

function SkillBadge({ skill }: { skill: Skill }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const IconComponent = skill.icon;

  return (
    <RoughNotation
      type="box"
      show={isHovered}
      color={skill.color || "#8B5CF6"}
      strokeWidth={2}
      animationDuration={300}
      padding={[4, 8]}
    >
      <Badge
        variant="secondary"
        className="flex items-center gap-1.5 px-3 py-1.5 cursor-pointer transition-all duration-200 hover:bg-muted/70"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={{ color: skill.color || "currentColor" }}>
          <IconComponent className="size-4 flex-shrink-0" />
        </span>
        <span className="text-xs font-medium">{skill.name}</span>
      </Badge>
    </RoughNotation>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const CategoryIcon = category.icon;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full flex items-center justify-center bg-muted/30">
          <span style={{ color: category.color }}>
            <CategoryIcon className="size-5" />
          </span>
        </div>
        <h3 className="font-semibold text-lg">{category.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <div className="space-y-8">
      {skillsData.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <SkillCategoryCard category={category} />
        </motion.div>
      ))}
    </div>
  );
}



