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

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  // logger를 사용하는 경우, logger가 가장 마지막에 와야함
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)) // 여러 개의 미들웨어 적용 가능
);

sagaMiddleware.run(rootSaga); // 루트사가 실행
// 스토어가 생성된 다음에 위 코드를 실행해주어야 함

ReactDOM.render(
  <Router history={customHistory}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
