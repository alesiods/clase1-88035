
import "./App.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./componentes/ItemCount/ItemCount";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


const App = () => {


  return (

    <>
        <NavBar/>
        <ItemListContainer greeting= "hola mundo"/>
        <ItemDetailContainer/>

    </>
    
    
  )
}

export default App
