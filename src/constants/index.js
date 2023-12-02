import { qnap, advantech, wordup } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "Advantech",
    icon: advantech,
    iconBg: "#accbe1",
    date: "Sep 2022 - now",
    points: [
      "Developing and maintaining web applications using Vue.js, Tailwind, Pinia and other related technologies.",
      "Collaborating with cross-functional teams including 2 designers, 1 product manager, 3 back-end developers and 1 front-end developer.",
      "Implementing front-end end to end tests using Cypress.",
      "Participating in code reviews and running 1-week sprint via Azure devops.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "WordUp",
    icon: wordup,
    iconBg: "#fbc3bc",
    date: "Apr 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js, SWR, MUI and other related technologies.",
      "Collaborating with cross-functional teams including 2 designers, 1 product manager, 1 back-end developer and other 2 front-end developers.",
      "Participating in code reviews and running 1-week sprint via ClickUp.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "QNAP",
    icon: qnap,
    iconBg: "#b7e4c7",
    date: "Mar 2021 - Mar 2022",
    points: [
      "Developing and maintaining web applications using Angular 6 and other related technologies.",
      "Collaborating with cross-functional teams including 1 designer, 1 product manager, 3 back-end developers and 1 SRE.",
      "Participating in code reviews and running 2-week sprint via Jira.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Russelllin7789",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/russell-lin-048645151/",
  },
];

export const projects = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Tools Introduction",
    description:
      "A AI tools introduction page built with Vue 3, TypeScript and Vite.",
    link: "https://github.com/Russelllin7789/ai_tools",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Greedy Snake",
    description:
      "Pay respect to classical little game! Use plain JavaScript and HTML canvas.",
    link: "https://github.com/Russelllin7789/greedy-snake",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "Legislator's Website",
    description:
      "Simulate a legislator's official website, which was built with Vue 3, TypeScript, and Vite.",
    link: "https://github.com/Russelllin7789/legislative-election",
  },
  {
    iconUrl: estate,
    theme: "btn-back-red",
    name: "Brick Breaker",
    description:
      "Pay respect to classical little game part two! Use plain JavaScript and HTML canvas.",
    link: "https://github.com/Russelllin7789/break-bricks",
  },
];
