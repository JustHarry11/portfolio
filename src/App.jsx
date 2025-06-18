import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App