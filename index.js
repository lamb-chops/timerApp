class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //clicks start button, start method called
    this.startButton.addEventListener("click", this.start);
  }

  start = () => {
    console.log("timer started");
    //calls tick() every second, call it first so dont have to wait a full second before countdown
    this.tick();
    setInterval(this.tick, 1000);
  };

  tick = () => {
    console.log("tick");
  };
}
// # is how to select ID's
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
