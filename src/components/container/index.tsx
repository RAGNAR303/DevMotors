import { ReactNode } from "react";
import styles from "./styles.module.scss";
export function Container({ children }: { children: ReactNode }) {
  return (
    <main className={styles.container}>
      <section className={styles.section}>{children}</section>
    </main>
  );
}
