import React from 'react';
import { Layout } from '../Layout';
import { DrumMachine } from '../DrumMachine';
import { Provider } from 'react-redux';
import store from '../../app/store';
import './style.css';
import { KeyPressProvider } from '../../providers/KeyPressProvider';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <KeyPressProvider>
        <Layout>
          <DrumMachine />
        </Layout>
      </KeyPressProvider>
    </Provider>
  );
};
