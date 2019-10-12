import React from 'react';
import styled from 'styled-components';

import { FoodLabel } from '../Menu/FoodGrid';
import { Title } from '../../styles/Title';
import { sushiFishEgg } from '../../styles/colors';
import { formatPrice } from '../../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { Extras } from './Extras';
import { Choices } from './Choices';

//Hooks
import { useQuantity } from '../../Hooks/useQuantity';
import { useExtras } from '../../Hooks/useExtras';
import { useChoice } from '../../Hooks/useChoice';

export function getPrice(order) {
  return order.quantity * order.price;
}

function hasExtras(food) {
  return food.section === 'Sushi';
}

function FoodDialogContainer({ openFood, setOpenFood, orders, setOrders }) {
  const quantity = useQuantity(openFood && openFood.quantity);
  const extras = useExtras(openFood.extras);
  const choiceRadio = useChoice(openFood.choice);
  function close() {
    setOpenFood();
  }

  if (!openFood) return null;

  const order = {
    ...openFood,
    quantity: quantity.value,
    extras: extras.extras,
    choice: choiceRadio.value
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
          {hasExtras(openFood) && (
            <>
              <h3>Do you want extras?</h3>
              <Extras {...extras} />
            </>
          )}

          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
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

  ${({ img }) => (img ? `background-image: url(${img})` : `min-height: 75px`)};
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? '100px' : '20px')};
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

  ${({ disabled }) =>
    disabled && `opactiy: .5; background-color: grey; pointer-events: none;`}
`;
