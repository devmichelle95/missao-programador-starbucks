import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './src/Home'
import GlobalStyles from './src/styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>

    <GlobalStyles />
    <HomePage />
  </React.StrictMode>
)
