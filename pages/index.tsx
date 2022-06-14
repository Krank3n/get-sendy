import React from 'react';
import {
  CImage,
} from '@coreui/react';

import Head from 'next/head';
import HeroForm from '../components/HeroForm';
import styles from '../styles/Home.module.scss';
import BlogPosts from '../components/BlogPosts';

import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

type Post = {
  id: string;
  title: string;
  slug: string;
};

// Home receives a `post` prop from `getStaticProps` below
export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <div>
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
        <main style={{ margin: '3rem' }}>

          <h1>Hello World! 👋🏻 </h1>
          <ul>
            {/* Render each post with a link to the content page */}
            {posts.map(post => (
                <li key={post.id}>
                  <Link href={`/post/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </li>
            ))}
          </ul>
        </main>
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
