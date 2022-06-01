import styled from 'styled-components';
import PostGrid from './post-grid';

const Posts = styled.section`
  width: 90%;
  max-width: 60rem;
  margin: ${(props) => props.theme.size8} auto;

  h1 {
    font-size: ${(props) => props.theme.size8};
    color: ${(props) => props.theme.colorGrey800};
    text-align: center;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.size16};
    }
  }
`;

export default function AllPosts(props) {
  return (
    <Posts>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </Posts>
  );
}
