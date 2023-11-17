import React from 'react';
import styles from './contactus.module.css';
import Button from '../components/button/Button';
import contactimage from '../public/contact.png';
import Image from 'next/image';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';



export const metadata = {
  title: "ODS Contact Information",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={contactimage}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button className={styles.send} url="#" text="Send"/>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;

