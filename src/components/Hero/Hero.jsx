import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../../../public/assets/hero/heroImage.png'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I'm Ada  </h1>
            <p className={styles.description}>I'm a fullstack developer with 5 years of experience using React and NodeJS.
                 Reach out if you'd like to learn more!</p>
            <a href='mailto:kipletingedwin4@gmail.com' className={styles.contactBtn}>Contact Me</a>
            <img src={heroImage} alt='heroImage' className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    </section>
   
  )
}

export default Hero