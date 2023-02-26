import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='mynavbar'>
      <h1>Navbar</h1>
      <Link
        to="/home"
      >
        <p>Home</p>
      </Link>


      <Link
        to="/about"
      >
        <p>About</p>
      </Link>
    </div>
  )
}

export default Navbar