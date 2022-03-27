import React from 'react'
import ReactDOM from 'react-dom'
import App from './web-app'

window.global = { type: 'Vite' } 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
