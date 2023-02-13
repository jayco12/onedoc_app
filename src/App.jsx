import { useState } from 'react'
import Header from './Container/Header'
import Decription from './Container/Description'
import Form from './Container/Form'
import Footer from './Container/Footer'
import './App.css'

function App() {
  

  return (
    <div className='flex flex-col h-screen md:block'>
      <div className='bg-Balablue-blue h-1/4 md:h-0'></div>
      <div className='bg-white h-3/4 -translate-y-9 rounded-3xl'>
      <Header />
      <Decription/>
      <Form/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
