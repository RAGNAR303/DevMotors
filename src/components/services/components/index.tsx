"use client";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import { start } from "repl";

export default function Carousel({ children }: { children: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla_container}>
        <div className={styles.embla_slide}>{children}</div>
      </div>
    </div>
  );
}
