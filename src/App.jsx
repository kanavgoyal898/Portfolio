import React from 'react'

import Header from './components/Header'
import Socials from './components/Socials'
import NavigationBar from './components/NavigationBar'
import Image from './components/Image'
import Timestamps from './components/Timestamps'

import './App.css'

function App() {
  
  return (
    <div className='page'>
      <div className='content bg-red-200'>
        <div className='container action-center bg-blue-200'>
          <Header />
          <Socials />
          <NavigationBar />
        </div>
        <div className='container results-center bg-green-200'>
          <Image />
          <Timestamps />
        </div>
      </div>
    </div>
  )
}

export default App