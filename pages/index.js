import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './pages/Home/Header/Header'
import Navbar from './pages/Home/Navbar/Navbar'

export default function Home() {
  return (
    <div className={styles._wrapper}>
      <Head>
        <title>Folioedge - Demo Panel</title>
        <meta name="description" content="Folioedge is a personal portfolio website wordpress theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Header />
      </main>
    </div>
  )
}
