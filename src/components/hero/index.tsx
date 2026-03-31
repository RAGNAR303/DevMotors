import Image from "next/image";
import styles from "./styles.module.scss";
import { HomeProps } from "@/utils/type/home.type";

interface HeroProps {
  banner: string;
  heading: string;
  resume?: string;
  title: string;
  url: string;
}

export function Hero({ banner, heading, resume, title, url }: HeroProps) {
  return (
    <main className={styles.main} id="home">
      <div className={styles.heroContent}>
        <h2 className={styles.title}>{heading}</h2>
        {resume && <p>{resume}</p>}
        <a href={url} target="_blank" className={styles.link}>
          {/* {icon} */}
          {title}
        </a>
      </div>
      <div className={styles.heroBanner}>
        <Image
          src={banner}
          alt={heading}
          fill={true}
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={100}
          priority
          className={styles.banner}
        />
      </div>
    </main>
  );
}
