export interface Skill {
  name: string;
  level?: string; // Optional indicator (e.g. Intermediate, Proficient)
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  title: string;
  role: string;
  domain: string;
  duration: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
  githubFront?: string;
  githubBack?: string;
  github?: string;
  demo?: string;
  image?: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  gpa: string;
  duration: string;
  expectedGraduation: string;
  coursework: string[];
  awards: string[];
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
  cvDownloadUrl?: string;
}
