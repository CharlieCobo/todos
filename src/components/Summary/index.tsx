import { useMemo } from 'react';
import { todosApi } from '../../store/apis';

import { SummaryStyled } from './styles';
import { P } from '../../styles';

export const Summary = () => {
  const data = todosApi.endpoints.getTodos.useQuery().data;

  const total = useMemo(() => data?.length ?? 0, [data]);

  const close = useMemo(() => data?.filter(({ status }) => status).length ?? 0, [data]);

  const open = useMemo(() => data?.filter(({ status }) => !status).length ?? 0, [data]);

  return (
    <SummaryStyled>
      <P>Total: {total}</P>
      <P>Close: {close}</P>
      <P>Open: {open}</P>
    </SummaryStyled>
  );
};
