import React from 'react'
import Nav from './components/nav'
import Body from './components/body'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Body />
    
    </BrowserRouter>
    
    
    </>
  )
  
  
}

export default App
