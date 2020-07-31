import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Grommet } from 'grommet';
import { theme } from './Grommet/theme';

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);
