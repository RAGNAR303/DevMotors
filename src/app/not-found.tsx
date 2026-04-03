"use client";
import { Button } from "@/components/button";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={styles.error}>
      <p>Ops...Essa pagina não existe</p>
      <a href={"/"}>
        <Button>Voltar para Home</Button>
      </a>
    </section>
  );
}
