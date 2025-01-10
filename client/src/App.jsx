import Intro from './components/Intro'
import Work from './components/Work'
import Values from './components/Values'
import Background from './components/Background'
import References from './components/References'
import About from './components/About'
import Contact from './components/Contact'
import AsideSection from './components/AsideSection'
import ContentSection from './components/ContentSection'
import { useEffect, useState } from 'react'
import './App.css'

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
    id: 'references',
    name: 'References',
    componentName: <References />,
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
            query: '*[_type == "education"]',
          }),
        })
        const result = await response.json()
        setData(result)
        console.log(result)
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
