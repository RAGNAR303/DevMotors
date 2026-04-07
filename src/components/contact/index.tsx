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
    <main className={styles.container} id="contact">
      <section>
        <div className={styles.containerContact}>
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
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14641.847905124443!2d-46.80944434458005!3d-23.4437949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefd0b5d894b9b%3A0xb41b141cb037412f!2zTU9SScOBIEFVVE8gRUzDiVRSSUNBICYgTUVDw4JOSUNB!5e0!3m2!1spt-BR!2sbr!4v1775598383210!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
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
  );
}
