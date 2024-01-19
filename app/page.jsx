import Image from 'next/image'
import homebanner from '../public/homebanner.png'
import Swipermain from '../components/swiper/page'
import Hcontent from '../components/hcontent/hcontent'
import "./globals.css"
import Button from '../components/button/Button'
import { Link } from 'react-router-dom';

function onclick(){
  <Link href="/forbuyer"/>
}

export default function Home() {
  return (

    // first home component//
    <div className='main'>
    <div className='container'>
      <div className='item'>
      <h1 className='title'>Welcome to Goa Explora </h1>
      <h2 className='titlee'>Your Gateway to Unforgettable Journeys</h2>
      <p className='disc'>Explore the vibrant tapestry of Goa with Goa Explora - your premier partner in Cab Booking and Sightseeing adventures. Immerse yourself in the enchanting beauty of Goa&apos;s golden beaches, historic landmarks, and lively culture. Whether you&apos;re seeking a tranquil escape or an adrenaline-packed escapade, we have the perfect journey waiting for you.</p>

      <div className='buttons'>
      <Button url="forbuyer" text="Book Now"/>      
      </div>
    </div>
      <div className='item'>
      <Image src={homebanner} alt="herobanner"className='hero'/>
      </div>
    </div> 


    {/*download the app container*/}

      {/* <div className={styles.appitem}>
      <h1 className={styles.apptitle}>DOWNLOAD APP TODAY</h1>  
      <h3 className={styles.h3}>📱 Take the first step towards hassle-free access to a plethora of services. 📲<br/> Download Aidlyx now and connect with trusted professionals in just a few taps.</h3>    
        <div className={styles.applogodiv}>
          <Image src={Playstore} alt="dwn"className={styles.applogo}/>  
          <Image src={Appstore} alt="dwn"className={styles.applogo}/>
        </div>
      
    </div>
   
    <Appfeatures/>
    <Seller/>
    <Procedure/> */}
    </div>
   

  )
}
