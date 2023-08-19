import { Logout, Search } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import { useRef } from 'react';
import {
  HeaderContainer,
  HeaderLogoutLink,
  HeaderSearchBox,
  HeaderSearchInput,
  LogoBox,
} from './Header.styled';

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <HeaderContainer>
      <LogoBox>ESLLY</LogoBox>
      <HeaderSearchBox
        onClick={() => {
          inputRef.current.focus();
          inputRef.current.select();
        }}
      >
        <SvgIcon component={Search} sx={{ fontSize: 32 }} />
        <HeaderSearchInput ref={inputRef} placeholder='search the name of participant' />
      </HeaderSearchBox>
      <HeaderLogoutLink href={'/logout'}>
        <SvgIcon component={Logout} sx={{ fontSize: 32 }} />
        Logout
      </HeaderLogoutLink>
    </HeaderContainer>
  );
};
