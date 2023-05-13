const buttons = document.querySelectorAll(".keyboard button");
const result = document.querySelector("#result");
let numero1 = null;
let numero2 = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.textContent;

    switch (buttonText) {
      case "RESET":
        result.textContent = "";
        // Reiniciar el resultado
        break;
      case "DEL":
        result.textContent = result.textContent.slice(0, -1);
        break;
      case "=":
        // Realizar el cálculo y mostrar el resultado
        break;
      case "+":
        break;
      case "-":
        break;
      case "x":
        break;
      case "/":
        break;
      default:
        result.textContent += buttonText;
        // Agregar el número o operador al resultado
        break;
    }
  });
});
