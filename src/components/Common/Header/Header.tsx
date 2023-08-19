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
        <HeaderSearchInput ref={inputRef} placeholder='참여자 이름을 검색해주세요' />
      </HeaderSearchBox>
      <HeaderLogoutLink href={'/logout'}>
        <SvgIcon component={Logout} sx={{ fontSize: 32 }} />
        Logout
      </HeaderLogoutLink>
    </HeaderContainer>
  );
};
