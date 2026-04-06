"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { SubMenu } from "../submenu";
import { getSubMenu } from "@/utils/api/get-data";
import { MenuProps } from "@/utils/type/menu.type";

export function Header({ home }: { home: boolean }) {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuProps>();

  function scrollPage() {
    window.scrollY > 10 ? setTop(false) : setTop(true);
    console.log("fex scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollPage);

    return () => window.addEventListener("scroll", scrollPage);
  }, [top]);

  useEffect(() => {
    async function loadSubMenu() {
      const menu: MenuProps = await getSubMenu();

      setMenu(menu);
    }
    loadSubMenu();
  }, []);

  return (
    <header
      className={`${styles.header} ${!top ? styles.fixed : styles.static}`}
    >
      <div className={styles.menu}>
        <div className={styles.container}>
          <Link href={"/#home"}>
            <h2>DEVMOTORS</h2>
          </Link>

          <nav className={styles.navItem}>
            <Link href={"/#home"}>HOME</Link>
            <Link href={"/#about"}>SERVIÇOS</Link>
            <Link href={"/#contact"}>CONTATOS</Link>
          </nav>
        </div>

        <button className={styles.hiddenMenu} onClick={() => setOpen(!open)}>
          {open ? <IoClose /> : <HiMenuAlt4 />}
        </button>
      </div>

      {menu && (
        <div className={styles.sub_menu}>
          {home && <SubMenu objects={menu} />}
        </div>
      )}

      <nav className={`${styles.mobile}   ${open && styles.open}`}>
        <div className={styles.link}>
          <Link href={"/#home"}>HOME</Link>
          <Link href={"/#about"}>SERVIÇOS</Link>
          <Link href={"/#contact"}>CONTATOS</Link>
        </div>

        {home && menu && <SubMenu objects={menu} />}
      </nav>
    </header>
  );
}
