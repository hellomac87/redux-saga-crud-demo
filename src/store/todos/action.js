import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  CREATE_TODO
} from "./constants";

export const getTodos = filter => {
  return {
    type: GET_TODOS,
    filter
  };
};

export const getTodosSuccess = payload => {
  return {
    type: GET_TODOS_SUCCESS,
    payload
  };
};

const getTodosFailed = payload => {
  return {
    type: GET_TODOS_FAILED
  };
};

export const createTodo = params => {
  return {
    type: CREATE_TODO,
    params
  };
};
