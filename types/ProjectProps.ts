import { StaticImageData } from "next/image";

export interface ProjectProps {
  image: StaticImageData;
  name: string;
  description: string;
  bulletPoints: string[];
  date: string;
  role: string;
  skills: string[];
  tag: string;
  caseStudyURL?: string;
  gitHubURL?: string;
}
