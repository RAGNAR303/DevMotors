import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "DevMotors - sua ofivina especilizada",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const home = true;

  return (
    <html lang="pt-BR">
      <body>
        <Header home={home} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
