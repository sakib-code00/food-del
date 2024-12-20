import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App'
import StoreContextProvider from './context/StoreContext'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App></App>
  </StoreContextProvider>
  </BrowserRouter>
)
