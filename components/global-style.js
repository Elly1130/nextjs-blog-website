import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: ${(props) => props.theme.colorGrey500};
  color: #252525;
  font-family: 'Roboto', sans-serif;
}

h1,
h2,
h3 {
  font-family: 'Oswald', 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}
`;

export const Theme = {
  colorGrey50: 'hsl(265, 55%, %)',
  colorGrey100: 'hsl(265, 19%, 88%)',
  colorGrey200: 'hsl(265, 7%, 70%)',
  colorGrey300: 'hsl(265, 6%, 66%)',
  colorGrey400: 'hsl(265, 4%, 57%)',
  colorGrey500: 'hsl(265, 3%, 53%)',
  colorGrey600: 'hsl(265, 4%, 42%)',
  colorGrey700: 'hsl(265, 4%, 31%)',
  colorGrey800: 'hsl(276, 5%, 20%)',
  colorGrey900: 'hsl(280, 5%, 13%)',

  colorPrimary50: '#c8b3ce',
  colorPrimary100: ' #a07aaa',
  colorPrimary200: ' #884c97',
  colorPrimary300: ' #843897',
  colorPrimary400: ' #732392',
  colorPrimary500: ' #5a097a',
  colorPrimary600: ' #480264',
  colorPrimary700: ' #3d0264',

  colorSuccess100: '#a2f0bc',
  colorSuccess500: '#12bd4b',

  colorError100: '#f1acc9',
  colorError500: '#a10c4a',

  size1: '0.25rem',
  size2: '0.5rem',
  size3: '0.75rem',
  size4: '1rem',
  size5: '1.25rem',
  size6: '1.5rem',
  size8: '2rem',
  size16: '4rem',
  size20: '5rem',
  size40: '10rem',
};

export default GlobalStyle;
