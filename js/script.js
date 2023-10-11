/**
 * @author Álvaro Fonseca Hernandez
 * @GitHub
 */

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("calcula");
  const res = document.getElementById("result");

  calcula.addEventListener("click", function () {
    //Obtenemos los valores de los inputs que introducimos los usuarios
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    //Comprobamos que los inputs no estan vacios, es decir que se han introducido valores en ambos, si están vacíos, mostramos por pantalla un mensaje de aviso en lugar del resultado, sino hacemos ls operaciones pertinentes
    if (base === "" || altura === "") {
      result.innerHTML = `<span>Por favor, ingrese valores válidos</span>`;
    } else {
      //Efectuamos las operaciones necesarias para sacar los resultados, asegurándonos de parsear los valores que hemos introducido

      let area = parseFloat(base) * parseFloat(altura);
      
      let perimetro = 2 * (parseFloat(base) + parseFloat(altura));
      
      let diag = Math.sqrt(Math.pow(parseFloat(base), 2) + Math.pow(parseFloat(altura), 2));

      //Por último insertamos en el div result de html los diferentes spans con los resultados como fueron requeridos
      result.innerHTML = `
        <span id="area">Área del Rectángulo: ${area.toFixed(2)}</span>
        <span id="perimetro">Perímetro del Rectángulo: ${perimetro.toFixed(
          2
        )}</span>
        <span id="diag">Diagonal del Rectángulo: ${diag.toFixed(2)}</span>
    `;
    }
  });
});
