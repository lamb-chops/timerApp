class Timer{
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        //clicks start button, start method called
        this.startButton.addEventListener('click', this.start)
    }

    start(){
        console.log("timer started")
    }
}
// # is how to select ID's
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)