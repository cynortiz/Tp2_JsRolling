let cadenasConcatenadas = '';

while (true) {
  let cadena = prompt("Escribe una cadena de texto o presiona 'cancelar' para salir:");

  if (cadena === null) {
    break;
  }

  if (cadenasConcatenadas === '') {
    cadenasConcatenadas = cadena;
  } else {
    cadenasConcatenadas += '-' + cadena;
  }
}

if (cadenasConcatenadas === '') {
  alert("No se ingresaron cadenas.");
} else {
  const confirmar = confirm("¿Deseas concatenar las cadenas ingresadas?");
  
  if (confirmar) {
    alert("Cadenas concatenadas: " + cadenasConcatenadas);
  } else {
    alert("No se concatenaron las cadenas.");
  }
}

