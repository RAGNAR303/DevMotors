import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Todos direitos reservados DevMotors {`${new Date().getFullYear()}`}</p>
    </footer>
  );
}
