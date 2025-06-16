import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App