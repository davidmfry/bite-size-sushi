export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export const foods = [
  {
    name: 'Avacodo Roll',
    img: '/img/avacodo-roll.jpg',
    price: 5
  },
  {
    name: 'Chef Special',
    img: '/img/chef-special.jpg',
    price: 15
  },
  {
    name: 'Crunchy Roll',
    img: '/img/cruchy-roll.jpg',
    price: 8
  },
  {
    name: 'Hand Roll',
    img: '/img/hand-rolls.jpg',
    price: 3
  },
  {
    name: 'Spring Roll',
    img: '/img/spring-roll.jpg',
    price: 6
  },
  {
    name: 'Sushi Bowl',
    img: '/img/suhi-bowl.jpg',
    price: 10.5
  },
  {
    name: 'Tuna Roll',
    img: '/img/tuna-roll.jpg',
    price: 12
  }
];
