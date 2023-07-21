
// Simulador de Lista de Tareas

//Solicito nombre al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");

//Agregar elementos a la lista
let listaCompras = [];

do {
  let articulo = prompt(nombre + ", ¿qué quieres agregar a la lista de compras?");
  listaCompras.push(articulo);

  //Mostrar los elementos de la lista actualizados
  console.log("Lista de compras:");
  for (let i = 0; i < listaCompras.length; i++) {
    console.log("- " + listaCompras[i]);
  }

  let respuesta = prompt("¿Quieres agregar algo más a la lista? (Sí/No)");
  if (respuesta.toLowerCase() !== "sí" && respuesta.toLowerCase() !== "si") {
    break;
  }
} while (true);

//Mostrar mensaje de despedida
alert("¡Muchas gracias por pasar, " + nombre + "!");

class producto {
  constructor(nombre, precio, vendido){
    this.nombre = nombre.toUpperCase();
    this.precio = Number(precio);
    this.vendido = false;
  }


}

const carrito = []

const producto1 = new producto('arroz', 200)
const producto2 = new producto('fideos', 250)

carrito.push(producto1, producto2)

console.log(carrito)



