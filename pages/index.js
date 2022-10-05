import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Notifications</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script rel="stylesheet" src="https://kit.fontawesome.com/7bb0928ba7.js" crossorigin="anonymous"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.flex_container}>
          
        </div>
      </main>

    </div>
  )
}
