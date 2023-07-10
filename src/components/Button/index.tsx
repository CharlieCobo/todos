import { MouseEventHandler } from 'react';
import { ButtonStyled } from './styles';

export interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ label, onClick }: Props) => {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};
