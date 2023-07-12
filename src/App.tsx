import withStyled from './HOC/withStyled';
import withGlobalState from './HOC/withGlobalState';

// import { Counter } from './components/Counter';
import { useGetTodosQuery } from './store/apis';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { NoData } from './components/NoData';
import { H1 } from './styles';
import { Card } from './components/Card';

function App() {
  const { data, isLoading, isError } = useGetTodosQuery();

  if (isError) return <p>Something is wrong</p>;
  return (
    <>
      <Navbar />
      <Main>
        {isLoading && <H1>Loading...</H1>}
        {!isLoading && !data?.length && <NoData />}

        {!!data?.length && data.map(todo => <Card key={todo.id} title={todo.description} />)}
        {/* <div>
          <Counter />
          {isLoading && <p>Loading...</p>}
          {data?.map?.(({ description, id, status }) => <p key={id}>{description}</p>)}
        </div>
        <div>
          <p>Hola</p>
        </div> */}
      </Main>
    </>
  );
}

export default withGlobalState(withStyled(App));
