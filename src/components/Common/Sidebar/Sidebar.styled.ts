import styled from '@emotion/styled';
import { colorSet } from 'src/shared/color';

export const SidebarContainer = styled.div`
  min-width: 332px;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

export const MenuContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
`;

export const MenuList = styled.ul`
  list-style-position: inside;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export const Menu = styled.li`
  padding-left: 1em;
  margin-block-start: 0;
  display: flex;
  gap: 1rem;
  cursor: pointer;
  align-items: center;
  * {
    transition: all 0.2s;
  }
  h3 {
    font-weight: 300;
    color: #7d7d7d;
    font-size: 24px;
  }
  svg {
    padding: 8px;
    background-color: ${colorSet.black10};
    border-radius: 10px;
    color: ${colorSet.black30};
    font-size: 2.08333333rem;
    transition: background-color 0.2s;
  }
  &.active {
    h3 {
      font-weight: bold;
      color: #000000;
    }
    background-color: #dbe4f3;
    svg {
      background-color: ${colorSet.point};
      color: ${colorSet.black0};
    }
  }
`;
