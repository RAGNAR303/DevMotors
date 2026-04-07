import Image from "next/image";
import styles from "./styles.module.scss";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

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
        {resume && <p className={styles.resume}>{resume}</p>}
        <a href={url} target="_blank" className={styles.link}>
          {<PiWhatsappLogoDuotone />}
          {title}
        </a>
      </div>
      <div className={styles.heroBanner}>
        <Image
          src={banner}
          alt={heading}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1080px) 75vw 60vw"
          quality={100}
          priority={true}
          className={styles.banner}
        />
      </div>
    </main>
  );
}
