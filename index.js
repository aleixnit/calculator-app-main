const buttons = document.querySelectorAll(".keyboard button");
const result = document.querySelector("#result");
let numero1 = null;
let numero2 = null;
let operador = null;
let resetearPantalla = false;

//Recorro todos los botones con el metodo 'for Each', para ejecutar la lógica correspondiente cuando se hace 'click' a un botón.
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {

    //Guardo en la variable buttonText el valor de la cadena que contiene cada boton, 1, 2, 3, +, -....
    const buttonText = event.target.textContent;

    //Switch case según el valor del botton que se ha pulsado 
    switch (buttonText) {
      case "RESET":
        result.textContent = "";
        numero1 = null;
        numero2 = null;
        operador = null;
        resetearPantalla = false;
        // Reiniciar el resultado y limpiar todo
        break;
      case "DEL":
        //Borrar el ultimo caracter de la cadena actual almacenada en result
        result.textContent = result.textContent.slice(0, -1);
        break;
      case "=":
        // Realizar el cálculo y mostrar el resultado
        // Si numero1, operador y result estan 
        if (numero1 && operador && result.textContent !== "") {
            numero2 = Number(result.textContent);
            const resultadoOperacion = calcular(numero1, operador, numero2);
            result.textContent = resultadoOperacion;
            numero1 = resultadoOperacion;
            operador = null;
            numero2 = null;
            resetearPantalla = true;
          }
        break;
      case "+":
        if (numero1 !== null && numero2 !== null) {
            const resultado = calcular(numero1, operador, numero2);
            result.textContent = resultado;
            numero1 = resultado;
            numero2 = null;
          }
          numero1 = Number(result.textContent);
          operador = buttonText;
          result.textContent = "";
          break;
        // result.textContent = "";
        // result.textContent += buttonText;
        break;
      case "-":
        if (numero1 !== null && numero2 !== null) {
            const resultado = calcular(numero1, operador, numero2);
            result.textContent = resultado;
            numero1 = resultado;
            numero2 = null;
          }
          numero1 = Number(result.textContent);
          operador = buttonText;
          result.textContent = "";
        break;
      case "x":
        if (numero1 !== null && numero2 !== null) {
            const resultado = calcular(numero1, operador, numero2);
            result.textContent = resultado;
            numero1 = resultado;
            numero2 = null;
          }
          numero1 = Number(result.textContent);
          operador = buttonText;
          result.textContent = "";
        break;
      case "/":
        if (numero1 !== null && numero2 !== null) {
            const resultado = calcular(numero1, operador, numero2);
            result.textContent = resultado;
            numero1 = resultado;
            numero2 = null;
          }
          numero1 = Number(result.textContent);
          operador = buttonText;
          result.textContent = "";
        break;
      default:
        if (resetearPantalla) {
            result.textContent = "";
            resetearPantalla = false;
          }
          result.textContent += buttonText;
        // Agregar el número o operador a la barra de resultados
        break;
    }
  });
});

function calcular(numero1, operador, numero2) {
    switch (operador) {
      case "+":
        return numero1 + numero2;
      case "-":
        return numero1 - numero2;
        break;
      case "x":
        return numero1 * numero2;
        break;
      case "/":
        return numero1 / numero2;
        break;
      default:
        return null;
    }
  }