/**
 * Application Entry Point
 * 
 * This file serves as the main entry point for the React application.
 * It renders the App component into the DOM and enables React's StrictMode for development.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element and render the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)