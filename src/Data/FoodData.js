export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export const foodItems = [
  {
    name: 'Avacodo Roll',
    img: '/img/avacodo-roll.jpg',
    section: 'Sushi',
    price: 5
  },
  {
    name: 'Chef Special',
    img: '/img/chef-special.jpg',
    section: 'Sushi',
    price: 15
  },
  {
    name: 'Crunchy Roll',
    img: '/img/cruchy-roll.jpg',
    section: 'Sushi',
    price: 8
  },
  {
    name: 'Hand Roll',
    img: '/img/hand-rolls.jpg',
    section: 'Sushi',
    price: 3
  },
  {
    name: 'Spring Roll',
    img: '/img/spring-roll.jpg',
    section: 'Sushi',
    price: 6
  },
  {
    name: 'Sushi Bowl',
    img: '/img/suhi-bowl.jpg',
    section: 'Sushi',
    price: 10.5
  },
  {
    name: 'Tuna Roll',
    img: '/img/tuna-roll.jpg',
    section: 'Sushi',
    price: 12
  },
  {
    price: 1,
    name: 'Soda',
    section: 'Drinks',
    choices: ['Coke', 'Sprite', 'Root Beer']
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
