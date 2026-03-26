import { Container } from "@/components/container";
import styles from "./styles.module.scss";
import { HomeProps } from "@/utils/type/home.type";
import { Label } from "../label";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
export function Contact({ object }: HomeProps) {
  return (
    <Container>
      <main className={styles.container} id="contact">
        <section className={styles.containerContact}>
          <h2 className={styles.title}>Contatos</h2>
          <div className={styles.contact}>
            <Label
              icon={<MdOutlineMailOutline />}
              contact={object.metadata.contact.email}
              label={"Email"}
            />
            <Label
              icon={<FiPhone />}
              contact={object.metadata.contact.phone}
              label={"Telefone"}
            />{" "}
            <Label
              icon={<LuMapPin />}
              contact={object.metadata.contact.address}
              label={"Endereço"}
            />
            <Label
              icon={<IoMdTime />}
              contact={object.metadata.contact.time}
              label={"Horário"}
            />{" "}
          </div>
        </section>

        <a
          href={object.metadata.ctabutton.url}
          target="_blank"
          className={styles.link}
        >
          {<PiWhatsappLogoDuotone />}
          {object.metadata.ctabutton.title}
        </a>
      </main>
    </Container>
  );
}
