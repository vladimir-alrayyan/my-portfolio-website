import { Project, Experience, Certificate, Skill } from '../types';

export const personalInfo = {
  name: "Vladimir Alrayyan",
  title: "Computer Science Student | Aspiring CyberSecurity & Software Engineer",
  email: "vladrayyan321@icloud.com",
  location: "Debrecen, Hungary",
  linkedin: "https://www.linkedin.com/in/vladimir-alrayyan/",
  github: "https://github.com/vladimir-alrayyan",
  description: "Aspiring Computer Science professional passionate about software engineering and cybersecurity. I enjoy exploring system vulnerabilities, understanding attack vectors, and building secure solutions that make technology safer for everyone. Looking forward to applying my full-stack developing skills in innovative projects."
};

export const education = {
  degree: "B.S. Computer Science",
  university: "University of Debrecen",
  graduationDate: "January 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Objects & Design", 
    "Computer Organization & Programming",
    "Combinatorics",
    "Object-Oriented Programming",
    "Statistics & Applications"
  ]
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Information Technology Assistant",
    company: "Meta Network",
    location: "Remote",
    period: "June 2024 – Dec 2024",
    description: [
      "Helped in identifying and resolving software and hardware issues, improving system performance by 20%",
      "Assisted Full-Stack java and node.js operations, optimizing workflow efficiency and reducing processing time",
      "Collaborated with the QA team to debug and deploy solutions, ensuring 99% system uptime"
    ],
    technologies: ["Java", "Node.js", "Full-Stack Development", "QA Testing"]
  },
  {
    id: "2",
    title: "Technical Intern",
    company: "Mining Grid Dubai",
    location: "Dubai, UAE",
    period: "July 2025 – Present",
    description: [
      "Developed and deployed a custom ERC-20 token on Ethereum using Remix IDE and MetaMask, implementing smart contracts with Solidity and managing interactions via Postman and Node.js backend",
      "Containerized and orchestrated the smart contract backend using Docker for scalable deployment and seamless API integration, ensuring secure and efficient contract execution",
      "Gained hands-on experience in vulnerability scanning and penetration testing of web applications and APIs using tools like OWASP ZAP, Burp Suite, and SQLmap to identify and mitigate security risks"
    ],
    technologies: ["Solidity", "Ethereum", "Docker", "Postman", "OWASP ZAP", "Burp Suite", "SQLmap"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "EZStore (A Secure file management application)",
    description: "Developed a full-stack file storage web application with secure authentication and modern UI",
    technologies: ["Java", "Next.js", "React.js", "Git", "Appwrite"],
    githubUrl: "https://github.com/vladimir-alrayyan",
    period: "Dec 2024 – April 2025"
  }
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "C", "MATLAB", "HTML/CSS", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "Node.js", "React.js", "Angular", "Tailwind CSS"]
  },
  {
    category: "Tools & Platforms",
    items: ["AWS", "Webstorm", "Visual Studio", "IntelliJ", "PyCharm", "GitHub", "Postman", "Docker", "OWASP ZAP"]
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Teamwork", "Adaptability"]
  }
];

export const languages = ["English", "Russian", "Ukrainian", "Arabic", "French", "Hungarian"];

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "NVIDIA Accelerating Data Engineering Pipelines",
    issuer: "NVIDIA",
    date: "2024"
  },
  {
    id: "2",
    name: "NVIDIA Applications of AI for Anomaly Detection",
    issuer: "NVIDIA", 
    date: "2024"
  },
  {
    id: "3",
    name: "NVIDIA Computer Vision for Industrial Inspection",
    issuer: "NVIDIA",
    date: "2024"
  },
  {
    id: "4",
    name: "NVIDIA Fundamentals of Accelerated Data Science",
    issuer: "NVIDIA",
    date: "2024"
  },
  {
    id: "5",
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    date: "2024"
  },
  {
    id: "6",
    name: "IT Specialist – Cybersecurity",
    issuer: "Certiport",
    date: "2024"
  },
  {
    id: "7",
    name: "IT Specialist – Network Security",
    issuer: "Certiport",
    date: "2024"
  }
];