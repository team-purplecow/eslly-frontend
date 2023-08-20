import { Logout, Search } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import logo from 'src/assets/image/logo.png';
import {
  HeaderContainer,
  HeaderLogoutLink,
  HeaderSearchBox,
  HeaderSearchInput,
  LogoBox,
} from './Header.styled';

export const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
        <HeaderSearchInput
          ref={inputRef}
          placeholder='search the name of participant'
          // check if user press enter key
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              router.push(`/participants?name=${inputRef.current.value}`);
            }
          }}
        />
      </HeaderSearchBox>
      <HeaderLogoutLink href={'/logout'}>
        <SvgIcon component={Logout} sx={{ fontSize: 32 }} />
        Logout
      </HeaderLogoutLink>
    </HeaderContainer>
  );
};
