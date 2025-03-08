import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppDataProvider } from './contexts/NewContext.jsx'

createRoot(document.getElementById('root')).render(
  
    <AppDataProvider>
       <App />
    </AppDataProvider>
 
)
