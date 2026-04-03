import { getPageBySlug } from "@/utils/api/get-data";
import { PostProps } from "@/utils/type/page.type";
import { Metadata } from "next";
import { Content } from "./components";
import { Suspense } from "react";
import Loading from "./components/loading";

export interface ParamsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const { slug } = await params;
  const { objects }: PostProps = await getPageBySlug(slug);

  try {
    return {
      title: `DevMotors - ${objects[0].metadata.tittle.heading}`,
      description: `${objects[0].metadata.tittle.resume}`,
      keywords: [
        "oficina",
        "carro",
        "veiculo",
        "manutenção preventida",
        "oficina especializada",
        "manutenção veicular",
      ],
      openGraph: {
        title: `DevMotors - ${objects[0].metadata.tittle.heading}`,
        images: [`${objects[0].metadata.banner.url}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    return {
      title: "DevMotors - sua oficina especilizada",
      description: "Localizada na grande são paulo",
      keywords: [
        "oficina",
        "carro",
        "veiculo",
        "manutenção preventida",
        "oficina especializada",
        "manutenção veicular",
      ],
      openGraph: {
        title: "DevMotors - sua ofivina especilizada",
        images: [`${process.env.NEXT_PUBLIC_URL}/mecanica.jpg`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Content slug={(await params).slug} />
    </Suspense>
  );
}
