import React from 'react'
import styles from '../styles/projectCard.module.css'

const ProjectCard = (props) => {
  return (
    <div className={styles.card}> {/*the card itself*/}

        <div style={{props.image}} className={styles.image}>{/*image goes here*/}

        </div>

        <div className={styles.vl}/> {/*specifically for the vertical line*/}

        <div style={{prop.detail}} className={styles.detailContainer}v> {/*section for the description*/}
            <div className={styles.description}> {/*description goes here*/}

            </div>
            <div style={{prop.icons}} className={styles.icon}> {/*any sort of icon goes here*/}

            </div>
        </div>
    </div>
  )
}

export default ProjectCard