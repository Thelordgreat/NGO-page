import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState("false");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={styles.nav}>
      <h1 className={styles.brand}>Food Runners</h1>

      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/impact">What we do</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>

      <a href="/contact" className={styles.contact}>
        Contact
      </a>

      {/* mobile button */}
      <div className={styles.menu_btn}>
        {nav ? (
          <AiOutlineClose size={20} onClick={handleNav} />
        ) : (
          <AiOutlineMenu size={20} onClick={handleNav} />
        )}
      </div>

      {/* Mobile menu */}
      <div className={styles.mobile_menu}>
        <ul>
          <li className={styles.menu_item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/about">About us</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/impact">What we do</Link>
          </li>
          <li className={styles.menu_item}>
            <Link href="/gallery">Gallery</Link>
          </li>

          <li className={styles.menu_item}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
