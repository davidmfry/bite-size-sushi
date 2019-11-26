import React, { useState } from 'react';

import { GlobalStyle } from './styles/GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import FoodDialog from './components/FoodDialog/FoodDialog';
import Order from './components/Order/Order';
import { OrderDialog } from './components/Order/OrderDialog';

// Hooks
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { useAuthentication } from './Hooks/useAuthentication';
import { useOrderDialog } from './Hooks/useOrderDialog';

// adding database

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({ ...openFood, ...orders });

  return (
    <>
      <GlobalStyle />
      <OrderDialog {...orderDialog} {...orders} />
      <FoodDialog {...openFood} {...orders} />
      <Navbar {...auth} />
      <Order {...orders} {...openFood} {...auth} {...orderDialog} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
