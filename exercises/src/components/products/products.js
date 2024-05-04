import { faker } from '@faker-js/faker';

export default new Array(20).fill('').map((_, index) => ({
  id: index + 1,
  name: faker.commerce.product(),
  price: faker.commerce.price({ min: 20, max: 500 }),
}));
