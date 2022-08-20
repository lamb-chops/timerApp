class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //clicks start button, start method called
    this.startButton.addEventListener("click", this.start);

    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    console.log("timer started");
    //calls tick() every second, call it first so dont have to wait a full second before countdown
    this.tick();
    //this.timer allows it to be accessed elsewhere
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval);
    console.log("timer paused");
  };

  tick = () => {
    //how to call setter and getter
    this.timeRemaining = this.timeRemaining - 1
  };

  //how to write getter, acts like variable
  get timeRemaining() {
    //parse float converts string to decimal
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}
// # is how to select ID's
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
