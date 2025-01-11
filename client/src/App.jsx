import Intro from './components/Intro'
import Work from './components/Work'
import Values from './components/Values'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import AsideSection from './components/AsideSection'
import ContentSection from './components/ContentSection'
import { useEffect, useState } from 'react'
import './App.css'

const sections = [
  {
    id: 'intro',
    name: 'Home',
    componentName: <Intro />,
  },
  {
    id: 'Values',
    name: 'Values',
    componentName: <Values />,
  },
  {
    id: 'skills',
    name: 'Skills',
    componentName: <Skills />,
  },
  {
    id: 'projects',
    name: 'Projects',
    componentName: <Projects />,
  },
  {
    id: 'about',
    name: 'About',
    componentName: <About />,
  },
  {
    id: 'contact',
    name: 'Contact',
    componentName: <Contact />,
  },
]

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/query', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: '*[_type == "profile"]',
          }),
        })
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
      <div className="screen">
        <AsideSection navigationItems={ sections } />
        <ContentSection navigationItems={ sections } />
      </div>
  )
}

export default App
