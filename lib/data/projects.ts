export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend";
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory, secure payments, and an admin dashboard built with modern web technologies.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management SaaS",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop boards, and team analytics.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "GraphQL"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "realtime-chat",
    title: "Real-time Chat App",
    description:
      "A messaging application with real-time communication, typing indicators, file sharing, and end-to-end encryption.",
    image: "/projects/chat.jpg",
    tags: ["React", "Supabase Realtime", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "An interactive analytics dashboard with data visualization, custom reports, and role-based access control.",
    image: "/projects/analytics.jpg",
    tags: ["Next.js", "NestJS", "MongoDB", "Ant Design"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "api-gateway",
    title: "API Gateway Service",
    description:
      "A microservices API gateway with rate limiting, authentication, caching, and comprehensive logging.",
    image: "/projects/api.jpg",
    tags: ["NestJS", "GraphQL", "Redis", "Docker"],
    category: "backend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "A headless CMS for managing portfolio content with a rich editor, media library, and automated deployments.",
    image: "/projects/cms.jpg",
    tags: ["Next.js", "Supabase", "React Query"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
];
