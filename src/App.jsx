import GenerateInput from './assets/generateInput'
import { useState } from 'react'
import './App.css'

function App() {
  
  const [input,setInput]=useState('')
  
  function updateInput(value){
    setInput(value)
  }
  
  return (
    <>
    <div className='parent-container'>
      <h1>Enter text to be displayed dynamically.</h1>
      <GenerateInput changeInputProp={updateInput} />
      <h4>{input}</h4>
    </div>
    </>
  )
}

export default App
