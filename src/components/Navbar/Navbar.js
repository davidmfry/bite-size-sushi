import React from 'react';
import styled from 'styled-components';

import { sushiFishEgg } from '../../styled/colors';
import { Title } from '../../styled/Title';
import { APP_NAME } from '../../config/strings';
export default function Navbar() {
  return (
    <NavBarStyled>
      Hello NavBar
      <Logo>${APP_NAME}</Logo>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  background-color: ${sushiFishEgg};
  padding: 10px;
`;

const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;
