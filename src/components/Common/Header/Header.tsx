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
import Image from 'next/image';
import logo from 'src/assets/image/logo.png';

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <HeaderContainer>
      <LogoBox>
        <Image
          src={logo}
          alt='메인 배경 이미지'
          layout='fill'
          objectFit='contain'
          objectPosition='center'
        />
      </LogoBox>
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
