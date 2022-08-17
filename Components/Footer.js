import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

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
              <Link href="/">ABOUT US</Link>
            </li>
            <li>
              <Link href="/">OUR IMPACT</Link>
            </li>
            <li>
              <Link href="/">OUR STORIES</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>CONNECT WITH US</h3>

          <div className={styles.socials}></div>
        </div>
      </div>

      <hr className={styles.line} />

      <p className={styles.copyright}>Copyrights@2022. All rights reserved</p>
    </footer>
  );
};

export default Footer;
