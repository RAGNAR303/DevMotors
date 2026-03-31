import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export const metadata: Metadata = {
  title: "DevMotors - sua ofivina especilizada",
  description: "Localizada na grande são paulo",
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
