import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, Links } from 'react-router-dom'

const NavBar = () => {

  return (
    <header>
      <Link to="/">
        <h1 className=''>Tienda Marolio</h1>
      </Link>

        <nav>
            <ul>
                <li>
                  <Link to="categoria/lacteos"> Lacteos </Link>
                </li>
                <li>
                  <Link to="categoria/almacen"> Almacen</Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar