import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RoutesProvider from './router/router';
import './main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesProvider />
  </React.StrictMode>,
)