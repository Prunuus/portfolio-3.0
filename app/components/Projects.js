import React from 'react'
import styles from '../styles/projects.module.css'
import Project from './ProjectCard'

const Projects = () => {
  return (
    <div className={styles.background}>
        <h1 className={styles.projectsText}>
            Projects
        </h1>
        <Project/>
    </div>
  )
}

export default Projects