import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAILED } from "./constants";
import {
  CREATE_TODO,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_FAILED
} from "./constants";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getTodosSaga(action) {
  try {
    const { data: payload } = yield axios.get(`http://localhost:3002/todos/`);
    yield put({
      type: GET_TODOS_SUCCESS,
      payload
    });
  } catch (e) {
    yield put({ type: GET_TODOS_FAILED });
  }
}

function* createTodo(action) {
  try {
    yield axios.post(`http://localhost:3002/todos`, action.params);
    yield getTodosSaga();
  } catch (e) {}
}

// watcher
function* actionWatcher() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(CREATE_TODO, createTodo);
}

// combine sagas
export default function* todosSaga() {
  yield all([actionWatcher()]);
}
