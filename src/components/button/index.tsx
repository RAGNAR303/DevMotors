import { ReactNode } from "react";
import styles from "./styles.module.scss";
export function Button({ children }: { children: ReactNode }) {
  return <button className={styles.button}>{children}</button>;
}
