import Styles from "./Project.module.css";
import Image from "next/image";
import FullWidthLine from "../FullWidthLine/FullWidthLine";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { StaticImageData } from "next/image";

interface ProjectProps {
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

const Project = ({
  image,
  name,
  description,
  bulletPoints,
  date,
  role,
  skills,
  tag,
  caseStudyURL,
  gitHubURL,
}: ProjectProps) => {
  return (
    <div className={Styles["project-container"]}>
      <div className={Styles["image-container"]}>
        <div className={Styles["tag-container"]}>{tag}</div>
        <Image src={image} alt={name}></Image>
      </div>

      <h2>
        <strong>{name} </strong>- {description}
      </h2>

      <ul>
        {bulletPoints.map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>

      <div className={Styles["project-info"]}>
        <h3>PROJECT INFO</h3>
        <FullWidthLine />
        <div className={Styles.date}>
          <p>DATE</p>
          <p>{date}</p>
        </div>

        <div className={Styles.role}>
          <p>ROLE</p>
          <p>{role}</p>
        </div>

        <div className={Styles.skills}>
          <p>SKILLS</p>
          <p>{skills}</p>
        </div>
      </div>

      <div className={Styles.links}>
        {caseStudyURL && (
          <a href={caseStudyURL}>
            READ CASE STUDY <BsArrowUpRightCircleFill />
          </a>
        )}
        {gitHubURL && (
          <a href={gitHubURL}>
            SEE ON GITHUB <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
