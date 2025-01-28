import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Values from "./components/Values";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import AsideSection from "./components/AsideSection";
import ContentSection from "./components/ContentSection";
import "./App.css";

const sections = [
  {
    id: "intro",
    name: "Home",
    componentName: <Intro />,
  },
  {
    id: "values",
    name: "Values",
    componentName: <Values />,
  },
  {
    id: "skills",
    name: "Skills",
    componentName: <Skills />,
  },
  {
    id: "projects",
    name: "Projects",
    componentName: <Projects />,
  },
  {
    id: "gallery",
    name: "Gallery",
    componentName: <Gallery />,
  },
  {
    id: "about",
    name: "About",
    componentName: <About />,
  },
  {
    id: "contact",
    name: "Contact",
    componentName: <Contact />,
  },
];

function App() {
  return (
    <div className="screen">
      <AsideSection navigationItems={ sections } />
      <ContentSection navigationItems={ sections } />
    </div>
  );
}

export default App;
