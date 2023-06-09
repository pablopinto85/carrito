// Definición del objeto producto
const Producto = function(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
};
// Creación de productos
let producto1 = new Producto("(0) aro oro", 99000, 10);
let producto2 = new Producto("(1) aro plata", 49000, 15);
let producto3 = new Producto("(2) aro acero quirurgico", 9900, 20);
let producto4 = new Producto("(3) anillo oro", 150000, 5);
let producto5 = new Producto("(4) anillo plata", 79000, 15);
let producto6 = new Producto("(5) anillo acero quirurgico", 19000, 20);
let producto7 = new Producto("(6) argolla oro matrimonio", 299000, 8);
let producto8 = new Producto("(7) colgante plata", 99000, 20);
let producto9 = new Producto("(8) colgante oro", 199000, 0);


let lista = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9
    
];
// Función para filtrar productos por palabra clave ingresada por el usuario, funcion llamada desde consola
function promptFiltrarProductos() {
  let palabraClave = prompt("Ingresa el producto que deseas buscar").trim().toUpperCase();
  let resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));

  if (resultado.length > 0) {
    let mensaje = "Resultados:\n";
    resultado.forEach((producto) => {
      mensaje += `Nombre: ${producto.nombre}\nPrecio: ${producto.precio}\nStock: ${producto.stock}\n\n`;
    });
    alert(mensaje);
  } else {
    alert("No se encontró ninguna coincidencia con: " + palabraClave);
  }
}

let carrito = [];

while (true) {
  let opcion = parseInt(prompt("Selecciona una opción:\n1. Agregar producto al carrito\n2. Ver carrito\n3. Finalizar compra\n4. Salir"));

  if (opcion === 1) {
    let productoIndice = parseInt(prompt("Ingresa el índice del producto que deseas agregar al carrito del 0 a 8:"));

    if (isNaN(productoIndice) || productoIndice < 0 || productoIndice >= lista.length || productoIndice === "") {
      alert("Índice inválido.");
    } else {
      let producto = lista[productoIndice];         //defino variable producto
      if (producto.stock > 0) {
        carrito.push(producto);
        producto.stock--;
        alert("Producto agregado al carrito.");
      } else {
        alert("El producto no tiene stock disponible.");
      }
    }
  } else if (opcion === 2) {
    let mensajeCarrito = "Carrito de compras:\n";
    carrito.forEach((producto, index) => {
      mensajeCarrito += `${index}. ${producto.nombre} - Precio: ${producto.precio}\n`;
    });
    alert(mensajeCarrito);
  } else if (opcion === 3) {
      let total = 0;
      let mensajeCompra = "Resumen de la compra:\n";
      carrito.forEach((producto) => {
        mensajeCompra += `${producto.nombre} - Precio: ${producto.precio}\n`;
        total += producto.precio;
      });
  
      mensajeCompra += `Total: ${total}`;
      alert(mensajeCompra);
      break;
    } else if (opcion === 4) {
      alert("¡Gracias por utilizar el carro de compras!");
      break;
    } else {
      alert("Opción inválida. Por favor, selecciona una opción válida.");
    }
  }
  