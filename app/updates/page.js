import Navbar from '@/app/components/Navbar'
import Reveal from '@/app/components/Reveal'
import React from 'react'
import { Aoboshi_One } from "next/font/google";
import { FaBriefcase, FaGraduationCap, FaUsers, FaCode, FaGithub } from "react-icons/fa";
import styles from '@/app/styles/updates.module.css'
import { updates, skills } from './updates'

const aoboshi = Aoboshi_One({
  subsets: ['latin'],
  weight: ['400']
})

// add a new kind of entry here (icon on the timeline + label on the card)
const kinds = {
  work: { icon: FaBriefcase, label: "Work" },
  school: { icon: FaGraduationCap, label: "School" },
  club: { icon: FaUsers, label: "Club" },
  project: { icon: FaCode, label: "Project" },
}

const years = [...new Set(updates.map(u => u.year))].sort((a, b) => b - a);

export const metadata = {
  title: "Updates | Kevin's Cardboard Box",
}

export default function Updates() {
  return (
    <div className={aoboshi.className}>
      <Navbar />
      <Reveal />
      <main className={styles.page}>
        <h1 className={styles.title}>Updates</h1>
        <p className={styles.subtitle}>----(With many more to come!)---</p>

        <nav className={styles.yearNav}>
          {years.map(year => <a key={year} href={`#y${year}`}>{year}</a>)}
          <a href="#skills">Skills</a>
        </nav>

        {years.map(year => (
          <section key={year} id={`y${year}`} className={styles.year}>
            <h2 className={styles.yearHeading}>{year}</h2>
            <ol className={styles.timeline}>
              {updates.filter(u => u.year === year).map(u => {
                const Kind = kinds[u.kind].icon;
                return (
                  <li key={u.title + u.date} className={styles.entry} data-reveal="">
                    <span className={styles.dot}><Kind /></span>
                    <article className={styles.card}>
                      <header className={styles.cardHeader}>
                        <div>
                          <span className={styles.kind}>{kinds[u.kind].label}</span>
                          <h3>{u.title}</h3>
                          {u.org && <p className={styles.org}>{u.org}</p>}
                        </div>
                        {u.date && <p className={styles.date}>{u.date}</p>}
                      </header>
                      {u.image && <img className={styles.image} src={u.image} alt={u.title} />}
                      {u.points && (
                        <ul className={styles.points}>
                          {u.points.map(p => <li key={p}>{p}</li>)}
                        </ul>
                      )}
                      {(u.stack || u.link) && (
                        <footer className={styles.cardFooter}>
                          <div className={styles.stack}>
                            {u.stack?.map((Icon, i) => <Icon key={i} />)}
                          </div>
                          {u.link && (
                            <a href={u.link} target="_blank" rel="noopener noreferrer" aria-label={`${u.title} on GitHub`}>
                              <FaGithub />
                            </a>
                          )}
                        </footer>
                      )}
                    </article>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}

        <section id="skills" className={styles.year}>
          <h2 className={styles.yearHeading}>Skills</h2>
          {Object.entries(skills).map(([group, list]) => (
            <div key={group} className={styles.skillGroup}>
              <h3>{group}</h3>
              <ul className={styles.chips}>
                {list.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
