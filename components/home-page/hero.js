import Image from 'next/image';
import styled from 'styled-components';

const StyledHero = styled.section`
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colorGrey900},
    ${(props) => props.theme.colorGrey800}
  );
  padding: ${(props) => props.theme.size8} 0;

  h1 {
    font-size: ${(props) => props.theme.size16};
    margin: ${(props) => props.theme.size4} 0;
    color: ${(props) => props.theme.colorGrey300};
  }

  p {
    font-size: ${(props) => props.theme.size6};
    color: ${(props) => props.theme.colorGrey200};
    width: 90%;
    max-width: 40rem;
    margin: auto;
  }
`;

const StyledImage = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colorGrey700};
  margin: auto;

  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <StyledImage>
        <Image
          src={'/images/site/max.png'}
          alt={'An image showing Max'}
          width={300}
          height={300}
        />
      </StyledImage>
      <h1>Hi, I'm Elly</h1>
      <p>Hello</p>
    </StyledHero>
  );
}
