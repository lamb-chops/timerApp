// # is how to select ID's
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
// ' is how to select html elem
const circle = document.querySelector("circle");

const permimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", permimeter);

let duration;

//callbacks in {...} which is object
const timer = new Timer(durationInput, startButton, pauseButton, {
  //call backs signal to world something happened
  onStart(totalDuration) {
    console.log("timer started");
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (permimeter * timeRemaining) / duration - permimeter
    );
  },

  onComplete() {
    console.log("timer paused");
  },
});
