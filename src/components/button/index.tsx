import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  style?: string;
}

export function Button({ children, icon, style }: ButtonProps) {
  console.log(style);

  return (
    <button className={`${styles.button} ${style && styles.green}`}>
      {icon && <i>{icon}</i>}
      <p>{children}</p>
    </button>
  );
}
