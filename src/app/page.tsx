import { Hero } from "@/components/hero";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/api/get-data";
import { HomeProps } from "@/utils/type/home.type";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  console.log(object.metadata);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero data={object.metadata} icon={<PiWhatsappLogoDuotone />} />

        <section className={`${styles.section}`}>
          <About object={object} />

          <Contact object={object} />
        </section>
      </div>
    </main>
  );
}
