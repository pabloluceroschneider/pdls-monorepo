import { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({ label, onClick, children }) => {
  return <button onClick={onClick}>{label || children}</button>;
};
