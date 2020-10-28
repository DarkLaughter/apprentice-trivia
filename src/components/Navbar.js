import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
      <nav>
        <ul>
        <li>
            <NavLink to="/" >Walk the Labyrinth</NavLink>
        </li>
        <li>
            <NavLink to="/qa" > Q & A </NavLink>
        </li>
        <li>
            <NavLink to="/media">Media</NavLink>
        </li>
        </ul>
      </nav>
    )
}

export default Navbar
