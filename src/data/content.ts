export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  about: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface Skill {
  category: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

export interface Interest {
  id: number;
  name: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Syed Daniyal Bokhari",
  role: "MERN Stack Developer",
  email: "syeddaniyalbokhari72@gmail.com",
  phone: "9353252474",
  location: "Bangalore, Karnataka",
  about: "Hello there! I am a Computer Science student at Ghousia College in Bangalore, India, currently pursuing my B.Tech degree. I am a passionate MERN Stack Developer who loves crafting pixel-perfect experiences with code. I enjoy building full-stack applications and contributing to the developer community."
};

export const experience: Experience[] = [
  {
    id: 1,
    company: "InspironLabs Software Systems",
    position: "Software Developer",
    duration: "Nov 2024 – Present",
    description: [
      "Developed scalable web apps using React & TypeScript",
      "Worked on a Healthcare Provider Credentialing System",
      "Collaborated with backend teams and product managers",
      "Participated in agile ceremonies and code reviews"
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Agile"]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "BE in Computer Science",
    institution: "VTU, GCE",
    duration: "2019-2023",
    details: "CGPA: 8.32"
  },
  {
    id: 2,
    degree: "PUC",
    institution: "SET PU College",
    duration: "2017-2019",
    details: "Pre-University Course"
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "St. Anthony's Church School",
    duration: "2016-2017",
    details: "Secondary School Leaving Certificate"
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    technologies: ["React.js", "TypeScript", "JavaScript", "Redux", "MobX", "Chakra UI", "Material UI", "CSS3"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "OAuth"]
  },
  {
    category: "Tools",
    technologies: ["Git", "Postman", "Vercel", "Netlify", "Cloudinary"]
  },
  {
    category: "Other Tech",
    technologies: ["Socket.IO", "OpenCV", "Python", "SQL"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Todo List Application",
    description: "A sleek and efficient Todo List application for managing tasks with ease. Built with MERN stack featuring user authentication, task management, and real-time updates.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
    github: "https://github.com/Daniyal1229/todo-list",
    live: "#"
  },
  {
    id: 2,
    title: "Invoice Generator",
    description: "A comprehensive Invoice Generator for creating and managing professional invoices. Features include PDF generation, client management, and payment tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "PDF Generation"],
    github: "https://github.com/Daniyal1229/invoice-generator",
    live: "#"
  },
  {
    id: 3,
    title: "Student Management System",
    description: "A robust Student Management System for efficient handling of student information, grades, attendance, and academic records with admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Admin Dashboard"],
    github: "https://github.com/Daniyal1229/student-management",
    live: "#"
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "MERN Stack Development",
    issuer: "JSPiders",
    year: "2023"
  }
];

export const interests: Interest[] = [
  {
    id: 1,
    name: "Full Stack Development",
    description: "Building end-to-end web applications with modern technologies"
  },
  {
    id: 2,
    name: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces"
  },
  {
    id: 3,
    name: "Open Source Contributions",
    description: "Contributing to open source projects and the developer community"
  },
  {
    id: 4,
    name: "API Integration",
    description: "Working with various APIs and third-party services"
  },
  {
    id: 5,
    name: "Algorithmic Problem Solving",
    description: "Solving complex problems using data structures and algorithms"
  }
]; 