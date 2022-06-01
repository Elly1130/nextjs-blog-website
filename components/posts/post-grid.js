import styled from 'styled-components';

import PostItem from './post-item';

const Grid = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
  align-content: center;
`;

export default function PostGrid(props) {
  const { posts } = props;

  return (
    <Grid>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </Grid>
  );
}
