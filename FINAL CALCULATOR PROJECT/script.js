let display = document.querySelectorAll(".display");
let buttons = document.querySelectorAll(".button");
let buttons2 = document.querySelectorAll(".button2");
let container = document.querySelector("#cont");
let secondContainer = document.querySelector(".container2");
let btn = document.querySelectorAll(".btn1");
let section = document.querySelector("section");

buttons.forEach((button) => {
  button.addEventListener("click", switchFunc);
});

buttons2.forEach((button) => {
  button.addEventListener("click", switchFunc);
});
function switchFunc(e) {
  display.forEach((disp) => {
    switch (e.target.innerText) {
      case "C":
        disp.innerText = "";
        break;
      case "→":
        disp.innerText = disp.innerText.slice(0, -1);
        break;
      case "=":
        if (disp.innerText) {
          try {
            disp.innerText = eval(disp.innerText);
          } catch {
            disp.innerText = "Error!";
          }
        }
        break;
      case "√":
        disp.innerText = Math.sqrt(disp.innerText);
        break;
      case "π":
        disp.innerText = 3.14;
        break;
      case "x^2":
        disp.innerText = disp.innerText ** 2;
        break;
      case "cos":
        disp.innerText = Math.cos(disp.innerText);
        break;
      case "log":
        disp.innerText = Math.log(disp.innerText);
        break;
      case "tan":
        disp.innerText = Math.tan(disp.innerText);
        break;
      case "in":
        disp.innerText = Math.in(disp.innerText);
        break;
      case "|x|":
        disp.innerText = Math.abs(disp.innerText);
        break;
      case "e":
        disp.innerText = Math.E;
        break;
      case "+/-":
        disp.innerText = `(-${disp.innerText} ) `;
        break;
      case "1/x":
        disp.innerText = 1 / disp.innerText;
        break;
      case "%":
        disp.innerText = disp.innerText / 100;
        break;
      default:
        disp.innerText += e.target.innerText;
    }
  });
}

btn.forEach((btnn) => {
  btnn.addEventListener("click", rotate1);
});

function rotate1() {
  container.classList.toggle("show-display");
  secondContainer.classList.toggle("dis");
}
