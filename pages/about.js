import React from "react";
import Styles from "../styles/About.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div className={Styles.about_container}>
      <header className={Styles.about_header}>
        <h2>
          <span>About</span>Us
        </h2>
      </header>

      {/* <section className={Styles.first_section}>
        <div className={Styles.first_section_content}>
          <Image
            src={"/images/zach-vessels-oOHBxlGADx4-unsplash.jpg"}
            width={600}
            height={350}
            alt="img"
          />
        </div>
      </section> */}

      <section>
        <div className={Styles.second_section_content}>
          <div className={Styles.first_box}>
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maiores minima at iure in pariatur adipisci repellat unde </p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nemo! Fuga explicabo cupiditate sunt minus quisquam amet quam et</p>

            <div className={Styles.middle_content}>
              <div className={Styles.card}>
                <h3>65mill</h3>
                <p>Lorem ipsum </p>
              </div>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos explicabo modi deserunt laudantium</p>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo placeat, impedit odit praesentium nemo, obcaecati </p>
          </div>

          <div className={Styles.second_box}>
              <h2>About Us</h2>
              <h3>Help Is Our Main Goal</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga reprehenderit non corrupti </p>

              <Image src="/images/austin-pacheco-FtL07GM9Q7Y-unsplash.jpg" width={400} height={300} alt="img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
