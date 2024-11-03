import React from 'react'
import LeftSection from './components/LeftSection'
import HomeSection from './components/HomeSection'

import './App.css'

function App() {
  
  return (
    <>
      <div className='center-align default-styles my-16'>
        <div className='container center-align hero-section default-styles small:max-w-small medium:max-w-medium large:max-w-large'>
          <LeftSection />
          <HomeSection />
        </div>
      </div>
    </>
  )
}

export default App