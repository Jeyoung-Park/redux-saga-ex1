import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";

const rootReducer = combineReducers({ counter });
export function* rootSaga() {
  yield all([counterSaga()]); // all은 배열 안의 여러 사가를 동시에 실행
}

export default rootReducer;