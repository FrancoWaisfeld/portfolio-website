import { IconType } from "react-icons";
import Styles from "./LinkButton.module.css";

interface LinkButtonProps {
  text?: string;
  icon?: IconType;
  fullWidth?: boolean;
}

const LinkButton = ({ text, icon: Icon, fullWidth }: LinkButtonProps) => {
  const isIconOnly: boolean = !text && !!Icon;
  const buttonClassName: string = `${
    isIconOnly ? Styles["icon-button"] : Styles["text-button"]
  } ${fullWidth ? Styles["full-width"] : ""}`;

  return (
    <div className={buttonClassName}>
      <a className={Styles.link}>
        {text && text}
        {Icon && <Icon />}
      </a>
    </div>
  );
};

export default LinkButton;
