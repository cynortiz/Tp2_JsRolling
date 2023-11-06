let edad = prompt("Por favor, ingresa tu edad:");

if (edad !== null && edad !== "") {
  edad = parseInt(edad);

  if (edad >= 18) {
    document.write("¡Puedes conducir!");
  } else {
    document.write("Lo siento, eres menor de edad y no puedes conducir.");
  }
} else {
  document.write("No ingresaste una edad válida.");
}
