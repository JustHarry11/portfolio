import { NavLink } from "react-router"
import './Navbar.css'

export default function Navbar(){
    return (
        <header>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    )
}