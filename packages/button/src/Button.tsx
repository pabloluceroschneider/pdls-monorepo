import React, { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
