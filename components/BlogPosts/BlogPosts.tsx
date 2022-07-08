// pages/index.tsx

import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

import { query } from '.keystone/api';
import { Lists } from '.keystone/types';

type Post = {
    id: string;
    title: string;
    slug: string;
};

export default function BlogPosts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <main style={{ margin: '3rem' }}>
                <ul>
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