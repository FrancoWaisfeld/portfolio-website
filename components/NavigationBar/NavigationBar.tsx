"use client";

import Link from "next/link";
import Styles from "./NavigationBar.module.css";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header className={Styles.header} onMouseLeave={handleMouseLeave}>
      <Link href="/">
        <div className={Styles.name}>Franco Waisfeld</div>
      </Link>

      <div className={Styles.hamburger} onClick={toggleMenu}>
        <FiAlignJustify />
      </div>

      <nav>
        <ul className={`${Styles.navigation} ${isOpen ? Styles.active : ""}`}>
          <Link className={Styles["navigation-links"]} href="/">
            <li>About</li>
          </Link>
          <Link className={Styles["navigation-links"]} href="/projects">
            <li>Projects</li>
          </Link>
          <Link className={Styles["navigation-links"]} href="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
