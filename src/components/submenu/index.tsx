import { MenuProps } from "@/utils/type/menu.type";
import { Button } from "../button";
import styles from "./styles.module.scss";
import Link from "next/link";
export function SubMenu({ objects }: { objects: MenuProps }) {
  console.log(objects);

  return (
    <ul className={`${styles.submenu} `}>
      {objects.objects.map((item, index) => (
        <li key={index}>
          <Link href={`/post/${item.slug}`}>
            <Button>{item.title}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
