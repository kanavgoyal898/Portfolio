import React from 'react'
import LeftSection from './components/LeftSection'
import HomeSection from './components/HomeSection'

import './App.css'

function App() {
  
  return (
    <div className='default-styles'>
      <div className='center-align'>
        <div className='container center-align dynamic-menu hero-section small:max-w-small medium:max-w-medium large:max-w-large'>
          <LeftSection />
          <HomeSection />
        </div>
      </div>
    </div>
  )
}

export default App