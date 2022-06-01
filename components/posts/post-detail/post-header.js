import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding-bottom: ${(props) => props.theme.size8};
  border-bottom: 8px solid ${(props) => props.theme.colorPrimary100};
  margin: ${(props) => props.theme.size4} 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: ${(props) => props.theme.size8};
    color: ${(props) => props.theme.colorPrimary500};
    margin: 0;
    line-height: initial;
    text-align: center;

    @media (min-width: 768px) {
      font-size: ${(props) => props.theme.size16};
      text-align: left;
    }
  }

  img {
    object-fit: cover;
    width: 200px;
    height: 120px;
  }

  @media (min-width: 768px) {
    margin: ${(props) => props.theme.size8} 0;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export default function PostHeader(props) {
  const { title, image } = props;

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150}></Image>
    </StyledHeader>
  );
}
