import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: 20%;
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
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export const Menu = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
    color: #000000;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;
