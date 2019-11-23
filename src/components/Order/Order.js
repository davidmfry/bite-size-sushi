import React from 'react';
import styled from 'styled-components';

import {
  DialogFooter,
  ConfirmButton,
  DialogContent
} from '../FoodDialog/FoodDialog';

import { formatPrice } from '../../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';
import { TAX } from '../../config/strings';

export default function Order({ orders, setOrders, setOpenFood }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * TAX;
  const total = subtotal + tax;

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your order is looking pretty empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={() => {
                  setOpenFood({ ...order, index });
                }}
              >
                <div>{order.quantity}</div>
                <div>{order.name}</div>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={e => {
                    e.stopPropagation();
                    deleteItem(index);
                  }}
                >
                  <span>🗑️</span>
                </div>
                <div>{formatPrice(getPrice(order))}</div>
              </OrderItem>

              {order.section === 'Sushi' && (
                <DetailItem>
                  {order.extras
                    .filter(extra => extra.checked)
                    .map(extra => extra.name)
                    .join(', ')}
                </DetailItem>
              )}
              {order.choice && <DetailItem>{order.choice}</DetailItem>}
            </OrderContainer>
          ))}
          <OrderContainer>
            <OrderItem>
              <div />
              <div>Sub-total</div>
              <div>{formatPrice(subtotal)}</div>
            </OrderItem>

            <OrderItem>
              <div />
              <div>Tax</div>
              <div>{formatPrice(tax)}</div>
            </OrderItem>

            <OrderItem>
              <div />
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </OrderItem>
          </OrderContainer>
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
  ${({ editable }) =>
    editable
      ? `&: hover {
    cursor: pointer;
    background-color: #e7e7e7
  }`
      : `
      pointer-events: none;
    `}
`;

const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 140px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`;
