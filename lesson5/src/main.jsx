import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FetchName from './fetchName.jsx'
import { HomeWork } from './HomeWork.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FetchName /> */}
    <HomeWork />
  </StrictMode>,
)
