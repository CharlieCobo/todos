import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../../interfaces';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://softlife.fastgenapp.com',
  }),
  endpoints: builder => ({
    getTodos: builder.query<ITodo[], void>({
      query: () => '/todos',
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
