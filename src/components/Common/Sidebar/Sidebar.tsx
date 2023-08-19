import { useState } from 'react';
import { MenuContainer, MenuList, Menu, SidebarContainer } from './Sidebar.styled';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const menuList = [
  { name: 'dashboard', id: 0, icon: <DashboardIcon /> },
  { name: 'user list', id: 1, icon: <PermIdentityIcon /> },
  { name: 'setting', id: 2, icon: <SettingsOutlinedIcon /> },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <SidebarContainer>
      <MenuContainer>
        <MenuList>
          {menuList.map((menu) => (
            <Menu
              key={menu.id}
              onClick={() => setActiveItem(() => menu.id)}
              className={menu.id === activeItem ? 'active' : ''}
            >
              {menu.icon}
              <h3>{menu.name}</h3>
            </Menu>
          ))}
        </MenuList>
      </MenuContainer>
    </SidebarContainer>
  );
};
