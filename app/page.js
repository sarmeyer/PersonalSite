import Image from "next/image"
import styles from "./page.module.css"
import starStyles from "./stars.module.css"
import { Sacramento } from "next/font/google"
import { Montserrat } from "next/font/google"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className={starStyles.main}>
      <div className={starStyles.stars}></div>
      <div className={starStyles.stars2}></div>
      <div className={starStyles.stars3}></div>
      <div className={`${montserrat.className} ${styles.main}`}>
        <div className={styles.heading}>Hello World,</div>
        <h1 className={sacramento.className}>I'm Sarah Egan</h1>
        <h2 className={styles.spacing}>
          Software Engineer & Engineering Manager
        </h2>
        <p className={styles.spacing}>
          As a lifelong learner, I am always eager to embrace new challenges and
          technologies. I believe that the key to successful software
          engineering lies in staying curious and adaptable, keeping up with the
          latest trends while appreciating the timeless fundamentals.
        </p>
        <p className={styles.spacing}>
          At Formidable, I am able to use my expertise to help clients in
          various industries solve complex problems and create innovative
          solutions. In my role as an engineering manager, I strive to help my
          team grow and achieve their goals, while keeping clients happy and
          projects on track.
        </p>
        <h3 className={styles.spacing}>Let's connect!</h3>
        <div className={styles.social}>
          <a href="https://github.com/sarmeyer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/sarmeyer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/sarmeyer">
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </div>
    </main>
  )
}
