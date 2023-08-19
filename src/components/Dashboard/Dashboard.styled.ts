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

export const DashboardBox = styled.article<{
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

export const DashboardBoothBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px 29px;
  background-color: ${colorSet.black05};
  border-radius: 20px;

  > h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    color: ${colorSet.black60};
    font-size: 22px;
    font-weight: 500;
  }

  > strong {
    font-size: 30px;
  }
`;

export const DashboardDoughnutDtBlock = styled.dt<{
  backgroundColor: CSSProperties['backgroundColor'];
}>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  color: ${colorSet.black70};

  ::before {
    content: '';
    display: flex;
    width: 14px;
    height: 14px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 12px;
  }
`;
