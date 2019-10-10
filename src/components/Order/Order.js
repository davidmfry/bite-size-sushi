import React from 'react';
import styled from 'styled-components';

import {
  DialogFooter,
  ConfirmButton,
  DialogContent
} from '../FoodDialog/FoodDialog';

import { formatPrice } from '../../Data/FoodData';

export default function Order({ orders }) {
  console.log(orders);
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is looking pretty empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div />
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}

      <DialogFooter>
        <ConfirmButton>Checkout</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 50px;
  width: 340px;
  height: calc(100% - 48px);
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
`;

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`;

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 140px 20px 60px;
  justify-content: space-between;
`;