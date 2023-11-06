const nota = prompt("Ingresa una nota (número del 0 al 10):");
const notaNumerica = parseFloat(nota);

if (!isNaN(notaNumerica) && notaNumerica >= 0 && notaNumerica <= 10) {
  switch (true) {
    case notaNumerica >= 0 && notaNumerica <= 2:
      alert("Muy deficiente");
      break;
    case notaNumerica >= 3 && notaNumerica <= 4:
      alert("Insuficiente");
      break;
    case notaNumerica >= 5 && notaNumerica <= 6:
      alert("Suficiente");
      break;
    case notaNumerica === 7:
      alert("Bien");
      break;
    case notaNumerica >= 8 && notaNumerica <= 9:
      alert("Notable");
      break;
    case notaNumerica === 10:
      alert("Sobresaliente");
      break;
    default:
      alert("Número erróneo");
  }
} else if (nota !== null && nota !== "") {
  alert("Introduce un número válido");
} else {
  alert("Introduce un número válido");
}

