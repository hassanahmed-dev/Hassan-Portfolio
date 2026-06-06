export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "devops";
  proficiency: number;
  icon?: string;
}

export const skills: Skill[] = [
  { name: "React.js", category: "frontend", proficiency: 95 },
  { name: "Next.js", category: "frontend", proficiency: 92 },
  { name: "TypeScript", category: "frontend", proficiency: 90 },
  { name: "Ant Design", category: "frontend", proficiency: 88 },
  { name: "Bootstrap", category: "frontend", proficiency: 85 },
  { name: "React Router", category: "frontend", proficiency: 90 },
  { name: "React Query", category: "frontend", proficiency: 88 },
  { name: "Redux", category: "frontend", proficiency: 87 },
  { name: "React Hook Form", category: "frontend", proficiency: 90 },
  { name: "Node.js", category: "backend", proficiency: 90 },
  { name: "Express.js", category: "backend", proficiency: 88 },
  { name: "NestJS", category: "backend", proficiency: 85 },
  { name: "GraphQL", category: "backend", proficiency: 82 },
  { name: "PostgreSQL", category: "database", proficiency: 88 },
  { name: "MongoDB", category: "database", proficiency: 85 },
  { name: "MySQL", category: "database", proficiency: 83 },
  { name: "Supabase", category: "database", proficiency: 90 },
  { name: "Git", category: "devops", proficiency: 92 },
  { name: "GitHub", category: "devops", proficiency: 90 },
  { name: "REST APIs", category: "devops", proficiency: 93 },
  { name: "Vercel", category: "devops", proficiency: 88 },
  { name: "Netlify", category: "devops", proficiency: 85 },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps & Tools" },
] as const;
