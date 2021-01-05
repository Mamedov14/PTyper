let textBlock = document.getElementById("textBlock");
let textPlace = document.getElementById("textPlace");
let startBtn = document.getElementById("startBtn");
let speed = document.getElementById("totalSpeed");
let startTime;

function keyHandler(e) {
  let len = textPlace.value.length;
  if (textPlace.value === textBlock.textContent) {
    showTotalSpeed();
    textBlock.style.color = "#f8f4e6";
  } else if (textPlace.value != textBlock.textContent.slice(0, len)) {
    e.target.style.backgroundColor = "red";
  } else {
    e.target.style.backgroundColor = "white";
  }

}

function showTotalSpeed() {
  let seconds = (Date.now() - startTime) / 1000;
  let len = textBlock.textContent.length;

  speed.textContent = "Итоговая скорость: ";
  speed.textContent += Math.round(len / seconds * 60);
  alert("Уровень завершен! Твоя скорость " +
    Math.round(len / seconds * 60));
  textPlace.value = "";

}

/*
  Надо убарть вложенную функцию
*/ 
function startGame(e) {
  speed.textContent = "Начало через: " + 3;
  for (let i = 3; i > 0; i--) {
    setTimeout(function () {
      speed.textContent = "Начало через: " + (i - 1);
      if (i == 1) {
        textBlock.style.color = "black";
        speed.textContent = "Итоговая скорость: ";
        startTime = Date.now();
      }
    }, 1000 * (4 - i));
  }
  textPlace.focus();
}


textPlace.addEventListener("keyup", keyHandler);
startBtn.addEventListener("click", startGame);