import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { Header } from 'src/components/Common/Header';
import { Container } from 'src/components/Common/Container';
import { globalStyles } from '../shared/styles';
import { Sidebar } from 'src/components/Common/Sidebar';

import 'normalize.css';

const cache = createCache({ key: 'next' });

const App = ({ Component, pageProps }) => {
  console.log(pageProps);
  return (
    <>
      <link
        rel='stylesheet'
        as='style'
        crossOrigin='true'
        href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
      />
      <CacheProvider value={cache}>
        {globalStyles}
        {(pageProps && pageProps.pathname) === '/register' ? (
          <Component {...pageProps} />
        ) : (
          <>
            <Header />
            <Container>
              <Sidebar />
              <Component {...pageProps} />
            </Container>
          </>
        )}
      </CacheProvider>
    </>
  );
};

export default App;
