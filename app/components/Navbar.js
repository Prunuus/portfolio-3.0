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
          <div className={styles.navImg} ></div>
        </div>

        <div className={styles.navButtonContainer}>
          <a href="#">
            <button  className={styles.navButtons}> <p className={aoboshi.className}>Projects</p></button>
          </a>
          <a href="#">
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
