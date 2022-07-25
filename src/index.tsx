import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";

import "./styles/index.scss";

import {App} from "./App";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

// амфора, Пирей, Агора, Акрополь, Парфенон, Ники Бескрылой,