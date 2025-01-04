'use client'
import React from 'react'
import styles from '@styles/MainSection.module.css';
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";
import { GiPreviousButton } from "react-icons/gi";

const MainSection = () => {
  return (
    <section className={styles.background}>
      <div className={styles.details}>

        <div className={styles.catEarsBackground}>
            {/* cat ears goes here */}
            <div className={styles.catEarsLeft}>
              <div className={styles.catEarsLeftInner}></div>
            </div>
            <div className={styles.catEarsRight}> 
              <div className={styles.catEarsRightInner}></div>
            </div>
        </div>
        <div className={styles.typographyBackground}>
          {/* intro/typography goes here */}
          <ReactTyped
          className={styles.typewriter}
          strings={[
            "Hi!",
            "你好!",
          ]}
          typeSpeed={200}
          backSpeed={200}
          loop
          />
          <h1 className={styles.typewriter}>
            I'm Kevin!
          </h1>
        </div>

        <div className={styles.bioBackground}>
          {/* short bio */}
          <p>
            Im currently pursuing a B.S. in Computer Science at Texas A&M University alongside a minor in Mathematics.
          </p>
            I am experienced in full stack web development but I’m still learning more. Im currently looking for Software Engineering Internships or any role that allows me to learn more about the field of computer science! 
          <p>
            Some of my interests are cats, Pokemon, cooking, not using vim, and many more! Feel free to look around
          </p>
        </div>

        <div className={styles.socialsBackground}>
          {/* links to socials or other things */}
          <a href='https://www.linkedin.com/in/kaikevinc/'> {/*LinkedIn*/} 
            <button className={styles.socialsButtons}><FaLinkedin /> </button>
          </a>
          <a href='https://github.com/Prunuus'> {/*Github*/} 
            <button className={styles.socialsButtons}><FaGithub /> </button>
          </a>
          <a href='https://www.instagram.com/kev.lnc/'> {/*Insta*/} 
            <button className={styles.socialsButtons}><FaInstagram /> </button>
          </a>
          <a>
          <button className={styles.socialsButtons}><GiPreviousButton/> </button>
          </a>
          <a href='https://portfolio2-jm71zkv75-prunuus-projects.vercel.app'><p style={{position:"relative",top:"5px" ,left:"-30px"}}>{"<--- secret"}</p></a>
        </div>

      </div>

      <div className={styles.sleepyCatContainer} >
        <div className={styles.sleepyCat}/> {/*img */}
      </div>
     
    </section>

  )
}

export default MainSection