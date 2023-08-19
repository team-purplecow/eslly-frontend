import styled from '@emotion/styled';
import { CSSProperties } from 'react';
import { colorSet } from 'src/shared/color';

export const DashboardContainer = styled.main`
  display: flex;
  width: 100%;
  padding: 48px;
  background-color: #f1f2f4;
`;

export const DashboardSection = styled.section<{
  direction?: CSSProperties['flexDirection'];
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  gap: 24px;
`;

export const DashboardBlock = styled.article<{
  width?: `${string}px`;
  height?: `${string}px`;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: 40px;
  padding: 24px 40px;
  background: ${colorSet.black0};
  border: 1px solid ${colorSet.black10};

  h2 {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0;
    font-size: 26px;

    > small {
      color: ${colorSet.black90};
      font-size: 16px;
      font-weight: normal;
      opacity: 0.4;
    }
  }
`;

export const DashboardPositionNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  text-align: center;

  small {
    opacity: 0.5;
    color: ${colorSet.black90};
    font-size: 20px;
  }

  strong {
    font-size: 42px;
  }
`;
