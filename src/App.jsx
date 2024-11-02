import React from 'react'
import LeftSection from './components/LeftSection'
import HomeSection from './components/HomeSection'

function App() {
  
  return (
    <>
      <div className='font-sans container w-full mx-0 px-0 max-w-none'>
        <div className='flex flex-row justify-center w-full px-2 py-12 text-sm'>
          <LeftSection />
          <HomeSection />
        </div>
      </div>
    </>
  )
}

export default App