import Head from 'next/head';
import { Fragment } from 'react';

import FeaturedPost from '../components/home-page/featured-post';
import Hero from '../components/home-page/hero';
import { getFeaturedPost } from '../helpers/posts-util';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Elly's Blog</title>
        <meta
          name='description'
          content='I post about programming and web development'
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPost = getFeaturedPost();

  return {
    props: {
      posts: featuredPost,
    },
  };
}
