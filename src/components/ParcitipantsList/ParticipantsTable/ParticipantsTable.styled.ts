import styled from '@emotion/styled';
import { colorSet } from 'src/shared/color';

interface Props {
  backgroundColor?: string;
  textColor?: string;
}

export const TableContainer = styled.div`
  flex: 2;
  background-color: ${colorSet.black0};
  padding: 0.5em 1em;
  border-radius: 2em;
`;
export const TableTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 2em;
`;
export const TableBadge = styled.button<Props>`
  padding: 0.6em 1em;
  border: none;
  border-radius: 0.5em;
  font-size: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor || colorSet.point10};
  color: ${({ textColor }) => textColor || colorSet.point};
  cursor: pointer;

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor || colorSet.point20};
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 100px;
`;

export const TableTh = styled.th`
  font-size: 16px;
  text-align: left;
  color: ${colorSet.gray};
`;

export const UserTd = styled.td`
  font-weight: 600;
  font-size: 16px;
  padding: 1.4em 0 1.4em 0;
`;

export const LightTd = styled.td`
  font-weight: 300;
  font-size: 16px;
  color: ${colorSet.gray};
`;

export const FoodTd = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
`;

export const FoodText = styled.div`
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  margin-left: 0.5em;
  color: ${colorSet.gray};
`;

export const RowWithBorder = styled.tr`
  border-bottom: 1px solid ${colorSet.black10};
  border-width: 1px;
  &:hover {
    background-color: ${colorSet.black5};
  }
`;

export const TableBody = styled.tbody`
  border-top-width: 1px;
  border-bottom-width: 0px;
  border-color: rgb(229 231 235);
`;
