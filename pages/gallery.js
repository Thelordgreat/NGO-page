import React from "react";
import Styles from "../styles/gallery.module.css";
import Image from "next/image";

const gallery = () => {
  return (
    <div className={Styles.gallery_conatainer}>
      <div className={Styles.gallery_content}>
        <h1>Gallery</h1>

        <div className={Styles.images_container}>
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
          <Image
            src="/images/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"
            width={400}
            height={400}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default gallery;
