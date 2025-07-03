const display = document.getElementById("display");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button[data-key]");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    history.innerHTML += `<div>${expression} = ${result}</div>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support + Visual Feedback
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") return calculate();
  if (e.key === "Backspace") return deleteLast();
  if (e.key.toLowerCase() === "c") return clearDisplay();

  const btn = document.querySelector(`button[data-key="${e.key}"]`);
  if (btn) {
    btn.classList.add("pressed");
    setTimeout(() => btn.classList.remove("pressed"), 200);
    append(e.key);
  }
});
