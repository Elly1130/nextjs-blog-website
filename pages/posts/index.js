import { Fragment } from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPost } from '../../helpers/posts-util';

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts.'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPost();

  return {
    props: {
      posts: allPosts,
    },
  };
}
