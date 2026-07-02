export interface Skill {
  name: string;
  level: number; // 0-100 for visual bar
  icon?: string; // Optional icon name
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  category: 'Fullstack' | 'Frontend' | 'Backend' | 'Tools';
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'work' | 'milestone';
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: string;
    subrole: string;
    avatar: string;
    bio: string;
    longBio: string;
    email: string;
    location: string;
    cvUrl?: string;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  journey: JourneyItem[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Sahal Fatih",
    role: "Student & Developer",
    subrole: "Crafting High-Performance Modern Web Experiences",
    avatar: "/assets/avatar.jpg",
    bio: "Passionate student and fullstack developer focused on building clean, high-performance web applications. Bridging elegant design with robust code.",
    longBio: "I am a computer science student and developer based in Indonesia, specializing in building modern web applications. I love creating fast, accessible, and clean digital experiences. By combining structured software engineering principles with a keen eye for minimalist design, I build applications that are not only robust under the hood but also a joy to interact with.",
    email: "sahal.fatih@example.com",
    location: "Indonesia",
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "Astro", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React / Next.js", level: 85 },
        { name: "HTML5 & CSS3 / SCSS", level: 92 },
        { name: "Vanilla JS (DOM/APIs)", level: 90 },
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js & Express", level: 80 },
        { name: "PostgreSQL / SQLite", level: 78 },
        { name: "REST APIs & GraphQL", level: 85 },
        { name: "Prisma ORM", level: 82 },
        { name: "Docker", level: 70 },
      ]
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Figma (UI/UX)", level: 75 },
        { name: "Performance Optimization", level: 85 },
        { name: "Responsive Web Design", level: 95 },
        { name: "Linux Bash", level: 72 },
      ]
    }
  ],
  projects: [
    {
      title: "DevFlow Platform",
      description: "A developer-focused Q&A and community platform with markdown editor, voting, and reputation system.",
      category: "Fullstack",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
      image: "/assets/projects/project_ui.jpg",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      featured: true
    },
    {
      title: "AstroZen Theme",
      description: "A ultra-minimalist, fast, and SEO-optimized portfolio and blog template designed specifically for developers.",
      category: "Frontend",
      tags: ["Astro", "TypeScript", "Vanilla CSS", "Markdown"],
      image: "/assets/projects/project_ui.jpg",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      featured: true
    },
    {
      title: "GitStats Dashboard",
      description: "A browser tool to visualize developer contributions, language distribution, and commit activities using clean graphics.",
      category: "Tools",
      tags: ["React", "TypeScript", "Chart.js", "GitHub API"],
      image: "/assets/projects/project_ui.jpg",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      featured: false
    },
    {
      title: "TaskMesh Server",
      description: "Real-time collaborative task board server that syncs tasks instantly across multiple active clients.",
      category: "Backend",
      tags: ["Node.js", "Express", "Socket.io", "Redis", "PostgreSQL"],
      image: "/assets/projects/project_ui.jpg",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Subtle Shadows CSS",
      description: "A micro-library offering subtle, beautiful soft shadows and glassmorphism helpers for modern web developers.",
      category: "Tools",
      tags: ["CSS", "HTML", "Documentation"],
      image: "/assets/projects/project_ui.jpg",
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
      featured: true
    },
    {
      title: "Markdown Blog Engine",
      description: "A fast static site blog generator parsing local markdown files to fully responsive HTML pages.",
      category: "Frontend",
      tags: ["Astro", "MDX", "TypeScript", "RSS"],
      image: "/assets/projects/project_ui.jpg",
      githubUrl: "https://github.com",
      featured: false
    }
  ],
  journey: [
    {
      year: "2025 - Present",
      title: "Fullstack Developer Intern",
      subtitle: "TechCorp Tech Solutions",
      description: "Developing modern interfaces, integrating RESTful APIs, and implementing performance optimization strategies for client dashboards.",
      type: "work"
    },
    {
      year: "2024 - 2025",
      title: "Freelance Web Developer",
      subtitle: "Self-Employed",
      description: "Created landing pages, responsive portfolio websites, and small web systems for local clients, focusing on SEO and high loading speeds.",
      type: "work"
    },
    {
      year: "2023 - Present",
      title: "Computer Science Student",
      subtitle: "State University",
      description: "Diving deep into core concepts: Algorithms & Data Structures, Software Engineering, Database Systems, and Object-Oriented Programming.",
      type: "education"
    },
    {
      year: "2022",
      title: "Began Programming Journey",
      subtitle: "First Line of Code",
      description: "Discovered programming through Python. Learned script automation, command-line interfaces, and transitioned into HTML/CSS/JS frontend design.",
      type: "milestone"
    }
  ]
};
