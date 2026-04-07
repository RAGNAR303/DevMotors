import Link from "next/link";
import styles from "./styles.module.scss";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.links_container}>
        <div>
          <p>Sobre</p>
          <Link href={"/#home"}>HOME</Link>
          <Link href={"/#about"}>SERVIÇOS</Link>
          <Link href={"/#contact"}>CONTATOS</Link>
        </div>
        <ul>
          <p>Redes</p>
          <Link target="_blank" href={"https://thdev-portifolio.vercel.app/"}>
            <FaInstagram />
          </Link>
          <Link target="_blank" href={"https://thdev-portifolio.vercel.app/"}>
            <FaFacebook />
          </Link>
          <Link target="_blank" href={"https://thdev-portifolio.vercel.app/"}>
            <FaYoutube />
          </Link>
        </ul>
      </section>
      <p>Todos direitos reservados DevMotors {`${new Date().getFullYear()}`}</p>
    </footer>
  );
}
