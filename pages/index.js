import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HakyCodes!</title>
        <meta name="description" content="Software Engineer and Freelancer, Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
