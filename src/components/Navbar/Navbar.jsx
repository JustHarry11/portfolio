import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <Link to="home" smooth={true} duration={500} offset={-50}>Home</Link>
                <Link to="projects" smooth={true} duration={500} offset={-50} onClick={() => console.log("Clicked Projects")}>Projects</Link>
                <Link to="skills" smooth={true} duration={500} offset={-50}>Skills</Link>
                <Link to="contact" smooth={true} duration={500} offset={-50}>Contact</Link>
            </nav>
        </header>
    )
}