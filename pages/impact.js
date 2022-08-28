import React from "react";
import Styles from "../styles/impact.module.css";
import Link from "next/link";
import Image from "next/dist/client/image";

const impact = () => {
  return (
    <div className={Styles.impact_container}>
      <header className={Styles.header}>
        <div className={Styles.header_content}>
          <h2 className={Styles.heading}>
            OUR <span>SERVICES</span>
          </h2>
        </div>
      </header>

      <section className={Styles.first_section}>
        <div className={Styles.first_section_content}>
          <div className={Styles.first_box}>
            <div className={Styles.top}>
              <h2>A place-based approach</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, veniam vitae minima, dolore est molestiae corporis
                tenetur ut ad a magni
              </p>
            </div>

            <div className={Styles.bottom}>
              <div className={Styles.card}>
                <h3>65bil</h3>
                <small>dollars we collected</small>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Velit natus praesentium asperiores neque eius maxime sed fuga
                  earum
                </p>
              </div>
            </div>
          </div>

          <div className={Styles.second_box}>
            <h3>The power to choose in a child`s hand</h3>

            <div>
              <Image
                src="/images/Hand with heart.png"
                alt="hand"
                width={90}
                height={90}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quasi totam adipisci
              </p>
            </div>

            <div>
              <Image
                src="/images/hand gesture.png"
                alt="hand"
                width={90}
                height={90}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quasi totam adipisci
              </p>
            </div>

            <div>
              <Image
                src="/images/Ribbon.png"
                alt="Ribbon"
                width={90}
                height={70}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates quasi totam adipisci
              </p>
            </div>

            <button className={Styles.btn}>
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      {/* =================================== */}

      <section className={Styles.second_section}>
        <div className={Styles.second_section_content}>
          <div className={Styles.box}>
            <Image
              src="/images/Medicine.png"
              alt="water"
              width={90}
              height={70}
            />
            <h3>Medicine Help</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={Styles.box}>
            <Image src="/images/water.png" alt="water" width={90} height={70} />
            <h3>Water Delivery</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={Styles.box}>
            <Image
              src="/images/Education.png"
              alt="education"
              width={90}
              height={80}
            />
            <h3>Education Help</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={Styles.box}>
            <Image
              src="/images/Charity Box.png"
              alt="water"
              width={90}
              height={70}
            />
            <h3>We Donate</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={Styles.box}>
            <Image
              src="/images/Build.png"
              alt="water"
              width={120}
              height={90}
            />
            <h3>We Build</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className={Styles.box}>
            <Image src="/images/gift.png" alt="gift" width={90} height={80} />
            <h3>Send a gift for children</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>

      {/* ==================================== */}

      <section className={Styles.third_section}>
        <div className={Styles.third_section_content}>
          <div>
            <h2>The Good Childhood Report</h2>
            <p>
              Our good Childhood report 2022 shows that modern life continues to
              erode the happiness
            </p>
          </div>

          <div>
            <button className={Styles.btn}>
              <Link href="/contact">Volunteer</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default impact;
