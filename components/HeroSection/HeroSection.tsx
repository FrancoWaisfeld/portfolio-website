import Styles from "./HeroSection.module.css";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeadShot from "../../public/headshot.png";

const HeroSection = () => {
  return (
    <div className={Styles["hero-section"]}>
      <div className={Styles["hero-text"]}>
        <h1>
          {"Hi, I'm"}
          <br />
          {"Franco"}
          <br />
          {"Waisfeld"}
        </h1>
        <p>
          A Full Stack Software Engineer based in San Diego, CA specializing in
          the
          <strong className={Styles.bold}> Node.js and React ecosystems</strong>
        </p>
      </div>
      <div className={Styles["link-buttons"]}>
        <LinkButton text="CONTACT ME" />
        <LinkButton text="RESUME" />
        <LinkButton icon={FaGithub} />
        <LinkButton icon={FaLinkedin} />
      </div>
      <div className={Styles["headshot-container"]}>
        <Image
          className={Styles.headshot}
          src={HeadShot}
          alt="Franco Waisfeld"
        />
      </div>
    </div>
  );
};

export default HeroSection;
