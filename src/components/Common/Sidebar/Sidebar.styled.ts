import styled from '@emotion/styled';

interface Props {
  displaySidebar?: boolean;
}

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SidebarLogoWrapper = styled.div<Props>`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${({ displaySidebar }) => (displaySidebar ? 'space-between' : 'center')};
  align-items: center;

  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 468px) {
    display: none;
  }
`;

export const SidebarBrand = styled.span<Props>`
  display: ${({ displaySidebar }) => (displaySidebar ? 'block' : 'none')};
`;

export const SidebarToggler = styled.button<Props>`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? 'block' : 'none')};

  @media (max-width: 468px) {
    display: block;
  }
`;

// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background: #eaeced;
  }

  &.active {
    background-color: #dbe4f3;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #7c7788;
`;

export const ItemName = styled.span<Props>`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? '0.5rem' : '0')};
  display: ${({ displaySidebar }) => (displaySidebar ? 'block' : 'none')};
  text-transform: capitalize;
`;

// Sidebar Container
export const SidebarContainer = styled.div<Props>`
  width: 15rem;
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  justify-content: space-between;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;
  ${({ displaySidebar }) => displaySidebar && 'box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)'};

  ${SidebarLogoWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && 'space-between'};
  }

  ${SidebarBrand} {
    display: ${({ displaySidebar }) => !displaySidebar && 'block'};
  }

  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && 'flex-start'};
  }

  ${ItemName} {
    display: ${({ displaySidebar }) => !displaySidebar && 'block'};
    margin-left: ${({ displaySidebar }) => !displaySidebar && '0.5rem'};
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;

    &:hover {
      background: #d5e0f3;
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;
