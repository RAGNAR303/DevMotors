import styles from "./styles.module.scss";
import Image from "next/image";
import { Button } from "../button";

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
          <h2>Sobre Serviço</h2>
          <p className={styles.description}>{description}</p>
          {active && (
            <a href={url} target="">
              <Button>{title}</Button>
            </a>
          )}
        </div>
        <div className={styles.aboutBanner}>
          <Image
            src={banner}
            alt="bannerSobre"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1080px) 75vw 60vw"
            priority={true}
            quality={100}
            className={styles.banner}
          />
        </div>
      </main>
    </>
  );
}
