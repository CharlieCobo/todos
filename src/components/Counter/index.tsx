import { todosApi } from '../../store/apis';

export const Counter = () => {
  const data = todosApi.endpoints.getTodos.useQuery().data;
  console.log({ data });
  return (
    <>
      <p>{data?.length || 0}</p>
    </>
  );
};
