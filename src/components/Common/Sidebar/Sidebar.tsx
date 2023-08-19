import { useState } from 'react';
import { MenuContainer, MenuList, Menu, SidebarContainer } from './Sidebar.styled';

const menuList = [
  { name: 'dashboard', id: 0 },
  { name: 'user list', id: 1 },
  { name: 'setting', id: 2 },
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
              <h3>{menu.name}</h3>
            </Menu>
          ))}
        </MenuList>
      </MenuContainer>
    </SidebarContainer>
  );
};
