import { IconType } from "react-icons";

export default interface LinkButtonProps {
  href: string;
  text?: string;
  icon?: IconType;
  fullWidth?: boolean;
  target?: string;
}
