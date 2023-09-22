// Mensaje de bienvenida
alert("¡Bienvenido a la Carpintería , aqui podras seleccionar los productos que quieras y agregarlos a tu carrito!");

// Ejemplo de productos y sus precios
let productos = {
    '1': {nombre: 'Recorte de madera x m2', precio: 1000},
    '2': {nombre: 'Correderas', precio: 350},
    '3': {nombre: 'Tapa Cantos', precio: 150},
    '4': {nombre: 'Visagras', precio: 623},
    '5': {nombre: 'Tornillos', precio: 4},
};

// Mostrar los productos y sus precios
let mensajeProductos = "Estos son nuestros productos y sus precios:\n";
for (let numero in productos) {
    mensajeProductos += `${numero}. ${productos[numero].nombre}: $${productos[numero].precio}\n`;
}
mensajeProductos += "Presiona 0 para terminar.";

alert(mensajeProductos);

let total = 0;
let seguirEligiendo = true;

while (seguirEligiendo) {
    let eleccion = prompt("Introduce el número del producto que deseas añadir al carrito (o escribe '0' para finalizar):");

    if (eleccion === '0') {
        seguirEligiendo = false;
    } else if (productos[eleccion]) {
        total += productos[eleccion].precio;
        alert(`${productos[eleccion].nombre} ha sido añadido al carrito.`);
    } else {
        alert("Número no válido. Por favor, intenta de nuevo.");
    }
}

alert(`El total de productos seleccionados es: $${total}`);
