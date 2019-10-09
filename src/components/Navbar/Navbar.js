import React from 'react';
import styled from 'styled-components';

import { sushiFishEgg } from '../../styles/colors';
import { Title } from '../../styles/Title';
import { APP_NAME } from '../../config/strings';
export default function Navbar() {
  return (
    <NavBarStyled>
      <Logo>{APP_NAME}</Logo>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  background-color: ${sushiFishEgg};
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
