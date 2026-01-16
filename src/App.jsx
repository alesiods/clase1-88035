
import "./App.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./componentes/ItemCount/ItemCount";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";


const App = () => {


  return (

    <>
        <NavBar/>
        <ItemListContainer greeting= "hola mundo"/>

    </>
    
    
  )
}

export default App
