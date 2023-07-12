import { useTheme } from '@emotion/react';
import { useGetTodosQuery } from '../../store/apis';
import { Navbar } from '../../components/Navbar';
import { Main } from '../../components/Main';
import { H1, P } from '../../styles';
import { NoData } from '../../components/NoData';
import { Card } from '../../components/Card';
import { Check, Circle } from '../../components/Icons';
import { Box } from './styles';
import { Summary } from '../../components/Summary';

const Dashboard = () => {
  const { data, isLoading, isError } = useGetTodosQuery();
  const theme = useTheme();

  if (isError) return <p>Something is wrong</p>;
  return (
    <>
      <Navbar />
      <Main>
        <Summary />
        {isLoading && <H1>Loading...</H1>}
        {!isLoading && !data?.length && <NoData />}

        {!!data?.length &&
          data.map(todo => (
            <Card
              key={todo.id}
              title={() => (
                <Box>
                  {todo.status ? (
                    <Check strokeColor={theme.colors.primary} />
                  ) : (
                    <Circle strokeColor={theme.colors.primary} />
                  )}
                  <P done={todo.status}>{todo.description}</P>
                </Box>
              )}
            />
          ))}
      </Main>
    </>
  );
};

export default Dashboard;
