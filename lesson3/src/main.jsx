import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise from './exercise.jsx'
import TodoApp from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Exercise /> */}
    <TodoApp />
  </StrictMode>,
)
