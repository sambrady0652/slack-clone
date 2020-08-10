import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';

import App from './App';
import { theme } from './Grommet/theme';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grommet theme={theme}>
        <App />
      </Grommet>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
