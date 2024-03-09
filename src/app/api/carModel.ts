import Image from 'next/image';

import m1 from './car-images/1.jpeg';
import m2 from './car-images/2.jpeg';
import m3 from './car-images/3.jpeg';
import m4 from './car-images/4.jpeg';

export const cars = [
  {
    url: m1,
    id: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  { url: m2, id: '2', description: 'Lorem ipsum dolor sit amet, consectetur' },
  { url: m3, id: '3', description: 'Lorem ipsum dolor sit amet, consectetur' },
  { url: m4, id: '4', description: 'Lorem ipsum dolor sit amet, consectetur' },
  { url: m3, id: '5', description: 'Lorem ipsum dolor sit amet, consectetur' },
  { url: m4, id: '6', description: 'Lorem ipsum dolor sit amet, consectetur' },
];

export const getCars = async () => {
  return cars.map((el) => el);
};

export const getCar = async (id: string) => {
  return cars.find((car) => car.id == id);
};
