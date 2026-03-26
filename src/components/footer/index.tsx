import styles from "./styles.module.scss";

export function Footer() {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <p>Todos direitos reservados DevMotors {date.getFullYear()}</p>
    </footer>
  );
}
