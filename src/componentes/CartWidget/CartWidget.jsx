import "./CartWidget.css"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

    const imgCarrito = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"

  return (
    <div>
      <Link to="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Imagen de un carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }

      </Link>
    </div>
  )
}

export default CartWidget