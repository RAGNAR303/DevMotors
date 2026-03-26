import { HomeProps } from "@/utils/type/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Container } from "../container";
export function About({ object }: HomeProps) {
  return (
    <Container>
      <>
        <main className={styles.container} id="about">
          <div className={styles.containerAbout}>
            <h2 className={styles.title}>Sobre</h2>
            <p className={styles.description}>
              {object.metadata.about.description}
            </p>
          </div>
          <div className={styles.aboutBanner}>
            <Image
              src={object.metadata.about.banner.url}
              alt="bannerSobre"
              fill
              quality={100}
              className={styles.banner}
            />
          </div>
        </main>
      </>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.servicesContainer}>
        {object.metadata.services.map((item, index) => (
          <article key={index} className={styles.servicesCard}>
            <div className={styles.services}>
              <Image
                src={item.image.url}
                alt="bannerSobre"
                fill
                quality={100}
                className={styles.servicesImage}
              />
            </div>
            <p className={styles.title}>{item.title}</p>
          </article>
        ))}
      </section>
    </Container>
  );
}
