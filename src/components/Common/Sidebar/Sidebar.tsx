import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Menu, MenuContainer, MenuList, SidebarContainer } from './Sidebar.styled';

const menuList = [
  { name: 'Dash Board', id: 0, icon: <SpeedIcon />, path: '/' },
  { name: 'Participant', id: 1, icon: <PermIdentityIcon />, path: '/participants' },
  { name: 'Setting', id: 2, icon: <SettingsOutlinedIcon />, path: '/settings' },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.push(menuList[activeItem].path);
  }, [activeItem]);

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
