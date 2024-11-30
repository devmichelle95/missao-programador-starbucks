import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Home'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>

    <GlobalStyles />
    <HomePage />
  </React.StrictMode>
)
