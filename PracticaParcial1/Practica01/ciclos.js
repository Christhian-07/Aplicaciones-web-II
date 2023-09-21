//exportamos los arreglos

const product=require("./arreglo.js")

//Ciclo ForEach

console.log("Ciclo forEach")

product.forEach(({email,description, price})=>{
    console.log(`Correo:${email},Descripcion:${description},Precio:${price}`);
});

//  ciclos for

console.log("Ciclo for")

for (let i = 0; i < product.length; i++) {
    const { email, description, price } = product[i];
    console.log(`Correo: ${email}, Descripcion: ${description}, Precio: ${price}`);
  };

// ciclo for in
console.log("Ciclo for in");

for (let i = 0; i < product.length; i++) {
  const productObj = product[i];
  console.log(`Correo: ${productObj.email}, Descripcion: ${productObj.description}, Precio: ${productObj.price}`);
};

//ciclo for of

console.log("Ciclo for of");

for (const productObj of product) {
  console.log(`Correo: ${productObj.email}, Descripcion: ${productObj.description}, Precio: ${productObj.price}`);
}

// ciclo do while

console.log("Ciclo do...while");

let i = 0;
do {
  const productObj = product[i];
  console.log(`Correo: ${productObj.email}, Descripcion: ${productObj.description}, Precio: ${productObj.price}`);
  i++;
} while (i < product.length);
