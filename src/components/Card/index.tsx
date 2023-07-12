import { ReactNode } from 'react';
import { CardStyled } from './styles';

interface Props {
  title: () => ReactNode;
}

export const Card = ({ title }: Props) => {
  return <CardStyled>{title()}</CardStyled>;
};
