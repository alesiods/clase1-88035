//1) Importancion de useState y createContext

import { useState, createContext, Children } from "react";

//2) Creamos el contexto
export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})


export const CarritoProvider = ({children}) =>{

    //3) creamos el estado para el carrito, total y cantidadTotal
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //Verificamos por consola:
    console.log(carrito)
    
    //4)Agregamos alguna funciones auxiliares para la lógica del carrito

    const agregarAlCarrito = (item, cantidad) =>{
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if(!productoExistente){
            setCarrito(prev=> [...prev, {item, cantidad}])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev=> prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id) {
                    return{...prod, cantidad: prod.cantidad + cantidad}
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setCantidadTotal(prev => prev +(item.precio * cantidad))
        }
    }

    //Funcion para eliminar producto:

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find (prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }

    //Funcion para vaciar el carrito:

    const vaciarCarrito = () =>{
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0)
    }



    return(
       <CarritoContext.Provider value={{carrito, total, cantidadTotal,agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
        {children}
       </CarritoContext.Provider>
    )
}