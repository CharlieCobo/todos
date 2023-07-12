import { ReactNode } from 'react';
import { MainStyled } from './styles';

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return <MainStyled>{children}</MainStyled>;
};
