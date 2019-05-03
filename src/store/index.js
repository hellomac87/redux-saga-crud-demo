import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import createSaga from "redux-saga";
import { all } from "redux-saga/effects";

// sagas
import todosSaga from "./todos/saga";

// reducers
import todos from "./todos/reducer";

const rootReducer = combineReducers({
  todos
});

function* rootSaga() {
  yield all([todosSaga()]);
}

const sagaMiddleware = createSaga();

const configureStore = () => {
  const middlewares = [sagaMiddleware];

  // logger, works only in development environments
  if (process.env.NODE_ENV !== "production") {
    middlewares.push();
  }

  // redux devtool
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
