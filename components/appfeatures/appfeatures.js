// HowItWorks.js

import React from 'react';
import styles from "./appfeatures.module.css"
import Image from 'next/image';
import search from "@/public/search.png"
import select from "@/public/select.png"
import payment from "@/public/payment.png"
import done from "@/public/done.png"

const Appfeatures = () => {
  return (
        <div className={styles.main}>
        <h1 className={styles.howitworkh}>How It Works:</h1>
        <section className={styles.howitworks}>
       
      <div className={styles.step}>
        <h2>Search for Services</h2>
        <div className={styles.stepicon}>
          <Image className={styles.image} src={search}alt='search and services'/>
          </div>
        
        <p>Enter the service you need, and our app will present a list of available professionals near you.</p>
      </div>
      <div className={styles.step}>
        <h2>Compare and Choose</h2>
        <div className={styles.stepicon}>
        <Image className={styles.image} src={select}alt='select'/>
        </div>
        
        <p>View profiles, read reviews, and compare prices to make an informed choice.</p>
      </div>
      <div className={styles.step}>
        <h2>Book and Pay Securely</h2>
        <div className={styles.stepicon}>
        <Image className={styles.image} src={payment}alt='payment'/>
        </div>
        
        <p>Once you’ve found the perfect fit, book their services and pay securely through the app.</p>
      </div>
      <div className={styles.step}>
        <h2>Get the Job Done</h2>
        <div className={styles.stepicon}>
        <Image className={styles.image} src={done}alt='done'/>
        </div>
        
        <p>The service provider will complete the job as per your requirements. Don’t forget to leave a review!</p>
      </div>
    </section></div>
  );
};

export default Appfeatures;
