import React from 'react';
import styled from 'styled-components';

import { FoodLabel } from '../Menu/FoodGrid';
import { Title } from '../../styles/Title';
import { sushiFishEgg } from '../../styles/colors';
import { formatPrice } from '../../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { Extras } from './Extras';

//Hooks
import { useQuantity } from '../../Hooks/useQuantity';
import { useExtras } from '../../Hooks/useExtras';

export function getPrice(order) {
  return order.quantity * order.price;
}

function FoodDialogContainer({ openFood, setOpenFood, orders, setOrders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const extras = useExtras(openFood.extras);

  function close() {
    setOpenFood();
  }

  if (!openFood) return null;

  const order = {
    ...openFood,
    quantity: quantity.value,
    extras: extras.extras
  };

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  return openFood ? (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          <h3>Do you want extras?</h3>
          <Extras {...extras} />
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            Add To Order: {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  ) : null;
}

export default function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;

  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  letter-spacing: 1px;
  width: 200px;
  cursor: pointer;
  background-color: ${sushiFishEgg};
`;
