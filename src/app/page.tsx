import { Hero } from "@/components/hero";
import styles from "./styles.module.scss";
import { getDataHome } from "@/utils/api/get-data";
import { HomeProps } from "@/utils/type/home.type";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Container } from "@/components/container";
export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Hero
          banner={object.metadata.banner.url}
          heading={object.metadata.heading}
          title={object.metadata.ctabutton.title}
          url={object.metadata.ctabutton.url}
        />
        <Container>
  
       
            <About
              banner={object.metadata.about.banner.url}
              description={object.metadata.about.description}
            />

            <Services object={object} />
            <Contact object={object} />
      
        </Container>
      </div>
    </main>
  );
}
