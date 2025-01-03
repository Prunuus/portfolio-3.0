import React from 'react';
import styles from '../styles/navbar.module.css';  // Updated import
import { Aoboshi_One } from 'next/font/google';

const aoboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})


const Navbar = () => {
  
  return (
    <>
      <section className={styles.navbar}>

        <div className={styles.navLogo}>
          <p className={styles.text}>Kevin's Space</p>
          <a href='/'><div className={styles.navImg} ></div></a>
        </div>

        <div className={styles.navButtonContainer}>
          <a href="../projects">
            <button  className={styles.navButtons}> <p className={aoboshi.className}>Projects</p></button>
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1mRb1x0fs_yRAm9OcFbNRTQRMkjk23L6B">
            <button className={styles.navButtons}><p className={aoboshi.className}>Resume</p></button>
          </a>
          {/* <a href="#">
            <button className={styles.navButtons}>Secret</button>
          </a> */}
        </div>
        
      </section>
    </>
  );
}

export default Navbar;
