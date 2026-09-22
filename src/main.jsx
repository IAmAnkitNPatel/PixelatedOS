import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomeExplorer from './components/HomeExplorer/HomeExplorer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    { <HomeExplorer /> }
  </StrictMode>,
)
