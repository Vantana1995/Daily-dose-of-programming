const cgnTextContent = () => {
  const element = document.getElementById("textClick");
  element.textContent = "Thank for click on me";
};

document.getElementById("cgnOnClick").addEventListener("click", cgnTextContent);

const cgnMouseEnter = () => {
  const element = document.getElementById("textMouse");
  element.textContent = "Thanks for moving your mouse over me";
};

document
  .getElementById("mouseEnter")
  .addEventListener("mouseenter", cgnMouseEnter);

const changeOnDoubleClick = () => {
  const element = document.getElementById("cgnOnClick");
  element.innerHTML =
    '<img src="../img/click-1263.svg" class="scriptBtn" alt="Custom" />';
};

document
  .getElementById("cgnOnClick")
  .addEventListener("dblclick", changeOnDoubleClick);

const changeOnMouseOut = () => {
  const element = document.getElementById("mouseEnter");
  element.innerHTML =
    ' <img src="../img/move-svgrepo-com.svg" class="scriptBtn" alt="Custom" />';
};

document
  .getElementById("mouseEnter")
  .addEventListener("mouseout", changeOnMouseOut);
