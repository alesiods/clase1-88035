import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {

  return (
    <header>
        <h1 className=''>Tienda Marolio</h1>

        <nav>
            <ul>
                <li>Lacteos</li>
                <li>Bebidas</li>
                <li>Almacen</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar