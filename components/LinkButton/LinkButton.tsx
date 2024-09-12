import { IconType } from "react-icons";
import Styles from "./LinkButton.module.css";

interface LinkButtonProps {
  text?: string;
  icon?: IconType;
}

export default function LinkButton({ text, icon: Icon }: LinkButtonProps) {
  const isIconOnly: boolean = !text && !!Icon;

  return (
    <div
      className={isIconOnly ? Styles["circular-button"] : Styles["link-button"]}
    >
      <a className={Styles.link}>
        {text && text}
        {Icon && <Icon />}
      </a>
    </div>
  );
}
