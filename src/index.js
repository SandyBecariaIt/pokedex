import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './routes/AppRouter';

import './styles/global-style.css';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
