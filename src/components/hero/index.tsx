import Image from "next/image";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface HeroProps {
  banner: {
    url: string;
  };
  heading: string;
  ctabutton: {
    title: string;
    url: string;
  };
}

export function Hero({ data, icon }: { data: HeroProps; icon?: ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={styles.heroContent}>
        <h2 className={styles.title}>{data.heading}</h2>
        <a href={data.ctabutton.url} target="_blank" className={styles.link}>
          {icon}
          {data.ctabutton.title}
        </a>
      </div>
      <div className={styles.heroBanner}>
        <Image
          src={data.banner.url}
          alt={data.heading}
          fill={true}
          quality={100}
          priority
          className={styles.banner}
        />
      </div>
    </main>
  );
}
