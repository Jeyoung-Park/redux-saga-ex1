import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// 액션 생성 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// saga 함수 -> 제네레이터 함수
function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // put: 특정 액션 디스패치
}

function* deceraseSaga(){
    yield delay(1000);
    yield put(decrease()); 
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, deceraseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만 처리
}

// 초기값
const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
