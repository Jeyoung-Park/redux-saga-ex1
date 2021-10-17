import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const customHistory = createBrowserHistory();
// 사가 미들웨어를 만듦
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

// index.js에 axios의 글로벌 baseURL을 설정
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://api.velog.io/';

const store = createStore(
  rootReducer,
  // logger를 사용하는 경우, logger가 가장 마지막에 와야함
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware,
      logger
    )
  ) // 여러 개의 미들웨어 적용 가능
);

sagaMiddleware.run(rootSaga); // 루트사가 실행
// 스토어가 생성된 다음에 위 코드를 실행해주어야 함

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
