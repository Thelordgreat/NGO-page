import React, { createRef } from "react";
import Styles from "../styles/Contact.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = createRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className={Styles.contact_container}>
      <div className={Styles.contact_content}>
        <section className={Styles.first_section}>
          <a href="#">
            <div className={Styles.box}>
              <FiPhoneCall className={Styles.icon} />
              <h3>Call us</h3>
              <p>+12345678900</p>
            </div>
          </a>

          <a href="#">
            <div className={Styles.box}>
              <GoLocation className={Styles.icon} />
              <h3>Address</h3>
              <p>157 fifteen street, Berlin</p>
            </div>
          </a>

          <a href="mailto:greatokafor9@gmail.com">
            <div className={Styles.box}>
              <AiOutlineMail className={Styles.icon} />
              <h3>Mail us</h3>
              <p>example@gmail.com</p>
            </div>
          </a>
        </section>

        <section className={Styles.second_section}>
          <form className={Styles.contact_form} ref={form} onSubmit={sendEmail}>
            <h3>Call to action</h3>
            <h2>Lets create something great together!</h2>
            <div>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <div>
              <input
                type="text"
                placeholder="Message"
                className={Styles.message}
              />
            </div>

            <a href="#">Send</a>
          </form>
        </section>
      </div>
    </div>
  );
};

export default contact;
