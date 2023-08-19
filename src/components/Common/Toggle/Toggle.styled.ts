import styled from '@emotion/styled';
import { colorSet } from 'src/shared/color';

export const ToggleContainer = styled.div`
  display: flex;
  background-color: ${colorSet.black05};
  border-radius: 12px;
  color: ${colorSet.black30};
  cursor: pointer;

  > div {
    font-size: 16px;
    font-weight: 400;
    padding: 8px 12px;
    border-radius: 12px;
    transition: background-color 0.2s;
    user-select: none;

    &.on {
      background-color: ${colorSet.point10};
      color: ${colorSet.point};
    }
  }
`;
