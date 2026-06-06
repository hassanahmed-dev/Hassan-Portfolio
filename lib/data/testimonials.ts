export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
    content:
      "Exceptional developer who consistently delivers beyond expectations. The attention to detail and code quality is remarkable. Our platform's performance improved by 40% after the optimization work.",
    rating: 5,
    avatar: "/avatars/avatar1.jpg",
  },
  {
    id: "2",
    name: "Michael Torres",
    role: "Product Manager",
    company: "StartupFlow",
    content:
      "A true full-stack expert. Seamlessly handled both frontend and backend challenges, delivering a polished product on schedule. Communication was clear and proactive throughout.",
    rating: 5,
    avatar: "/avatars/avatar2.jpg",
  },
  {
    id: "3",
    name: "Emily Richardson",
    role: "Design Lead",
    company: "CreativeOps",
    content:
      "Incredible ability to translate designs into pixel-perfect, animated interfaces. The collaboration was smooth, and the final result exceeded our design vision with beautiful micro-interactions.",
    rating: 5,
    avatar: "/avatars/avatar3.jpg",
  },
  {
    id: "4",
    name: "David Park",
    role: "Engineering Director",
    company: "ScaleUp Labs",
    content:
      "Brought deep expertise in React and Node.js to our team. The architecture decisions made early on have allowed us to scale effortlessly. Highly recommend for complex projects.",
    rating: 5,
    avatar: "/avatars/avatar4.jpg",
  },
];
