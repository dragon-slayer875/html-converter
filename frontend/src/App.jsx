import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tempPng from '../../backend/cert.png'
import './App.css'

function App() {
  return (
    <>
      <div className="artboard phone-1">
        <img src={tempPng} alt="" />
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="btn btn-primary">Button</button>
    </>
  )
}

export default App
