import Styles from "./ContactSection.module.css";
import ContactForm from "../ContactForm/ContactForm.tsx";
import LinkButton from "../LinkButton/LinkButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className={Styles["contact-container"]}>
      <div className={Styles["contact-content-container"]}>
        <h2 className={Styles.header}>Contact</h2>
        <p className={Styles.description}>
          Seeking opportunities with a startup that values execution, results,
          and real problem-solving.
        </p>
        <p className={Styles.email}>
          Email: <strong>francowaisfeld@gmail.com</strong>
        </p>
        <div className={Styles["buttons-container"]}>
          <LinkButton text="RESUME" />
          <LinkButton icon={FaLinkedin} />
          <LinkButton icon={FaGithub} />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
