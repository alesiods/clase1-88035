import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({id, nombre, precio, img, stock}) => {

  //cremos un estado local con la cantidad de producto agregados

  const[agregarCantidad, setAgregarCantidad] = useState(0)

  //creamos un funcion manejadora de la cantidad

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados:" + cantidad)
  }


  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus numquam assumenda illum, ad et mollitia rerum vero magni aliquam fugiat quidem consequuntur in, temporibus provident deleniti dicta pariatur animi excepturi.</p>

        {/* Aca empleamos la logica de montaje y desmontaje del contador */}

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail