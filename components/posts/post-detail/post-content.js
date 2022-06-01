import styled from 'styled-components';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

import PostHeader from './post-header';

const Content = styled.article`
  width: 95%;
  max-width: 60rem;
  margin: ${(props) => props.theme.size8} auto;
  font-size: ${(props) => props.theme.size5};
  line-height: ${(props) => props.theme.size8};
  background-color: ${(props) => props.theme.colorGrey100};
  border-radius: 6px;
  padding: ${(props) => props.theme.size4};

  p {
    color: ${(props) => props.theme.colorGrey800};
  }

  @media (min-width: 768px) {
    padding: ${(props) => props.theme.size8};
  }
`;

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     ></Image>
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className='image'>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <Content>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </Content>
  );
}
