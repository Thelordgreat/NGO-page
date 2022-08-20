import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className={styles.hero_container}>
        <div className={styles.texts}>
          <h2 className={styles.heading}>
            Food Today, <span className={styles.span}>Food Security</span>{" "}
            Tomorrow
          </h2>
          <p className={styles.description}>
            Together we can food waste all over the world, while also fighting
            hunger
          </p>
        </div>
      </div>

      <div>
        <section className={styles.first_section}>
          <h4 className={styles.small_heading}>Our Mission</h4>
          <h2 className={styles.large_heading}>
            Our Mission Is To Help Alleviate Hunger in the best way we can, to
            help prevent waste and create a new community
          </h2>

          <div className={styles.line}></div>
        </section>

        <section className={styles.second_section}>
          <div className={styles.second_section_text}>
            <h4 className={styles.small_heading}>Our History</h4>
            <h2 className={styles.large_heading}>
              Stopping hunger and food waste in san francisco since 1987
            </h2>
            <p>
              Our efforts focus on the immediate distribution of food while
              simultaneously working on long term strategies to address hunger
              and empower neighbors in need
            </p>

            <div className={styles.button}>
              <Link href="/about">LEARN MORE</Link>
              <AiOutlineArrowRight />
            </div>
          </div>

          <div className={styles.img_container}>
            <Image
              src="/images/zach-vessels-jLbmY5Zp7UQ-unsplash.jpg"
              alt="img"
              className={styles.img}
              width={500}
              height={450}
            />
          </div>
        </section>

        <section className={styles.third_section}>
          <div>
            <h3 className={styles.figures}>17,000</h3>
            <h5>Tons of food rescued per week</h5>
          </div>
          <div>
            <h3 className={styles.figures}>20,000</h3>
            <h5>Meals provided each week</h5>
          </div>
          <div>
            <h3 className={styles.figures}>450</h3>
            <h5>Partners involved in our program</h5>
          </div>
        </section>

        <section className={styles.fourth_section}></section>

        <section className={styles.fifth_section}></section>
      </div>
    </div>
  );
};

export default Home;
