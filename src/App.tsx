import React from 'react';

import { Routes } from './navigators';
import { AuthProvider } from './contexts';
import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalAlert } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
        <GlobalAlert />
      </AuthProvider>
    </Provider>
  );
};

export default App;
