import { Button } from "../button";
import styles from "./styles.module.scss";
import Link from "next/link";
export function SubMenu({ ClassName }: { ClassName?: string }) {
  return (
    <ul className={`${styles.submenu} `}>
      <li>
        <Link href={"/pagina-1"}>
          <Button>Troca de óleo</Button>
        </Link>
      </li>
      <li>
        <Link href={"/pagina-2"}>
          <Button>Manutenção preventiva</Button>
        </Link>
      </li>
      <li>
        <Link href={"/pagina-3"}>
          <Button>Alinhamento e balanceamento</Button>
        </Link>
      </li>
    </ul>
  );
}
