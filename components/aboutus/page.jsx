import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "../../components/button/Button";
import Abouthero from "../../../public/abouthero.jpeg"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={Abouthero}
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Our Story</h1>
          <h2 className={styles.imgDesc}>
          "Discover the Journey Behind Aidlyx"
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          
          <p className={styles.desc}>
          In [Year], we noticed a significant gap in the market: the need for a reliable platform to connect users with trusted service providers. From plumbers and tailors to masons, people needed a hassle-free way to access day-to-day services. Thus, [Your App Name] was born. Our mission is to simplify lives, foster reliability, and build a community that supports and uplifts each other. We've come a long way, but our journey is just getting started.
          </p> 
         
        </div>
       
        </div>
      </div>
   
  );
};

export default About;
