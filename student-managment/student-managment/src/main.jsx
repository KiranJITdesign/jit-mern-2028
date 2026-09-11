import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
//router for changing the    /  add other /tasks

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </StrictMode>,
)
