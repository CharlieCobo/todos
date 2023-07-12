import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo, ITodoDB } from '../../interfaces';
import { convertTodoToApp } from '../../utils';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://softlife.fastgenapp.com',
  }),
  endpoints: builder => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => '/todos',
      transformResponse: (res: ITodoDB[]) => res.map(todo => convertTodoToApp(todo)),
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
