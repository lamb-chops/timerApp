// # is how to select ID's
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

//callbacks in {...} which is object
const timer = new Timer(durationInput, startButton, pauseButton, {
  //call backs signal to world something happened
  onStart() {
    console.log("timer started");
  },

  onTick() {
    console.log("tick");
  },

  onComplete() {
    console.log("timer paused");
  },
});
