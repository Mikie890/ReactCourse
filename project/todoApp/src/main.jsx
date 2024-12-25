import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoApp from './TodoApp.jsx'
import ProductList from './E-commerce.jsx'
import MovieApp from './MovieApp.jsx'
import Tracker from './Tracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TodoApp /> */}
    {/* <ProductList /> */}
    {/* <MovieApp /> */}
    <Tracker />
  </StrictMode>,
)
