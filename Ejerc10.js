
const filas = parseInt (prompt ("ingrese una cantidad de filas"));
const columnas = parseInt (prompt ("ingrese una cantidad de columnas"));

const totalCeldas = filas * columnas;

document.write (` <table><tbody>`);
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    document.write (`<tr> <td>1</td>   
    </tr>`);
}

document.write (`</tbody></table>`);