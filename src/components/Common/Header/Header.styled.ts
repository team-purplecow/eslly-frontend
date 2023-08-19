import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 136px;
  padding: 0 48px;
  background: #9332e0;
  color: #fff;
`;

export const LogoBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 236px;
  height: 54px;
  margin-right: 96px;
  font-size: 46px;
  font-weight: bold;
`;

export const HeaderSearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 512px;
  height: 78px;
  border-radius: 60px;
  border: 1px solid var(--point-20, #d8a7ff);
  background: rgba(255, 255, 255, 0.15);
  cursor: text;
`;

export const HeaderSearchInput = styled.input`
  width: 240px;
  height: 100%;
  padding: 0;
  background-color: transparent;
  border: none;
  margin: 0;
  appearance: none;
  color: inherit;
  font-size: 22px;
  transition: width 0.2s;
  outline: none;

  :focus {
    width: calc(100% - 100px);
  }

  ::placeholder {
    color: inherit;
  }
`;

export const HeaderLogoutLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
  color: #fff;
  text-decoration: none;
`;
