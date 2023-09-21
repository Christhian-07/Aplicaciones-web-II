

//Declaramos todos los parametros 
interface Producto {
    idProducto: string;
    idServicio: string;
    email: string;
    description: string;
    price: string;
    dateDescription: string;
    dateUpdate: string;
    Servicio: string;
}

// exportamos muestro arreglo

export const products: Producto[] = [
    {
        idProducto: "001",
        idServicio: "001",
        email: "cristian07.vergara@gmail.com",
        description: "Articulo cientifico de libros de artes",
        price: "10.00$",
        dateDescription: "19-09-2023",
        dateUpdate: "20-09-2023",
        Servicio: "Publicidad",
    },
    {
        idProducto: "002",
        idServicio: "002",
        email: "juan@gmail.com",
        description: "libro de arte",
        price: "15.00$",
        dateDescription: "12-10-2023",
        dateUpdate: "15-10-2023",
        Servicio: "Publicidad",
    },
    {
        idProducto: "003",
        idServicio: "003",
        email: "pepe@gmail.co",
        description: "publicacion de fotos de artes",
        price: "5.00$",
        dateDescription: "20-09-2023",
        dateUpdate: "19-09-2023",
        Servicio: "Publicacion",
    },
    {
        idProducto: "004",
        idServicio: "004",
        email: "mm@gmail.com",
        description: "publicacion de libros",
        price: "15.00$",
        dateDescription: "10-11-2023",
        dateUpdate: "10-11-2023",
        Servicio: "Publicacion",
    },
    {
        idProducto: "005",
        idServicio: "005",
        email: "kkk@gmail.com",
        description: "Publicacion de libros de artes",
        price: "25.00$",
        dateDescription: "10-12-2023",
        dateUpdate: "20-12-2023",
        Servicio: "Publicacion",
    },
];
