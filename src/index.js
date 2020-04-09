import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import { Auth0Provider } from './context/auth0-context';



ReactDOM.render(
  <Auth0Provider>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </Auth0Provider>
  ,document.getElementById('root'));
