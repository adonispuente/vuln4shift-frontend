import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './Store/ReducerRegistry';
import App from './App';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
import logger from 'redux-logger';

const AppEntry = () => (
  <Provider
    store={init(
      ...(process.env.NODE_ENV !== 'production' ? [logger] : [])
    ).getStore()}
  >
    <Router basename={getBaseName(window.location.pathname, 3)}>
      <App />
    </Router>
  </Provider>
);

export default AppEntry;
