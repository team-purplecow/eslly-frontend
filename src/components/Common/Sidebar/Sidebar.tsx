import { MenuContainer, MenuList, Menu, SidebarContainer } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <MenuContainer>
        <MenuList>
          <Menu>
            <h3>Dashboard</h3>
          </Menu>
          <Menu>
            <h3>Projects</h3>
          </Menu>
          <Menu>
            <h3>Invoices</h3>
          </Menu>
          <Menu>
            <h3>Reports</h3>
          </Menu>
        </MenuList>
      </MenuContainer>
    </SidebarContainer>
  );
};
