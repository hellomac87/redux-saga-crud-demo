import {
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  CREATE_TODO_SUCCESS
} from "./constants";

const initialState = {
  data: [],
  byId: {},
  allIds: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default todos;
