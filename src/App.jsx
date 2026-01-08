import Boton from "./componentes/Boton/Boton"
import "./App.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal";
import ItemCount from "./componentes/ItemCount/ItemCount";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


const App = () => {

  function saludo(){
    console.log("Holaaaa")
  }
  saludo()

  let cantidad = 28

  let colorFondo = {backgroundColor: "green"}

  const celular = {
    marca: "Samsung",
    precio: 500000
  }



  return (

    <>
        {/* <h1 className="colorFondoPrincipal">Hola chicos, bienvenidos, en la clase de hoy somos {cantidad} </h1>
        <h2 style={colorFondo}>soy un subtitulo</h2>
        <h3 style={{color:"blue"}}>soy un h3</h3>
        <h4>soy un h4</h4>
        <img src="" alt="" />
        <Boton texto="Comprar"/>
        <Boton texto="Eliminar"></Boton>
        <Boton texto={10}/>
        <TituloPrincipal saludo="Hola Mundoooo" producto={celular}/>
        <hr />

        <ItemCount stock={10}/>
        <ItemCount stock={15}/> */}


        <NavBar/>
        <ItemListContainer/>

    </>
    
    
  )
}

export default App
