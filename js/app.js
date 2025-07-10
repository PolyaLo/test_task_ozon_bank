// // Получаем элемент input по ID
// const progressInput = document.getElementById("progressInput");
// const circle = document.getElementById("progressCircle");

// progressInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     const value = this.value;
//     console.log("Значение по Enter:", value);

//     // Действия с полученным значением
//     const maxOffset = 456;
//     const newOffset = maxOffset - (maxOffset * value) / 100;
//     // Обновляем CSS-переменную или напрямую свойство
//     circle.style.setProperty("--progress", newOffset);
//     // Перезапускаем анимацию
//     circle.style.animation = "none";
//     void circle.offsetHeight; // Триггер reflow
//     circle.style.animation = null;
//     requestAnimationFrame(() => {
//       circle.style.animation = "anim 2s forwards";
//     });
//   }
// });

// document.getElementById("animate").addEventListener("change", function () {
//   const animateToggle = document.getElementById("animate");

//   animateToggle.addEventListener("change", function () {
//     if (this.checked) {
//       console.log("вкл вращение");
//       circle.style.animation = "rotate 2s infinite"; // запуск анимации
//     } else {
//       circle.style.animation = "none"; // остановка анимации
//     }
//   });
// });

// Получаем элемент input по ID
const progressInput = document.getElementById("progressInput");
const circle = document.getElementById("progressCircle");
const animateToggle = document.getElementById("animate");
const hideToggle = document.getElementById("hide");
const styleToggle = document.getElementById("skill");
// Текущее значение прогресса (по умолчанию 0)
let currentProgress = 0;

// Обработчик ввода значения
progressInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = parseInt(this.value);
    if (value >= 0 && value <= 100) {
      currentProgress = value;
      updateProgress(value);
    } else {
      alert("Введите число от 0 до 100");
    }
  }
});

// Обновление прогресс-бара
function updateProgress(value) {
  const maxOffset = 456;
  const newOffset = maxOffset - (maxOffset * value) / 100;

  circle.style.setProperty("--progress", newOffset);
  circle.style.animation = "none";
  void circle.offsetHeight; // Триггер reflow
  requestAnimationFrame(() => {
    circle.style.animation = 'anim 2s forwards';
  });
}

// Обработчик animate
animateToggle.addEventListener("change", function () {
  if (this.checked) {
    // Если анимация включена, вращаем круг с сохранением текущего прогресса
    circle.style.animation = `rotate 2s infinite linear, anim 0.1s forwards`;
  } else {
    // Если анимация выключена, останавливаем вращение, но сохраняем прогресс
    circle.style.animation = `anim 0.1s forwards`;
  }
});

// // Обработчик hide
// hideToggle.addEventListener("change", function () {
//   if (this.checked) {
//     styleToggle.style.setProperty("--hide", "none");
//     console.log("hide вкл");
//   } else {
//     styleToggle.style.setProperty("--hide");
//     console.log("hide выкл");
//   }
// });

const skillElement = document.getElementById("skill");

hideToggle.addEventListener("change", function () {
  styleToggle.classList.toggle("hidden", this.checked);
});
