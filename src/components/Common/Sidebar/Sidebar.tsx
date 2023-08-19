import { useEffect, useState } from 'react';
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
} from './Sidebar.styled';
import SidebarItems from './SidebarItems';

export const Sidebar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  return (
    <>
      <SidebarContainer displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href='#'>
              <span className='app-brand-logo demo'>
                {/* <img src={BrandLogo} alt='Brand logo' /> */}
              </span>
              <SidebarBrand displaySidebar={displaySidebar} className='app__brand__text'>
                Logo
              </SidebarBrand>
            </SidebarLogo>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
