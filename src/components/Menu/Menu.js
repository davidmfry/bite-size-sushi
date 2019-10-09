import React from 'react';
import styled from 'styled-components';

import { foods } from '../../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

export default function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <FoodGrid>
        {foods.map(food => (
          <Food
            img={food.img}
            onClick={() => {
              setOpenFood(food);
            }}
          >
            <FoodLabel>{food.name}</FoodLabel>
          </Food>
        ))}
      </FoodGrid>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;
