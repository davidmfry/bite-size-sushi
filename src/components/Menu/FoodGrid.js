import styled from 'styled-components';

import { Title } from '../../styles/Title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;

  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Food = styled.div`
  height: 200px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  box-shadow: 0px 0px 2px 0px grey;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 11px 0px grey;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
  }
`;
