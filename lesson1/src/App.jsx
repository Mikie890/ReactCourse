import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Job salary={90000} position="Senior SDE" company="Amazon"/>
      <Job salary={12000} position="jUnior SDE" company="Google"/>
      <Job salary={10000} position="Project Manager" company="Netflix"/>
    </>
  )
}
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}


export default App
