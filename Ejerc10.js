
const filas = parseInt (prompt ("ingrese una cantidad de filas"));
const columnas = parseInt (prompt ("ingrese una cantidad de columnas"));

const totalCeldas = filas * columnas;

document.write (` <table><tbody>`);
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    document.write (`<tr>`);
    for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
      document.write(`<td>1</td>`); 
    }
    document.write(`</tr>`);
}

document.write (`</tbody></table>`);