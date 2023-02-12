import React from "react";
import { Layout } from "./components/layout";
import { DrumMachine } from "./components/drum-machine";
import { Provider } from "react-redux";
import store from "./app/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <DrumMachine />
      </Layout>
    </Provider>
  );
}

export default App;
