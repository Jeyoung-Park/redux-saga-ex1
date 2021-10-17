import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import posts, { postsSaga } from "./posts";

const rootReducer = combineReducers({ counter, posts });
export function* rootSaga() {
  // all은 배열 안의 여러 사가를 동시에 실행
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;
