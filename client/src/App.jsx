import AsideSection from './components/AsideSection'
import ContentSection from './components/ContentSection'
import './App.css'

import Intro from './components/Intro'
import Values from './components/Values'
import Background from './components/Background'
import About from './components/About'

const sections = [
  {
    id: 'intro',
    name: 'Intro',
    componentName: <Intro />,
  },
  {
    id: 'values',
    name: 'Values',
    componentName: <Values />,
  },
  {
    id: 'background',
    name: 'Background',
    componentName: <Background />,
  },
  {
    id: 'about',
    name: 'About',
    componentName: <About />,
  },
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
