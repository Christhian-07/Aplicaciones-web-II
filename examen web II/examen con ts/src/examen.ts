export interface IBus{
    id: number;
    busNumber: number;
    brand: string;
    model: string;
    capacity: number;
    routes: IRoute[];
}

export interface IRoute{
    id: number;
    start: string;
    destination: string;
    distance: number;
    busid: number;
}

const buses: IBus[] = [
    {
      id: 1,
      busNumber: 101,
      brand: "Mercedes",
      model: "Sprinter",
      capacity: 30,
      routes: [
        {
          id: 1,
          start: "City A",
          destination: "City B",
          distance: 100,
          busid: 1
        },
        {
          id: 2,
          start: "City B",
          destination: "City C",
          distance: 120,
          busid: 1
        }
      ]
    },
    {
      id: 2,
      busNumber: 102,
      brand: "Volvo",
      model: "V90",
      capacity: 40,
      routes: [
        {
          id: 3,
          start: "City X",
          destination: "City Y",
          distance: 150,
          busid: 2
        }
      ]
    },
    {
      id: 3,
      busNumber: 103,
      brand: "Ford",
      model: "Transit",
      capacity: 25,
      routes: []
    }
];
  
//  console. log(buses)


// crear y definir una funcion que reciba dos parametros :
// A. arreglo de objetos del tipo de la interfaz propuesta
// b. id del elemento que desa eliminar
// y se encargue de eliminar definitivamente el elemento de este arreglo.
// al omento de llamar esta funcion utilizar un callback para mostrar todos los atributos eliminados por consola

function eliminarElementoPorId<T>(arreglo: T[], id: number, callback: (atributosEliminados: T) => void): void {
    const indice = arreglo.findIndex((item) => id === id);
  
    if (indice !== -1) {
      const elementoEliminado = arreglo.splice(indice, 1)[0];
      callback(elementoEliminado);
    } else {
      console.log(`No se encontró ningún elemento con ID ${id}`);
    }
}

const idAEliminar = 5; 

eliminarElementoPorId(buses, idAEliminar, (atributosEliminados) => {
    console.log("Elemento eliminado:");
    console.log(atributosEliminados);
});

console.log("Arreglo de buses después de la eliminación:");
console.log(buses);


