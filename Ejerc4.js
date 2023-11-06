let suma = 0;
let continuar = true;

while (continuar) {
  let entrada = prompt("Ingresa un número o presiona 'cancelar' para salir:");

  if (entrada === null) {
    continuar = false;
  } else {
    let numero = parseFloat(entrada.trim());

    if (!Number.isNaN(numero)) {
      suma += numero;
    } else {
      alert("No has ingresado un número válido. Por favor, ingresa un número.");
    }
  }
}

alert("La suma total de los números ingresados es: " + suma);
