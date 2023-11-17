import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
        
    {
      id: 2,
      title: "About Us",
      url: "/aboutus",
    },
    {
      id: 3,
      title: "Contact Us",
      url: "/contactus",
    },
   
  ];

const Navbar = () => {
  return (
 
  
  <div className={styles.container}>    
    <Link href="/" className={styles.logo}>logo</Link>
     <div className={styles.links}>
   {links.map((link)=>(
    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
   ))}
    </div>
    <Link href="https://wa.me/917768077274?text=Testing" className={styles.register}>Enquire</Link>
    </div>
  )
}

export default Navbar
