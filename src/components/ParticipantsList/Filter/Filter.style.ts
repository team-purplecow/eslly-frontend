import styled from '@emotion/styled';
import { colorSet } from 'src/shared/color';

export const FilterSelect = styled.select`
  height: 100%;
  border: none;
  border-radius: 0.5em;
  font-size: 16px;
  background-color: ${colorSet.black5};
  color: #7d7d7d;
  padding: 0.5em 0.5em;
  cursor: pointer;
  &:hover {
    background-color: #dbe4f3;
  }
`;
