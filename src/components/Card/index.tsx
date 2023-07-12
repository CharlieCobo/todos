import { ReactNode } from 'react';
import { CardStyled } from './styles';
import { P } from '../../styles';

interface Props {
  title: string;
  budge?: () => ReactNode;
}

export const Card = ({ budge, title }: Props) => {
  return (
    <CardStyled>
      <P>{title}</P>
    </CardStyled>
  );
};
