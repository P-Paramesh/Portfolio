
import React from 'react'
import { Link } from "react-router-dom"
import "./NavbarStyles.css"

const Navbar = () => {
return (
    <div className="header">
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>  
    )
}

export default Navbar
