import Head from 'next/head';
import React from 'react';
import {
  CImage,
} from '@coreui/react';
import styles from '../styles/Home.module.scss';
import HeroForm from '../components/HeroForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get Sendy</title>
        <meta name="description" content="Get Sendy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="d-flex flex-row-reverse m-5">
          <CImage className={styles.hero} src="/SkiierUpsideDown.svg" />
          <h2 className={styles.title}>
            <span className="small">Be Accountable &</span>
            <br />
            <span>Get that back flip!</span>
          </h2>
        </div>
        <div className="align-items-center">
          <HeroForm />
        </div>

      </main>

      <footer className={styles.footer}>
        <p>
          Copyright
          {' '}
          <span>
            Get Sendy
          </span>
        </p>
      </footer>
    </div>
  );
}
