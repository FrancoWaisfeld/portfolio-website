import Styles from "./Project.module.css";
import Image from "next/image";
import Link from "next/link";
import FullWidthLine from "../FullWidthLine/FullWidthLine";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { ProjectProps } from "@/types/ProjectProps";

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

      <div className={Styles["project-description"]}>
        <h2>
          <strong>{name} </strong>- {description}
        </h2>

        <ul>
          {bulletPoints.map((bullet, index) => {
            return <li key={index}>{bullet}</li>;
          })}
        </ul>
      </div>

      <div className={Styles["project-info"]}>
        <h3>Project Info</h3>
        <FullWidthLine />
        <div className={Styles.date}>
          <p>Date</p>
          <p>{date}</p>
        </div>
        <FullWidthLine />
        <div className={Styles.role}>
          <p>Role</p>
          <p>{role}</p>
        </div>
        <FullWidthLine />
        <div className={Styles.skills}>
          <p>Skills</p>
          <p>{skills.join(", ")}</p>
        </div>
        <FullWidthLine />
        <div className={Styles.links}>
          {caseStudyURL && (
            <Link href={caseStudyURL} target="_blank">
              READ CASE STUDY <BsArrowUpRightCircleFill />
            </Link>
          )}
          {gitHubURL && (
            <Link href={gitHubURL} target="_blank">
              SEE ON GITHUB <FaGithub />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
