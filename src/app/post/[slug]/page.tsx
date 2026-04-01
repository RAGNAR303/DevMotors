import { getPageBySlug } from "@/utils/api/get-data";
import styles from "./styles.module.scss";
import { PostProps } from "@/utils/type/page.type";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Container } from "@/components/container";

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: ParamsProps) {
  const { slug } = await params;
  const { objects }: PostProps = await getPageBySlug(slug);

  return (
    <section className={styles.section}>
      <Hero
        banner={objects[0].metadata.banner.url}
        heading={objects[0].metadata.tittle.heading}
        title={objects[0].metadata.button.text}
        url={objects[0].metadata.button.url}
        resume={objects[0].metadata.tittle.resume}
      />
      <Container>
        <About
          banner={objects[0].metadata.banner.url}
          description={objects[0].metadata.about.description}
          active={objects[0].metadata.about.button_active}
          title={objects[0].metadata.about.button_title}
          url={objects[0].metadata.about.button_url}
         
        />
      </Container>
    </section>
  );
}
