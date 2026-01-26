import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (

    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus numquam assumenda illum, ad et mollitia rerum vero magni aliquam fugiat quidem consequuntur in, temporibus provident deleniti dicta pariatur animi excepturi.</p>
    </div>
  )
}

export default ItemDetail