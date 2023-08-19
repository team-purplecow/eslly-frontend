import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        min-height: 100%;
        font-family: Pretendard Variable;
        font-size: 24px;
      }
    `}
  />
);
