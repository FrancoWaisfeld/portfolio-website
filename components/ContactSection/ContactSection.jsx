import Styles from "./ContactSection.module.css";
import ContactForm from "../ContactForm/ContactForm.tsx";
import LinkButton from "../LinkButton/LinkButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className={Styles["contact-container"]}>
      <div className={Styles["contact-content-container"]}>
        <h2 id="contact" className={Styles.header}>
          Contact
        </h2>
        <p className={Styles.description}>
          Seeking opportunities with a startup that values execution, results,
          and real problem-solving.
        </p>
        <p className={Styles.email}>
          Email: <strong>francowaisfeld@gmail.com</strong>
        </p>
        <div className={Styles["buttons-container"]}>
          <LinkButton
            href="/Franco_Waisfeld_Resume.pdf"
            target="_blank"
            text="RESUME"
          />
          <LinkButton
            href="https://www.linkedin.com/in/franco-waisfeld/"
            target="_blank"
            icon={FaLinkedin}
          />
          <LinkButton
            href="https://github.com/FrancoWaisfeld"
            target="_blank"
            icon={FaGithub}
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
