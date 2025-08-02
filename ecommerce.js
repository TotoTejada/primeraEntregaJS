// Lista de productos disponibles
const productos = [
  { id: 1, nombre: "Zapatillas", precio: 15000 },
  { id: 2, nombre: "Remera", precio: 8000 },
  { id: 3, nombre: "Campera", precio: 25000 },
  { id: 4, nombre: "Pantalón", precio: 12000 },
  { id: 5, nombre: "Gorra", precio: 5000 },
];

let carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos() {
  let lista = "Productos disponibles:\n";
  productos.forEach((prod) => {
    lista += `${prod.id}. ${prod.nombre} - $${prod.precio}\n`;
  });
  alert(lista);
  console.log(lista);
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
  let continuar = true;

  while (continuar) {
    const entrada = prompt(
      "Ingrese el número del producto que desea agregar al carrito:"
    );
    const productoSeleccionado = productos.find(
      (p) => p.id === parseInt(entrada)
    );

    if (productoSeleccionado) {
      carrito.push(productoSeleccionado);
      alert(`${productoSeleccionado.nombre} agregado al carrito.`);
      console.log(`${productoSeleccionado.nombre} agregado al carrito.`);
    } else {
      alert("Producto no encontrado. Intente nuevamente.");
    }

    continuar = confirm("¿Desea agregar otro producto?");
  }
}

// Función para calcular el total
function calcularTotal() {
  let total = 0;
  carrito.forEach((p) => (total += p.precio));
  return total;
}

// Función para mostrar el resumen de compra
function mostrarResumen() {
  if (carrito.length === 0) {
    alert("No se agregó ningún producto al carrito.");
    return;
  }

  let resumen = "Resumen de compra:\n";
  carrito.forEach((p) => (resumen += `- ${p.nombre} $${p.precio}\n`));
  const total = calcularTotal();
  resumen += `\nTotal a pagar: $${total}`;

  alert(resumen);
  console.log(resumen);

  const confirmarCompra = confirm("¿Desea confirmar la compra?");
  if (confirmarCompra) {
    alert("¡Gracias por su compra!");
    console.log("Compra confirmada.");
  } else {
    alert("Compra cancelada.");
    console.log("Compra cancelada.");
  }
}

// Flujo principal
mostrarProductos();
agregarAlCarrito();
mostrarResumen();
