import React from "react";
import Styles from "../styles/Contact.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const contact = () => {
  return (
    <div className={Styles.contact_container}>
      <div className={Styles.contact_content}>
        <section className={Styles.first_section}>
          <div className={Styles.box}>
            <FiPhoneCall className={Styles.icon} />
            <h3>Call us</h3>
            <p>+12345678900</p>
          </div>

          <div className={Styles.box}>
            <GoLocation className={Styles.icon} />
            <h3>Address</h3>
            <p>157 fifteen street, Berlin</p>
          </div>

          <div className={Styles.box}>
            <AiOutlineMail className={Styles.icon} />
            <h3>Mail us</h3>
            <p>example@gmail.com</p>
          </div>
        </section>

        <section className={Styles.second_section}>
          <form className={Styles.contact_form}>
          <h3>Call to action</h3>
          <h2>Lets create something great together!</h2>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div>
            <input type="text" placeholder="Message" className={Styles.message} />
          </div>

          <a href="#">Send</a>
        </form>
        </section>
      </div>
    </div>
  );
};

export default contact;
