let selectedOperation = null;

const operationButton = document.querySelectorAll(".operation-btn");
operationButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    selectedOperation = e.target.value;
  });
});

function calculateResult(event) {
  event.preventDefault();

  const x = parseFloat(document.getElementById("x").value);
  const z = parseFloat(document.getElementById("z").value);

  if (!selectedOperation) {
    document.getElementById("outputResult").textContent =
      "Select an operation!";

    return;
  }

  let result;

  switch (selectedOperation) {
    case "+":
      result = x + z;
      break;
    case "-":
      result = x - z;
      break;
    case "*":
      result = x * z;
      break;
    case "/":
      result = z !== 0 ? x / z : "You cant divide by 0 ";
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("outputResult").textContent = `Result: ${result}`;
}

document
  .getElementById("calculateForm")
  .addEventListener("submit", calculateResult);
