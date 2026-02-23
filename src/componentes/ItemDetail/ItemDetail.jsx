import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

import { CarritoContext } from "../../context/CarritoContext"
import { useContext } from "react"
import { toast } from "react-toastify"

const ItemDetail = ({id, nombre, precio, img, stock, descripcion}) => {

  //cremos un estado local con la cantidad de producto agregados

  const[agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  //creamos un funcion manejadora de la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
  

    //Ahora aca yo creo un objeto con el item y la cantidad
    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
    toast.success("Su compra fue enviada al carrito",{
      autoClose:1000, theme: "dark", position:"top-right"
    })

  }


  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{descripcion}</p>

        {/* Aca empleamos la logica de montaje y desmontaje del contador */}

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail