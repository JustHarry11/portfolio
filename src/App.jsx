import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import "./App.css";

function App() {

  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="aboutme"><AboutMe /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
    );
}

export default App