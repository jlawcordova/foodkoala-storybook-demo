import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import RestaurantCard from '../components/restaurant-card';

export default function Restaurant() {
  return (
    <div className={styles.container}>
      <Head>
        <title>foodkoala</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
            <a>
                <h1 className={styles.title}>
                <img className={styles.logo} src="/koala.png"></img>foodkoala
                </h1>
            </a>
        </Link>
        <h1 className="title">
          Restaurants
        </h1>

        <div className={styles.grid}>
          {/* <Link href="/restaurant">
            <a className={styles.card}>
              <h2>Restaurants &rarr;</h2>
              <p>Find the best restaurants in Davao.</p>
            </a>
          </Link> */}
          <RestaurantCard
            name="The Fat Cow"
            image="https://i0.wp.com/stage.thefatcowgroup.com/wp-content/uploads/2021/09/6-1.png?w=800&ssl=1"
            description="8-hour Spaghetti Bolognese, Black Truffle Pasta, Callos in Chorizo and Garlic">
          </RestaurantCard>

          <RestaurantCard
            name="Rekado Davao"
            image="https://farm5.staticflickr.com/4388/35678253654_99bcf5a032.jpg"
            description="For the Kadayawan menu, we are bringing in the classic Filipino dishes">
          </RestaurantCard>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
