import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineArrowRight } from "react-icons/hi";
import { GiDuck } from "react-icons/gi";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const links = [
    {
      id: 1,
      link: "Demographics",
      href: "/demographics",
    },
    {
      id: 2,
      link: "High School",
      href: "/highschool",
    },
    {
      id: 3,
      link: "Academics",
      href: "/academics",
    },
    {
      id: 4,
      link: "Co-op",
      href: "/co-op",
    },
    {
      id: 5,
      link: "Lifestyle",
      href: "/lifestyle",
    },
    {
      id: 6,
      link: "About",
      href: "/about",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles["no-scroll"]);
    } else {
      document.body.classList.remove(styles["no-scroll"]);
    }
  }, [menuOpen]);

  return (
    <>
      <div
        className={`${styles.backgroundTintCommon} ${
          menuOpen ? styles.backgroundTintOn : styles.backgroundTintOff
        }`}
        onClick={() => {
          setMenuOpen(false);
        }}
      />

      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <GiDuck size={25} className={styles.icon} />
          syde 2027
        </Link>

        <button
          onClick={() => {
            setMenuOpen(true);
          }}
          className={styles.menuIcon}
        >
          <HiOutlineMenuAlt3 size="2.5rem" />
        </button>
      </div>

      <div
        className={`${styles.sideBar} ${!menuOpen ? styles.sideBarClosed : ""}`}
      >
        <div className={styles.menuHeader}>
          <h2>Sections</h2>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className={`${styles.menuIcon} ${styles.closeMenuIcon}`}
          >
            <HiOutlineArrowRight size="2.5rem" />
          </button>
        </div>

        <ul className={styles.sectionsContainer}>
          {links.map(({ id, link, href }) => (
            <li key={id}>
              <Link href={href}>
                <h4>{link}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
