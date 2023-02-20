import React from 'react';
import { Provider } from 'react-redux';
// providers
import { ServiceMessageProvider } from '../../providers';
// components
import { Layout } from '../Layout';
import { DrumMachine } from '../DrumMachine';
// store
import { store } from '../../store';
// styles
import './style.css';
/// ////////////////////////////////////////////////////////////////////////////

export const App: React.FC = () => (
  <Provider store={store}>
    <ServiceMessageProvider>
      <Layout>
        <DrumMachine />
      </Layout>
    </ServiceMessageProvider>
  </Provider>
);
