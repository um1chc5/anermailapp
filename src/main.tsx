// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MailAppProvider } from './context/MailAppProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MailAppProvider>
      <App />
    </MailAppProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
