# Реализация блока Progress с круговым индикатором

В данном проекте реализован круговой индикатор прогресса с интерактивными элементами управления. Пользователь может вводить значение прогресса, приводить его в движение по кругу, а так же скрывать/показывать индикатор прогресса.
Дизайн легко адаптируется между портретной и альбомной ориентациями.

![Скриншот с круговым индикатором выполнения]<img width="214" height="362" alt="image" src="https://github.com/user-attachments/assets/836b2759-bd1b-449c-a738-ababb3bf0710" />


## Особенности
- Интерактивный ввод результатов (диапазон от 0 до 100)
- Переключатель анимации для движения по кругу
- Функция скрытия / отображения
- Адаптивный дизайн, который адаптируется к ориентации экрана

## Используемые технологии
- HTML5
- CSS3 (Flexbox, анимация, медиа-запросы)
- JavaScript (манипуляции с DOM, обработка событий)

      
## Как использовать
1. Введите значение (от 0 до 100) в поле ввода и нажмите Enter
2. Переключите переключатель "Animate", чтобы включить/выключить вращение
3. Используйте переключатель "Hide", чтобы скрыть/показать индикатор

## Ключевые детали реализации

### Основные моменты CSS
- Макет Flexbox для адаптивного центрирования
- Круг прогресса на основе SVG с анимацией обводки
- Переменные CSS для динамического расчета прогресса
- Медиа-запросы для адаптации ориентации
- Переключатели в пользовательском стиле с анимацией

### Функциональность JavaScript
// Update progress on Enter key
progressInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const value = parseInt(this.value);
    if (value >= 0 && value <= 100) {
      currentProgress = value;
      updateProgress(value);
    }
  }
});

// Update progress visualization
function updateProgress(value) {
  const maxOffset = 456; // 2*π*r (2*3.14*72.5)
  const newOffset = maxOffset - (maxOffset * value) / 100;
  progressCircle.style.setProperty("--progress", newOffset);
  
  // Reset and restart animation
  progressCircle.style.animation = "none";
  void progressCircle.offsetHeight;
  progressCircle.style.animation = "anim 2s forwards";
}

// Handle animation toggle
animateToggle.addEventListener("change", function() {
  if (this.checked) {
    progressCircle.style.animation = "rotate 2s infinite linear, anim 0.1s forwards";
  } else {
    progressCircle.style.animation = "anim 0.1s forwards";
  }
});

// Handle visibility toggle
hideToggle.addEventListener("change", function() {
  styleToggle.classList.toggle("hidden", this.checked);
});
## Адаптивный дизайн
Макет автоматически адаптируется в зависимости от соотношения сторон экрана:
- Портретный режим (по умолчанию): Вертикальный макет
- Ландшафтный режим (минимальное соотношение сторон: 538/320): Горизонтальный макет

