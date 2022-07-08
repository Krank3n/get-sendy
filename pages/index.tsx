import React from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { InferGetStaticPropsType } from 'next';

import { query } from '.keystone/api';
import AiForm from "../components/AiForm/AiForm";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";

type Post = {
  id: string;
  title: string;
  slug: string;
};

export default function Home() {
  return (
      <div>
        <div className={styles.container}>
          <Head>
            <title>What excites you?</title>
            <meta name="description" content="Get Sendy" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <AiForm />
          </main>
          <Footer />
        </div>
      </div>
  );
}

// Here we use the Lists API to load all the post we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: 'id title slug' }) as Post[];
  return {
    props: {
      posts
    }
  };
}
