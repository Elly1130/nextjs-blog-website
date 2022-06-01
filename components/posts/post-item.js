import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Post = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.colorGrey800};
  text-align: center;

  a {
    color: ${(props) => props.theme.colorGrey100};
  }
`;

const StyledImage = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: ${(props) => props.theme.size4};

  h3 {
    margin: ${(props) => props.theme.size2} 0;
    font-size: ${(props) => props.theme.size6};
  }

  time {
    font-style: italic;
    color: ${(props) => props.theme.colorGrey300};
  }

  p {
    line-height: ${(props) => props.theme.size6};
  }
`;

export default function PostItem(props) {
  const { image, title, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleString('en-US', {
    date: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <Post>
      <Link href={`/posts/${slug}`}>
        <a>
          <StyledImage>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            ></Image>
          </StyledImage>
          <Content>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </Content>
        </a>
      </Link>
    </Post>
  );
}
