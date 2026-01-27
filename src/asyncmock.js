const misProductos = [
    {id: "1", nombre: "Yerba", precio: 500, img:"../public/img/yerba.jpg", idCat:"almacen", stock:10 },
    {id: "2", nombre: "Fideos", precio: 200, img:"../public/img/fideos.jpg", idCat:"almacen", stock:10},
    {id: "3", nombre: "Arroz", precio: 300, img:"../public/img/arroz.jpg", idCat:"lacteos", stock:10},
    {id: "4", nombre: "Aceite", precio: 900, img:"../public/img/aceite.jpg", idCat:"lacteos", stock:10},
]

export const getProductos = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
        const producto = misProductos.find(Item =>Item.id === id)
        resolve(producto)
        }, 100)
    })
}

//creamos una funcion que me retorne todo una categoria

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}