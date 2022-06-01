import styled from 'styled-components';
import PostGrid from '../posts/post-grid';

const Latest = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: ${(props) => props.theme.size8} auto;

  h2 {
    font-size: ${(props) => props.theme.size8};
    color: ${(props) => props.theme.greyColor800};
    text-align: center;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.size16};
    }
  }
`;

export default function FeaturedPost(props) {
  return (
    <Latest>
      <h2>Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </Latest>
  );
}
