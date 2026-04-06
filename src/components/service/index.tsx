"use client";

import { HomeProps } from "@/utils/type/home.type";
import styles from "./styles.module.scss";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
export function Service({ object }: HomeProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>
      <section className={styles.embla} ref={emblaRef}>
        <div className={styles.embla_container}>
          {object.metadata.services.map((item, index) => (
            <article key={index} className={styles.embla_slide}>
              <div className={styles.embla_slide_container}>
                <Image
                  src={item.image.url}
                  alt="bannerSobre"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1080px) 75vw 60vw"
                  priority={true}
                  quality={100}
                  className={styles.serviceImage}
                />
              </div>
              <p className={styles.title}>{item.title}</p>
            </article>
          ))}
        </div>
      </section>
      <div className={styles.container_button}>
        <button
          className={`${styles.button} ${styles.button_left}`}
          onClick={scrollPrev}
        >
          <IoIosArrowDropleftCircle />
        </button>
        <button
          className={`${styles.button} ${styles.button_right}`}
          onClick={scrollNext}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </>
  );
}
