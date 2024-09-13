import Styles from "./AboutSection.module.css";
import LinkButton from "../LinkButton/LinkButton";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const AboutSection = () => {
  return (
    <div className={Styles["about-container"]}>
      <h2>About Me</h2>
      <LinkButton
        text="FEATURED PROJECTS"
        icon={BsArrowUpRightCircleFill}
        fullWidth={true}
      />
      <h3>
        {
          "I'm a full stack engineer and conversion rate optimization specialist"
        }
      </h3>
      <p>
        {
          "There's something about building things - making them better, faster, and more efficient that I've always been drawn to. The continuous cycle of improvement and the potential to impact millions of people drive me as a software engineer."
        }
      </p>
      <p>
        {
          "Most recently I built Syncosaurus, an open-source React-javascript framework for real-time collaborative web applications. This project was the culmination of skills I acquired through Launch School's intensive 2000-hour program for full-stack web development, mastering the fundamentals of Ruby and JavaScript from first principles. During my studies, I worked as a Software Engineer at Reveler where I developed a ticket marketplace for nightlife venues using Next.js and gained real-world experience."
        }
      </p>
      <p>
        {
          "Before transitioning to software engineering, I was a marketing strategist where I increased sales qualified leads by 72% as the only full-time marketing employee. I secured this role by leveraging my experience scaling an e-commerce store to $30,000 in monthly revenue at the age of 18."
        }
      </p>
      <p>
        {
          "I combine my expertise in conversion rate optimization and specialization in the Node.js and React ecosystems to drive customer retention and increase conversion rates at the most critical steps of the customer journey."
        }
      </p>
    </div>
  );
};

export default AboutSection;
