// getting progress from a user by id
const progressInput = document.getElementById("progressInput");

// managing the progress ring
const progressCircle = document.getElementById("progressCircle");
// animation and hide switches
const animateToggle = document.getElementById("animate");
const hideToggle = document.getElementById("hide");
// block circular progress
const styleToggle = document.getElementById("skill");
// сurrent progress value (default is 0)
let currentProgress = 0;

// processing of value input the field of pressing enter
progressInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = parseInt(this.value);
    // checking the progress value
    if (value >= 0 && value <= 100) {
      currentProgress = value;
      updateProgress(value);
    } else {
      alert("Enter a number from 0 to 100");
    }
  }
});

// updating the progress bar
function updateProgress(value) {
  const maxOffset = 456; // 2*pi*r(2*3.14*72.5)
  const newOffset = maxOffset - (maxOffset * value) / 100;
  // starting the progress animation after getting a new value
  progressCircle.style.setProperty("--progress", newOffset); //passing a new value to the --progress variable
  progressCircle.style.animation = "none"; // resetting the animation
  void progressCircle.offsetHeight; // forced launch reflow
  // delay for animation and start a new one
  requestAnimationFrame(() => {
    progressCircle.style.animation = "anim 2s forwards";
  });
}

// animate handler
animateToggle.addEventListener("change", function () {
  if (this.checked) {
    // if animation is enabled, rotate the circle while maintaining the current progress
    progressCircle.style.animation = `rotate 2s infinite linear, anim 0.1s forwards`;
  } else {
    // if the animation is turned off, stop the rotation, but save the progress
    progressCircle.style.animation = `anim 0.1s forwards`;
  }
});

// hide handler
// the hide handler is a hidden application for #skill
hideToggle.addEventListener("change", function () {
  styleToggle.classList.toggle("hidden", this.checked);
});
