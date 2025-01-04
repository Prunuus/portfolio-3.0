import React from 'react'
import styles from '../styles/Projects.module.css'
import Project from './ProjectCard'
import { FaReact, FaNodeJs, FaGithub  } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";




const rmtArray = [
    <SiMongodb key={1}/>,
    <RiNextjsLine key={2}/>,
    <FaReact key={3}/>,
    <FaNodeJs key={4}/>
]

const rmtDescription = `Student review platform that focuses on aiding students finding the correct tutor for any subject the student is struggling on.
This hopefully aims to give students who are struggling a second chance at bringing themselves back from any bad grades. `

const flashDescription = `Utilizes OpenAi to help students create flashcards based off of topics the students inputs into a prompt.
This gives students a really neat study material for any extra practice as it allows them to store these flashcards into their account.`


const Projects = () => {
  return (
    <div className={styles.background}>
        {/* props: image, description, icons */}
        <div className={styles.projectsSection}>
            <h1 className={styles.projectsText}>
                Projects
                <p style={{color:"black", fontSize: "12px"}}>
                ----(With many more to come!)---
                </p>
            </h1>
            
            <Project 
            image={'/assets/RMTpreview.gif'} 
            description={rmtDescription}
            icons={rmtArray}
            github={<FaGithub />}
            link='https://github.com/aggie-coding-club/Rate-My-Tutor' />
            <Project 
            image={'../assets/flash.png'} 
            description={flashDescription}
            icons={rmtArray} 
            github={<FaGithub />} 
            link="https://github.com/Prunuus/ai-flashcards"/>
        </div>
    </div>
  )
}

export default Projects