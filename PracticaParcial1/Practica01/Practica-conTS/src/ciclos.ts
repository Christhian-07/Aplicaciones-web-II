
import { products } from "./arreglo";

console.log("Ciclo forEach");


products.forEach(({ email, description, price }) => {
    console.log(`Correo: ${email}, Descripcion: ${description}, Precio: ${price}`);
});


//  ciclos for

console.log("Ciclo for")

for (let i = 0; i < products.length; i++) {
    const { email, description, price } = products[i];
    console.log(`Correo: ${email}, Descripcion: ${description}, Precio: ${price}`);
  };

// ciclo for in
console.log("Ciclo for in");

for (let i = 0; i < products.length; i++) {
  const productObj = products[i];
  console.log(`Correo: ${productObj.email}, Descripcion: ${productObj.description}, Precio: ${productObj.price}`);
};

//ciclo for of

console.log("Ciclo for of");

for (const productObj of products) {
  console.log(`Correo: ${productObj.email}, Descripcion: ${productObj.description}, Precio: ${productObj.price}`);
}

// ciclo do while

console.log("Ciclo do...while");

let i = 0;
do {
  const productObj = products[i];
  console.log(`Correo: ${productObj.email}, Descripcion: ${productObj.description}, Precio: ${productObj.price}`);
  i++;
} while (i < products.length);
