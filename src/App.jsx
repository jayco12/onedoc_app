import { useState } from 'react'
import Header from './Container/Header'
import Decription from './Container/Description'
import Form from './Form'
import './App.css'

function App() {
  

  return (
    <div className='flex flex-col h-screen md:block'>
      <div className='bg-Balablue-blue h-2/6 md:h-0'></div>
      <div className='bg-white h-4/6 -translate-y-5 rounded-3xl'>
      <Header />
      <Decription/>
      <Form/>
      </div>
    </div>
  )
}

export default App
