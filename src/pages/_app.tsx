import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { Container } from 'src/components/Common/Container';
import { Header } from 'src/components/Common/Header';
import { Sidebar } from 'src/components/Common/Sidebar';
import { globalStyles } from '../shared/styles';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'normalize.css';

const cache = createCache({ key: 'next' });
const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <>
      <link
        rel='stylesheet'
        as='style'
        crossOrigin='true'
        href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
      />
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default App;
