import Link from "next/link";
import Styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <header className={Styles.header}>
      <Link href="/">
        <div className={Styles.name}>Franco Waisfeld</div>
      </Link>

      <nav>
        <ul className={Styles.navigation}>
          <li className={Styles["navigation-links"]}>
            <Link href="/">About</Link>
          </li>
          <li className={Styles["navigation-links"]}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={Styles["navigation-links"]}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
