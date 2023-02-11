import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1 className="text-3xl font-bold underline text-red-500 text-center">Welcome to my waiting list</h1> 
    </div>
  )
}

export default App
