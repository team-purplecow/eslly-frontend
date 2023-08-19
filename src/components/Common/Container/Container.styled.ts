import styled from '@emotion/styled';

export const ContentsContainer = styled.div`
  display: flex;
  height: calc(100vh - 136px);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
