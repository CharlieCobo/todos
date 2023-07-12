import { useEffect } from 'react';

import withStyled from './HOC/withStyled';
import withGlobalState from './HOC/withGlobalState';

import { Counter } from './components/Counter';
import { useGetTodosQuery } from './store/apis';

function App() {
  const { data, isLoading, isError } = useGetTodosQuery();

  if (isError) return <p>Something is wrong</p>;
  return (
    <>
      <Counter />
      {isLoading && <p>Loading...</p>}
      {data?.map?.(({ description, id, status }) => <p key={id}>{description}</p>)}
    </>
  );
}

export default withGlobalState(withStyled(App));
