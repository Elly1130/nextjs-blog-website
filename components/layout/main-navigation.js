import Link from 'next/link';
import styled from 'styled-components';

import Logo from './logo';

const Header = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colorGrey900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  ul {
    list-style: none;
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      gap: 0.5rem;
    }
  }

  li {
    margin: 0 ${(props) => props.theme.size4};
  }

  a {
    color: ${(props) => props.theme.colorGrey100};
    font-size: ${(props) => props.theme.size4};

    &:active,
    &:hover,
    .active {
      color: ${(props) => props.theme.colorGrey200};
    }

    @media (min-width: 768px) {
      font-size: var(--size-5);
    }
  }
`;

export default function MainNavigation() {
  return (
    <Header>
      <Link href={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
