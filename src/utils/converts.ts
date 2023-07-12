import { ITodo, ITodoDB } from '../interfaces';

export const convertTodoToApp = (todo: ITodoDB): ITodo => ({
  description: todo.description,
  id: todo.system_id,
  status: todo.status,
});
