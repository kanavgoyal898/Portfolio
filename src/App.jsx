import goyalImage from './assets/goyal.png'

import Header from './components/Header'
import Figure from './components/Figure'
import Socials from './components/Socials'
import Timeline from './components/Timeline'
import NavigationBar from './components/NavigationBar'

const items = [
  "Navigation Item"
]


function App() {
  
  return (
    <>
      <div className="container w-full mx-0 px-0 max-w-none">
        <div className="flex flex-row w-full">
          <aside className="bg-red-100 flex-[2] text-right px-8">
            <Header homeURL="/goyal/" name="Kanav Goyal" designation="Undergraduate of the Practice of Computer Science" universityName="NIT Jalandhar" universityURL="https://www.nitj.ac.in" />
            <Socials mail="kanavgoyal898@gmail.com" />
            <NavigationBar items={items}/>
          </aside>
          <main className="bg-blue-100 flex-[3] px-8">
            <Figure src={goyalImage} caption={"Kanav Goyal @NITJ"}/>
            <Timeline/>
          </main>
        </div>
      </div>
    </>
  )
}

export default App