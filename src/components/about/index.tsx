import styles from "./styles.module.scss";
import Image from "next/image";
import { Container } from "../container";

interface AboutProps {
  banner: string;
  description: string;
  active?: boolean;
  title?: string;
  url?: string;
}

export function About({ banner, description, active, title, url }: AboutProps) {
  return (
    <>
      <main className={styles.container} id="about">
        <div className={styles.containerAbout}>
          <h2>Sobre</h2>
          <p className={styles.description}>{description}</p>
          {active && (
            <a href={url} target="">
              {title}
            </a>
          )}
        </div>
        <div className={styles.aboutBanner}>
          <Image
            src={banner}
            alt="bannerSobre"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={100}
            className={styles.banner}
          />
        </div>
      </main>
    </>
  );
}
