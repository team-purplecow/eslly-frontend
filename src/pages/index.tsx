import { css } from '@emotion/react';
import { Header } from 'src/components/Common/Header';
import { Sidebar } from 'src/components/Common/Sidebar/Sidebar';

const Home = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <Header />
    <Sidebar>
      <div>대시보드 내용입니다.</div>
    </Sidebar>
  </div>
);

export default Home;
