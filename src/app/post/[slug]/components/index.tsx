import { About } from "@/components/about";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import styles from "./styles.module.scss";
import { getPageBySlug } from "@/utils/api/get-data";
import { PostProps } from "@/utils/type/page.type";

export async function Content({ slug }: { slug: string }) {
  const { objects }: PostProps = await getPageBySlug(slug);
  return (
    <section className={styles.section}>
      <Hero
        banner={objects[0].metadata.banner.url}
        heading={objects[0].metadata.title.heading}
        title={objects[0].metadata.button.text}
        url={objects[0].metadata.button.url}
        resume={objects[0].metadata.title.resume}
      />
      <Container>
        <About
          banner={objects[0].metadata.about.banner.url}
          description={objects[0].metadata.about.description}
          active={objects[0].metadata.about.button_active}
          AboutTitle={objects[0].metadata.about.title}
          btnTitle={objects[0].metadata.about.button_title}
          url={objects[0].metadata.about.button_url}
        />
      </Container>
    </section>
  );
}
