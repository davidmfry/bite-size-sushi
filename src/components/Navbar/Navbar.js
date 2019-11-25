import React from 'react';
import styled from 'styled-components';

import { sushiFishEgg } from '../../styles/colors';
import { Title } from '../../styles/Title';
import { APP_NAME } from '../../config/strings';
export default function Navbar({ login, loggedIn, logout }) {
  return (
    <NavBarStyled>
      <Logo>{APP_NAME}</Logo>
      <UserStatus>
        {loggedIn !== 'Loading' ? (
          <>
            {loggedIn ? `Hello ${loggedIn.displayName}` : ''}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log Out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in / Sign up </LoginButton>
            )}
          </>
        ) : (
          'loading...'
        )}
      </UserStatus>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  background-color: ${sushiFishEgg};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;
