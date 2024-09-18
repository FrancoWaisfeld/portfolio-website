import Link from "next/link";
import Styles from "./LinkButton.module.css";
import LinkButtonProps from "@/types/LinkButtonProps";

const LinkButton = ({
  href,
  text,
  icon: Icon,
  fullWidth,
  target,
}: LinkButtonProps) => {
  const isIconOnly: boolean = !text && !!Icon;
  const buttonClassName: string = `${
    isIconOnly ? Styles["icon-button"] : Styles["text-button"]
  } ${fullWidth ? Styles["full-width"] : ""}`;

  return (
    <Link href={href} className={Styles.link} target={target}>
      <div className={buttonClassName}>
        {text && text}
        {Icon && <Icon />}
      </div>
    </Link>
  );
};

export default LinkButton;
