import styles from "./page.module.css"
import starStyles from "./stars.module.css"
import { Sacramento } from "next/font/google"
import { Montserrat } from "next/font/google"

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
        <h2 className={styles.subTitle}>
          Software Engineer & Engineering Manager
        </h2>
        <p>
          As a lifelong learner, I am always eager to embrace new challenges and
          technologies. I believe that the key to successful software
          engineering lies in staying curious and adaptable, keeping up with the
          latest trends while appreciating the timeless fundamentals.
        </p>
      </div>
    </main>
  )
}
