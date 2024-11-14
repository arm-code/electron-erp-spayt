import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './NavBar.styles'

export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => (isActive ? 'active-link' : '')} // Aquí se usa `isActive` para asignar la clase activa
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/plantillas" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Plantillas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/constancias" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Constancias
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/certificacion" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Certificación
          </NavLink>
        </li>
      </ul>
      <hr />
    </Nav>
  )
}
