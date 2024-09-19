import Styles from "./ProjectSection.module.css";
import Project from "../Project/Project";
import { ProjectProps } from "@/types/ProjectProps";
import Reveler from "@/public/reveler.png";
import Syncosaurus from "@/public/syncosaurus.svg";
import WebHookGravityWell from "@/public/webhookGravityWell.png";
import SmartCart from "@/public/smartCart.png";

const projects: ProjectProps[] = [
  {
    image: Syncosaurus,
    name: "Syncosaurus",
    description:
      "a React-Javascript framework for building real-time, collaborative web applications",
    bulletPoints: [
      "Developed a distributed state syncing system that resulted in shared state between up to ~50 clients through Web-socket Connections. (React, Node.js)",
      "Implemented optimistic UI updates for the syncing system that led to 0 ms of perceived latency for client updates. (React, Node.js)",
      "Engineered delta updates and batching that reduced web-socket message size by ~95%+. (React, Node.js)",
      "Architected and developed a backend of edge workers to support concurrent WebSocket connections and long-term persistent state storage (Cloudflare, Node.js, WebSockets)",
      "Worked with a remote team of 4 engineers using agile methodology resulting in building a working framework within 4 months. (Git, GitHub)",
    ],
    date: "Jan 2024 to July 2024",
    role: "Full Stack Engineer",
    skills: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Websockets",
      "Git",
      "GitHub",
    ],
    tag: "Capstone Project",
    caseStudyURL: "https://syncosaurus.github.io/case-study",
    gitHubURL: "https://github.com/syncosaurus/syncosaurus",
  },
  {
    image: Reveler,
    name: "Reveler",
    description: "a ticket marketplace for nightlife venues",
    bulletPoints: [
      "Built an MVP Next.js ticket marketplace leading to sign ups from the first 5 venues (Next.js)",
      "Developed an admin dashboard enabling venues to manage ticket offerings and view real-time updates resulting in a 10 point increase to the NPS (Net Promoter Score) (Next.js, real-time)",
      "Conducted 40 interviews with potential customers resulting in the addition of 3 critical features for the MVP (customer analysis)",
    ],
    date: "Aug 2022 to Sep 2023",
    role: "Full Stack Engineer",
    skills: ["Next.js", "TypeScript", "real-time", "customer analysis"],
    tag: "Startup Job",
  },
  {
    image: WebHookGravityWell,
    name: "Webhook Gravity Well",
    description: "test and debug webhooks",
    bulletPoints: [
      "A a utility tool for receiving, testing, and debugging webhooks built with React, Express.js and MongoDB.",
    ],
    date: "December 2024",
    role: "Full Stack Engineer",
    skills: ["React", "Express.js", "MongoDB"],
    tag: "Project",
    gitHubURL: "https://github.com/Team2LS/WebhookGravityWell",
  },
  {
    image: SmartCart,
    name: "SmartCart",
    description: "a user friendly e-commerce shopping cart",
    bulletPoints: [
      "An e-commerce shopping cart built with React, Express.js, and MongoDB.",
    ],
    date: "Feb 2024",
    role: "Full Stack Engineer",
    skills: ["React", "Express.js", "MongoDB"],
    tag: "Project",
    gitHubURL: "https://github.com/FrancoWaisfeld/shoppping-cart",
  },
];

const ProjectSection = () => {
  return (
    <div className={Styles["project-section"]}>
      <h1>Featured Projects</h1>
      <p>
        Here are a few projects that showcase my full stack engineering
        capabilities
      </p>
      {projects.map((projectProps, index) => {
        return <Project key={index} {...projectProps} />;
      })}
    </div>
  );
};

export default ProjectSection;
