import styles from "./styles.module.scss";
import Image from "next/image";
import { Button } from "../button";
import { FaPhone } from "react-icons/fa6";

interface AboutProps {
  banner: string;
  description: string;
  active?: boolean;
  btnTitle?: string;
  AboutTitle?: string;
  url?: string;
}

export function About({
  banner,
  description,
  active,
  btnTitle,
  AboutTitle,
  url,
}: AboutProps) {
  return (
    <>
      <main className={styles.container} id="about">
        <div className={styles.containerAbout}>
          {AboutTitle ? <h2>Sobre {AboutTitle}</h2> : <h2>Sobre Serviço</h2>}

          <p className={styles.description}>{description}</p>
          {active && (
            <a href={url} target="_blank">
              <Button icon={<FaPhone />} style="green">
                Agende {AboutTitle}
              </Button>
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
