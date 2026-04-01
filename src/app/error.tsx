"use client";
import { Button } from "@/components/button";
import styles from "./error.module.scss";

export default function Error() {
  return (
    <section className={styles.error}>
      <p>Ops...Essa pagina não existe</p>
      <a href={"/"}>
        <Button>Voltar para Home</Button>
      </a>
    </section>
  );
}
