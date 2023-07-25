// Simulador de Lista de Tareas

// Solicito nombre al usuario
let nombre = prompt("Por favor, ingresa tu nombre:");

// Agregar elementos a la lista
let listaCompras = [];

do {
  let articulo = prompt(nombre + ", ¿qué quieres agregar a la lista de compras?");
  listaCompras.push(articulo);

  // Mostrar los elementos de la lista actualizados
  console.log("Lista de compras:");
  listaCompras.forEach((item, index) => {
    console.log("- " + item);
  });

  let respuesta = prompt("¿Quieres agregar algo más a la lista? (Sí/No)");
  if (respuesta.toLowerCase() !== "sí" && respuesta.toLowerCase() !== "si") {
    break;
  }
} while (true);

// Mostrar mensaje de despedida
alert("¡Muchas gracias por pasar, " + nombre + "!");

class producto {
  constructor(nombre) {
    this.nombre = nombre.toUpperCase();
  }
}

const carrito = [];

// Convertir elementos de listaCompras en objetos de la clase producto y agregarlos a carrito
for (let i = 0; i < listaCompras.length; i++) {
  const nombreProducto = listaCompras[i];
  const nuevoProducto = new producto(nombreProducto);
  carrito.push(nuevoProducto);
}

// Mostrar elementos agregados al carrito usando .reduce()
const productosAgregados = carrito.reduce((acc, producto) => {
  return acc + "- " + producto.nombre + "\n";
}, '');

alert(nombre + ", estos son los productos que has agregado al carrito:\n\n" + productosAgregados);


