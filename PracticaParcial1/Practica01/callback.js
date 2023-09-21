const product=require("./arreglo.js")


// Definir una función que busca un objeto por ID y utiliza un callback
function buscarProductoPorID(arr, id, callback) {
  for (const producto of arr) {
    if (producto.idProducto === id) {
      callback(producto);
      return; // Salir del bucle si se encuentra el objeto
    }
  }
  // Si no se encuentra el objeto, puedes manejarlo como desees, por ejemplo:
  callback(null); // Llamamos al callback con null para indicar que no se encontró el objeto
}

// Definir una función de callback para mostrar el objeto por consola
function mostrarProducto(producto) {
  if (producto) {
    console.log("Producto encontrado:");
    console.log(producto);
  } else {
    console.log("Producto no encontrado.");
  }
}

//  uso de la función con callback para buscar y mostrar un producto por su ID
const idABuscar = "002";
buscarProductoPorID(product, idABuscar, mostrarProducto);

