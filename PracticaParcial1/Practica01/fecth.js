
// La función fetch no necesita ser instalada como una biblioteca o paquete separado, 
// ya que es una función nativa de JavaScript y está disponible en la mayoría de los navegadores modernos. 
// Puedes usar fetch directamente en tu código sin necesidad de instalar nada adicional.



//Esta línea utiliza la función fetch para realizar una solicitud GET a la URL 
fetch('https://pokeapi.co/api/v2/pokemon/500', {
    //'GET' es el método predeterminado.
  method: 'GET'
})
// Después de que la solicitud sea exitosa, esta línea convierte la respuesta en formato JSON. La función 
// response.json() devuelve una promesa que se resuelve en los datos JSON contenidos en la respuesta.

  .then(response => response.json())
  .then(data => {
//  se pide como parametro el nombre del pokemon aun que puede ser cualquiere dato que podmaos pedir

    const pokemonName = data.name;

// devuelve el mnombre del pokemon
    console.log(`El nombre del Pokémon es: ${pokemonName}`);
  })
  
//devuelve un mensaje de error si  no se a encontrado el pokemon o hay algun error de sintaxis
  .catch(error => console.error('Ha ocurrido un error:', error));
