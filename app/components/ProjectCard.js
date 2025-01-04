import React from 'react'
import styles from '@styles/ProjectCard.module.css';

const ProjectCard = (props) => {
    // console.log(props.children)
  return (
    <div className={styles.card}> {/*the card itself*/}
        <div className={styles.catears} />
        {console.log(props.image)}
        <div style={{backgroundImage: `url(${props.image})`}} className={styles.image}/>{/*image goes here*/}

        <div className={styles.vl}/> {/*specifically for the vertical line*/}

        <div className={styles.detailContainer}> {/*section for the description*/}
            <div className={styles.description}> {/*description goes here*/}
                <p>{props.description}</p>
            </div>
            <div className={styles.icons}> {/*any sort of icon goes here*/}
                <div className={styles.stack}>
                    {props.icons}
                    {/* {props.icons[0]} */}
                    {/* {console.log(props.icons[0])} */}
                    {/* {console.log(props.icons)} */}
                </div>
                <div className={styles.github}>
                    <a href={props.link}><button className={styles.githubButton}>{props.github}</button></a>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default ProjectCard