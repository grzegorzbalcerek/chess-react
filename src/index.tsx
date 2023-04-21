import React from 'react';
import ReactDOM from 'react-dom/client';
import ChessApp from './chess-app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChessApp />
  </React.StrictMode>
);

