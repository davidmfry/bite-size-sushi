import React from 'react';
import styled from 'styled-components';

import { foods } from '../../Data/FoodData';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { formatPrice } from '../../Data/FoodData';

export default function Menu({ setOpenFood }) {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map(food => (
              <Food
                key={`${food.name}`}
                img={food.img}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;
