import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { Header } from 'src/components/Common/Header';
import { globalStyles } from '../shared/styles';

const cache = createCache({ key: 'next' });

const App = ({ Component, pageProps }) => (
  <>
    <link
      rel='stylesheet'
      as='style'
      crossOrigin='true'
      href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
    />
    <CacheProvider value={cache}>
      {globalStyles}
      <Header />
      <Component {...pageProps} />
    </CacheProvider>
  </>
);

export default App;
