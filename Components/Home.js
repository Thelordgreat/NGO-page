import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

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
              <Link href="/">LEARN MORE</Link>
              <AiOutlineArrowRight />
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80"
              alt="img"
              className={styles.img}
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
      </div>
    </div>
  );
};

export default Home;
