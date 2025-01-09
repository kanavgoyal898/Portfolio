import AsideSection from './components/AsideSection'
import ContentSection from './components/ContentSection'
import './App.css'

import Intro from './components/Intro'
import Values from './components/Values'
import Background from './components/Background'

const sections = [
  {
      id: 'section1',
      name: 'Section 1',
      componentName: <Intro />,
  },
  {
      id: 'section2',
      name: 'Section 2',
      componentName: <Values />,
  },
  {
      id: 'section3',
      name: 'Section 3',
      componentName: <Background />,
  }
]

function App() {
  return (
      <div className="flex h-full">
        <AsideSection navigationItems={ sections } />
        <ContentSection navigationItems={ sections } />
      </div>
  )
}

export default App
