import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    {/* to prevent Error suspended while rendering */}
    <Suspense fallback="...is loading">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
