import { Hero } from "@/components/hero";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/api/get-data";
import { HomeProps } from "@/utils/type/home.type";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  console.log(object.metadata);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero data={object.metadata} icon={<PiWhatsappLogoDuotone />} />

        <section className={`${styles.section}`}>
          <h2>hero</h2>
        </section>
        <section className={`${styles.section}`}>
          <h2>hero</h2>
        </section>
      </div>
    </main>
  );
}
