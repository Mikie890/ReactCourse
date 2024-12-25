import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("black")

  return (
    <>
      <button onClick={() => {
        setShowText(!showText)
      }}>Show/Hide</button>

      <button onClick={() => {
        setTextColor(prevColor => prevColor === "black" ? "red" : "black")
      }}>Change Color</button>

      {showText === true && <h1 style={{color:textColor}}>lol</h1>}
    </>
  )
}

export default App
