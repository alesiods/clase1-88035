
import "./App.css"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./componentes/ItemCount/ItemCount";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {


  return (

    <>

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
      </Routes>
        
    
    </BrowserRouter>


    </>
    
    
  )
}

export default App
