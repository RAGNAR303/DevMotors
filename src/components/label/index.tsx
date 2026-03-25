import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface LabelProps {
  icon: ReactNode;
  label: string;
  contact: string;
}
export function Label({ icon, contact, label }: LabelProps) {
  return (
    <div className={styles.container}>
      <i>{icon}</i>
      <div className={styles.containerLabel}>
        <label>{label}</label>
        <p className={styles.contact}>{contact}</p>
      </div>
    </div>
  );
}
