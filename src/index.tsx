import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
//ReactDOM.render() 함수는 React 엘리먼트(React 요소)를 실제 DOM에 렌더링하는 역할
//이 메소드는 애플리케이션의 진입점 역할을 하며, 두 개의 매개변수를 가짐
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
