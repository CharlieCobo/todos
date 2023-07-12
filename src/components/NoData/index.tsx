import { useTheme } from '@emotion/react';

import { Sad } from '../Icons';
import { NoDataWrapperStyled } from './styles';
import { H1 } from '../../styles';

export const NoData = () => {
  const theme = useTheme();

  return (
    <NoDataWrapperStyled>
      <Sad size={240} strokeColor={theme.colors.primary} />
      <H1>No Data</H1>
    </NoDataWrapperStyled>
  );
};
