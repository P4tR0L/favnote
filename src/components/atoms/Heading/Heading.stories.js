import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading',
};

export const Normal = () => <Heading>Hello Moto</Heading>;
export const Big = () => <Heading big>Hello Moto</Heading>;
