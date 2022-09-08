import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <h1 className={styles.logo}>Food runner</h1>

        <div className={styles.contact}>
          <h3>CONTACT</h3>
          <p>2579 WASHINGTON ST, SAN FRANCISCO CS 4115</p>
          <p>+12345678900</p>
        </div>

        <div>
          <h3>GET INVOLVED</h3>
          <ul>
            <li>DONATE FOOD</li>
            <li>VOLUNTEER</li>
            <li>DONATE MONEY</li>
          </ul>
        </div>

        <div>
          <h3>LEARN MORE</h3>
          <ul>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/impact">WHAT WE DO</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>CONNECT WITH US</h3>

          <div className={styles.socials}>
            <Link href="https://facebook.com" redirect>
              <FaFacebook className={styles.socials_icon} />
            </Link>
            <Link href="https://twitter.com">
              <BsTwitter className={styles.socials_icon} />
            </Link>
            <Link href="https://instagram.com">
              <BsInstagram className={styles.socials_icon} />
            </Link>
          </div>
        </div>
      </div>

      <hr className={styles.line} />

      <p className={styles.copyright}>Copyrights@2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
