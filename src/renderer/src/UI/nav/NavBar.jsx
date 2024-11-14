import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './NavBar.styles'

export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plantillas">Plantillas</Link>
        </li>
        <li>
          <Link to="/constancias">Constancias</Link>
        </li>
        <li>
          <Link to="/certificacion">Certificacion</Link>
        </li>
      </ul>
      <hr />
    </Nav>
  )
}
