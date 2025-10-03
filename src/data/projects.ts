export type Project = {
  id: string;
  title: string;
  summary: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  thumbnail?: string; 
};

export const projects: Project[] = [
  {
    id: "hiretree",
    title: "HireTree – Web3/AI Soft skills",
    summary: "Webpage to evaluate soft skills using AI and store results on blockchain.",
    tech: ["React", "Node", "EVM", "AI", "Solidity"],
    demoUrl: "https://hire-treee.netlify.app/",
    repoUrl: "https://github.com/Trigramador69/HireTree-Buildathon2025",
    featured: true,
    thumbnail: "/images/projects/hiretree.png", 
  },
];
