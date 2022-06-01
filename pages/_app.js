import Head from 'next/head';
import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../components/global-style';
import { Theme } from '../components/global-style';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={Theme}>
        <Layout>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
