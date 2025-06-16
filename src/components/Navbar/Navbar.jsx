import { NavLink } from 'react-router'
import './Navbar.css'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}