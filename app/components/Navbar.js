import React from 'react';
import styles from '../styles/navbar.module.css';  // Updated import

const Navbar = () => {
  return (
    <>
      <section className={styles.navbarBackground}>
        <div>
          <div>
            <p className={styles.text}>Kevin's Space</p>
            <img alt="Logo" />
          </div>
        </div>
        <div>
          <div styles={"border:0, padding:0"} className={styles.navButtons}>
            <a href="#">
              <button className={styles.buttonText} >Projects</button>
            </a>
            <a href="#">
              <button className={styles.buttonText} >Resume</button>
            </a>
            <a href="#">
              <button className={styles.buttonText} >Secret</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
