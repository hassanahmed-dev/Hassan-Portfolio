import {
  Monitor,
  Server,
  Database,
  Layers,
  GitBranch,
  Rocket,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: typeof Monitor;
  technologies: string[];
}

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, performant user interfaces with modern frameworks and component libraries that deliver exceptional user experiences.",
    icon: Monitor,
    technologies: ["React.js", "Next.js", "TypeScript", "Ant Design", "Bootstrap"],
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable server-side architectures with robust APIs, authentication systems, and efficient data processing pipelines.",
    icon: Server,
    technologies: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs"],
  },
  {
    title: "Database Architecture",
    description:
      "Crafting optimized database schemas, implementing migrations, and managing both SQL and NoSQL solutions for maximum performance.",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    title: "State & Data Management",
    description:
      "Implementing efficient state management patterns and data fetching strategies for complex, data-driven applications.",
    icon: Layers,
    technologies: ["Redux", "React Query", "React Hook Form", "GraphQL"],
  },
  {
    title: "UI Frameworks & Routing",
    description:
      "Leveraging modern component libraries and routing solutions to build intuitive navigation and polished interfaces.",
    icon: GitBranch,
    technologies: ["React Router", "Ant Design", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Deployment & DevOps",
    description:
      "Streamlining CI/CD pipelines, managing cloud deployments, and ensuring applications are production-ready with monitoring.",
    icon: Rocket,
    technologies: ["Git", "GitHub", "Vercel", "Netlify"],
  },
];
