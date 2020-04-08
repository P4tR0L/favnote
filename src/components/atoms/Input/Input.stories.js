import React from 'react';
import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
};

export const Normal = () => <Input placeholder="input" />;
export const Search = () => <Input search placeholder="search" />;
