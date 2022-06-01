import styled from 'styled-components';

const StyledLogo = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.size5};
  font-weight: bold;
  font-family: 'Oswald', sans-serif;
  color: ${(props) => props.theme.colorGrey50};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size8};
  }
`;

export default function Logo() {
  return <StyledLogo>Max's Next Blog</StyledLogo>;
}
