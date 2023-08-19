import { useEffect, useState } from 'react';
import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from './Sidebar.styled';
import SidebarItems from './SidebarItems';

export const Sidebar = ({ children }) => {
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
                Frest
              </SidebarBrand>
            </SidebarLogo>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </>
  );
};
