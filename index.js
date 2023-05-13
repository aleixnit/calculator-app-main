const buttons = document.querySelectorAll('.keyboard button');
const result = document.querySelector('#result');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      const buttonText = event.target.textContent;
      
      switch (buttonText) {
        case 'RESET':
          result.textContent = ''; 
          // Reiniciar el resultado
          break;
        case '=':
          // Realizar el cálculo y mostrar el resultado
          break;
        default:
          result.textContent += buttonText; 
          // Agregar el número o operador al resultado
          break;
      }
    });
  });