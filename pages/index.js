import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Features from './components/Features'
import Card from './components/Card'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ALAin Aja</title>
        <link rel="icon" href="/assets/logo.png" />

      </Head>
        <Navbar />
        <Header />
        <Features />
        <Card />
        <Testimonial />
        <Footer />
    </div>
  )
}