const buttons = document.querySelectorAll(".keyboard button");
const result = document.querySelector("#result");
const mostrarOperaciones = document.querySelector(".mostrarOperaciones");
let numero1 = null;
let numero2 = null;
let operador = null;
let resetearPantalla = false;

const colorToggle = document.querySelector("#colorToggle");
const body = document.querySelector("body");
const display = document.querySelector(".results");
const keyboard = document.querySelector(".keyboard");
colorToggle.addEventListener("change", () => {
  if (colorToggle.checked) {
    body.classList.add("light-mode");
    display.classList.add("display-light");
    keyboard.classList.add("keyboard-light");
  } else {
    body.classList.remove("light-mode");
    display.classList.remove("display-light");
    keyboard.classList.remove("keyboard-light");
  }
});

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
        mostrarOperaciones.textContent = "";
        // Reiniciar el resultado y limpiar todo
        break;
      case "DEL":
        //Borrar el ultimo caracter de la cadena actual almacenada en result
        result.textContent = result.textContent.slice(0, -1);
        break;
      case "=":
        // Realizar el cálculo y mostrar el resultado
        // Si numero1, operador y result estan
        if (
          numero1 !== null &&
          operador !== null &&
          result.textContent !== ""
        ) {
          numero2 = Number(result.textContent);
          const operacionRealizada = `${numero2}`;
          const resultadoOperacion = calcular(numero1, operador, numero2);
          result.textContent = resultadoOperacion;
          mostrarOperaciones.textContent += operacionRealizada + " = ";
          numero1 = null;
          numero2 = null;
          operador = null;
          resetearPantalla = true;
        }
        break;
      case "+":
        operacion(buttonText);
        break;
        // result.textContent = "";
        // result.textContent += buttonText;
        break;
      case "-":
        operacion(buttonText);
        break;
      case "x":
        operacion(buttonText);
        break;
      case "/":
        operacion(buttonText);
        break;
      case ".":
        // Verificar si el resultado actual ya contiene un punto decimal
        if (!result.textContent.includes(".")) {
          // Agregar el punto decimal al resultado actual
          result.textContent += buttonText;
        }
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

function operacion(buttonText) {
  if (numero1 === null && result.textContent !== "") {
    numero1 = Number(result.textContent);
    operador = buttonText;
    mostrarOperaciones.textContent = numero1 + " " + operador + " ";
    result.textContent = "";
  } else if (
    numero1 !== null &&
    operador !== null &&
    result.textContent !== ""
  ) {
    numero2 = Number(result.textContent);
    const operacionRealizada = `${numero1} ${operador} ${numero2}`;
    const resultadoOperacion = calcular(numero1, operador, numero2);
    mostrarOperaciones.textContent +=
      operacionRealizada + " " + buttonText + " ";
    numero1 = resultadoOperacion;
    operador = buttonText;
    result.textContent = "";
    resetearPantalla = true;
  }
}
