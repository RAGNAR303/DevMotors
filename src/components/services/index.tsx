import { HomeProps } from "@/utils/type/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";
import Carousel from "./components";

export function Services({ object }: HomeProps) {
  return (
    <>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.servicesContainer}>
   
        {object.metadata.services.map((item, index) => (
          <article key={index} className={styles.servicesCard}>
            <div className={styles.services}>
              <Image
                src={item.image.url}
                alt="bannerSobre"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1080px) 75vw 60vw"
                priority={true}
                quality={100}
                className={styles.servicesImage}
              />
            </div>
            <p className={styles.title}>{item.title}</p>
          </article>
        ))}
      </section>
 
    </>
  );
}
