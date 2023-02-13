import React from "react";
import { Layout } from "../Layout";
import { DrumMachine } from "../DrumMachine";
import { Provider } from "react-redux";
import store from "../../app/store";
import "./style.css";

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout>
        <DrumMachine />
      </Layout>
    </Provider>
  );
};
